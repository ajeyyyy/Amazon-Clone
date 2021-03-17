import React, { useEffect, useState } from 'react';
import { db } from '../fireBase';
import { useStateValue } from '../StateProvider/StateProvider';
import Order from './Order/Order';
import styles from './Orders.module.css';

function Orders() {
    const [{ user}] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }else{
            setOrders([]);
        }
       
    }, [user]);
    console.log(orders);
    return (
        <div className={styles.orders}>
            <h1>Your Order(s)</h1>
            <div className={styles.orders__order}>
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
               
            </div>
        </div>
    )
}

export default Orders;