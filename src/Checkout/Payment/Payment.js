import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../../axios';
import React, {useState, useEffect} from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../StateProvider/reducer';
import { useStateValue } from '../../StateProvider/StateProvider';
import CheckProduct from '../CheckoutProduct/CheckProduct';
import styles from './Payment.module.css';
import { db } from '../../fireBase';

function Payment() {
    const [{user, basket}, dispatch] = useStateValue();
    const history = useHistory(); 

    const [succeded, setSucceded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        if (basket.length){
            const getClientSecret = async() =>{
                const response = await axios({
                    method: 'post',
                    url: `/payment/create?total=${Math.round(getBasketTotal(basket) * 100)}`
                });
                setClientSecret(response.data.clientSecret);
           };
           getClientSecret();
        }
       

    }, [basket]);

    console.log('The Secret is >>> ', clientSecret);
    console.log('The User is >>> ', user);

    const paymentHandler = async(e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            }).then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            
            // paymentIntent = Payment confirmation
            setSucceded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        })
    }

    const changeHandler = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }

    return (
        <div className={styles.payment}>
            <div className={styles.payment__container}>
                <h1>Checkout(
                    <Link to="/checkout">{basket?.length} items</Link>
                )</h1>
                <div className={styles.payment__section}>
                    <div className={styles.payment__title}>
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className={styles.payment__address}>
                        <p>{user?.email}</p>
                        <p>123 Cooper St</p>
                        <p>Arlington, Texas</p>
                    </div>
                </div>
                <div className={styles.payment__section}>
                    <div className={styles.payment__title}>
                        <h3>Review Item(s)</h3>
                    </div>
                    <div className={styles.payment__items}>
                        {basket.map(item =>
                            <CheckProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            ratings={item.ratings}
                            />
                        )}
                    </div>
                </div>
                <div className={styles.payment__section}>
                    <div className={styles.payment__title}>
                        <h3>Payment Method</h3>
                    </div>
                    <div className={styles.payment__details}>
                        <form onSubmit={paymentHandler}>
                            <CardElement onChange={changeHandler}/>

                            <div className={styles.payment__priceContainer}>
                                <CurrencyFormat 
                                    renderText={(value) => {
                                    return <h3>Order Total: {value}</h3>
                                    }}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeded}>
                                    <span>{processing ? <p>Processing</p> : "Pay now"}</span>
                                </button>
                            </div>
                            {error && <div>Error</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
