import React from 'react';
import styles from './Order.module.css';
import moment from 'moment';
import CheckProduct from '../../Checkout/CheckoutProduct/CheckProduct';
import CurrencyFormat from 'react-currency-format';

function Order(props) {
    return (
        <div className={styles.order}>
            <h2>Order</h2>
            <p>{moment.unix(props.order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className={styles.order__id}>
                <small>{props.order.id}</small>
            </p>
            {props.order.data.basket?.map(item =>(
                 <CheckProduct 
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 ratings={item.ratings}
                 disableButton
                 />
            ))}
            <CurrencyFormat 
                renderText={(value) => {
                return <h3 className={styles.order__total}>Order Total: {value}</h3>
                }}
                decimalScale={2}
                value={props.order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}

export default Order;
