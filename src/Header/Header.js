import React from 'react'
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../fireBase';


function Header() {
    const [{basket, user}, ] = useStateValue();

    const handleAuthentication = () => {
        if (user){
            auth.signOut();
        }
    };

    return (
        <div className={styles.header}>
            {/* Logo */}
            <Link to="/">
                <img 
                className={styles.header__logo}
                src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="no img" 
                />
            </Link>
            {/* search bar */}
            <div className={styles.header__search}>
                {/* input text */}
                <input type="text" className={styles.searchInput} />
                {/* search icon */}
                <SearchIcon className={styles.searchIcon} />
            </div>
            
            <div className={styles.header__nav}>
                {/* sign in link */}
                <Link to={!user && "/login"} className={styles.header__link}>
                    <div onClick={handleAuthentication} className={styles.header__option}>
                        <span className={styles.header__optionLineOne}>Hello, {user ? user.email : 'Guest'}</span>
                        <span className={styles.header__optionLineTwo}>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {/* Return or order link */}
                <Link to="/orders" className={styles.header__link}>
                    <div className={styles.header__option}>
                        <span className={styles.header__optionLineOne}>Returns</span>
                        <span className={styles.header__optionLineTwo}>& Orders</span>
                    </div>
                </Link>
                <Link to="/" className={styles.header__link}>
                    <div className={styles.header__option}>
                        <span className={styles.header__optionLineOne}>Your</span>
                        <span className={styles.header__optionLineTwo}>Prime</span>
                    </div>
                </Link>
                {/* Shooping cart */}
                <Link to="/checkout" className={styles.header__link}>
                    <div className={styles.shoppingCart}>
                        <ShoppingCartIcon />
                        <span className={styles.header__optionLineTwo+" "+styles.cartCount}>{basket?.length}</span>
                    </div>     
                </Link>
            </div>
        </div>
    )
}

export default Header
