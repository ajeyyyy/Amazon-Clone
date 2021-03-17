import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './fireBase';
import { useStateValue } from './StateProvider/StateProvider';
import { useEffect } from 'react';
import Payment from './Checkout/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders/Orders';

const promise = loadStripe('pk_test_51IVAVAIT0LJjRYwPgoceeKJLb7db30Wdd1n4b2q7HfXDhJYeIv4cxXqkCF7D4Sk1LTkM8dZ1sddYhPDZqkmWloQ4001Ks1o50Z');


function App() {
  const [ ,dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      // console.log('The USER is >>>>', authUser);

      if(authUser){
        //  logged in USER
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }else{
        //  No USER logged in
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">   
            <Header/> 
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>            
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
      
    </Router>
    
  );
}

export default App;
