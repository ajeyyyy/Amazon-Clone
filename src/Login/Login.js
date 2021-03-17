import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../fireBase';
import styles from './Login.module.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/');
        })
        .catch(error => alert(error.message));
    };

    const createAccHandler = (e) =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // console.log(auth)
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    };

    return (
        <div className={styles.login}>
            <Link to='/'>
                <img 
                className={styles.login__logo}
                src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="amazon logo" />
            </Link>

            <div className={styles.login__container}>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    type='text' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                    type='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                    onClick={signInHandler} 
                    type='submit'
                    className={styles.login__signInButton}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's <strong>CLONE</strong> Conditions of Use and Privacy Notice.</p>

                <button 
                onClick={createAccHandler} 
                className={styles.login__createAccButton}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;
