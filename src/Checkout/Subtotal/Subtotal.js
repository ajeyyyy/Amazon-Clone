import React from 'react';
import styles from './Subtotal.module.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider/StateProvider';
import { getBasketTotal } from '../../StateProvider/reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{basket}, ] = useStateValue();
    let disable=false;

    if(basket.length===0)
        disable=true


    return (
        <div className={styles.subtotal}>
            <CurrencyFormat 
            renderText={(value) => {
               return <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className={styles.subtotal__gift}>
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>
            }}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={'$'}
            />
        
            <button disabled={disable} onClick={e => history.push("/payment")}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
