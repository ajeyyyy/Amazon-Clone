import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import styles from './Checkout.module.css';
import CheckProduct from './CheckoutProduct/CheckProduct';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
    const [{basket}, ] = useStateValue();

    return (
        <div className={styles.checkout}>
            <div className={styles.checkout__left}>
                <div>
                    <h2 className={styles.checkout__title}>Your Shopping Basket</h2>
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
            <div className={styles.checkout__right}>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
