import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import styles from './Product.module.css';

function Product(props) {
    const [, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                ratings: props.ratings
            }
        });
    };

    return (
        <div className={styles.product}>
            <div className={styles.product__info}>
                <p>{props.title}</p>
                <p className={styles.product__price}>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className={styles.product__rating}>
                    {Array(props.ratings).fill().map((_, i) => (
                        <p style={{marginRight: '2px'}}>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img 
            src={props.image}
            alt="product img"
            />
            <button onClick={addToBasket}>Add to Cart</button>
            
        </div>
    )
}

export default Product;
