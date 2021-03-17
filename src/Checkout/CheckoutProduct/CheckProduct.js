import React from 'react';
import { useStateValue } from '../../StateProvider/StateProvider';
import styles from './CheckProduct.module.css';

function CheckProduct(props) {
    const [ ,dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: props.id
        });
    };

    return (
        <div className={styles.checkProduct}>
            <img className={styles.checkProduct__image} src={props.image} alt="Product Img"/>

            <div className={styles.checkProduct_info}>
                <p className={styles.checkProduct__title}>{props.title}</p>
                <p className={styles.checkProduct__price}>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className={styles.checkoutProduct__rating}>
                    {Array(props.ratings).fill().map((_, i) => (
                        <p style={{marginRight: '2px'}}>⭐</p>
                    ))}
                    
                </div>
                {!props.disableButton && 
                <button onClick={removeFromCart}>Remove from Cart</button>
                }
                
            </div>
        </div>
    )
}

export default CheckProduct;
