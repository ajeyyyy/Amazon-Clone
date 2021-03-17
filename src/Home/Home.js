import React from 'react'
import Product from '../Product/Product';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.home__container}>
                <img 
                className={styles.home__banner}
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWQ0NzdiNzQt/MWQ0NzdiNzQt-ZDNhZmVhNzAt-w3000._CB661669468_.jpg"
                alt="home banner"
                /> 
                <div className={styles.home__row}>
                    <Product 
                    id="1"
                    title='KRUPS Cool-touch Stainless Steel Double Wall Electric Kettle, 1.5L, Black'
                    price={19.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/71%2BHq%2BNfWWL._AC_SX679_.jpg'
                    ratings={5}
                    />
                    <Product 
                    id="2"
                    title='MASTERTOP Spin Mop Bucket System with Wringer Set - Floor Mop Stainless Steel Mop Handle, Mop Buckets Separate Clean and Dirty Water, 3 Replacement Microfiber Mop Head, Cleaning Bucket Easy to Store'
                    price={57.99}
                    image='https://m.media-amazon.com/images/I/71Lb8MAPGqL._AC_UL320_.jpg'
                    ratings={4}
                    />
                    <Product 
                    id="3"
                    title='Bounty Quick-Size Paper Towels, White, 12 Family Rolls = 30 Regular Rolls (Packaging May Vary)'
                    price={30.44}
                    image='https://m.media-amazon.com/images/I/712Bz4WprJL._AC_UL320_.jpg'
                    ratings={5}
                    />
                </div>
                <div className={styles.home__row}>
                    <Product 
                    id="4"
                    title='Fridge Calendar Magnetic Dry Erase Calendar Whiteboard Calendar For Refrigerator Planners 16.9 Inches X 11.8 Inches'
                    price={8.99}
                    image='https://m.media-amazon.com/images/I/71nED8lt7iL._AC_UL320_.jpg'
                    ratings={3}
                    />
                    <Product
                    id="5"
                    title='Apollo Tools Original 39 Piece General Household Tool Set in Toolbox Storage Case with Essential Hand Tools for Everyday Home Repairs'
                    price={20.59}
                    image='https://m.media-amazon.com/images/I/815HG6H1nxL._AC_UL320_.jpg'
                    ratings={2}
                     />
                    <Product 
                    id="6"
                    title='GELIVABLE Mold and Mildew Remover Gel Household Cleaner for Wall Tiles Grout Sealant Bathroom Cleaning Home Kitchen Sinks Cleaning - 5 Fl.Oz'
                    price={13.99}
                    image='https://m.media-amazon.com/images/I/61E4e3lr-ML._AC_UL320_.jpg'
                    ratings={1}
                    />
                </div>
                <div className={styles.home__row}>
                    <Product
                    id="7" 
                    title='Samsung UN55TU8000 55" 8 Series Ultra High Definition Smart 4K Crystal TV with a Samsung HW-Q800T 3.1.2 Ch Dolby Atmos Soundbar and Wireless Subwoofer (2020)'
                    price={1195.98}
                    image='https://images-na.ssl-images-amazon.com/images/I/61DIUfDxBtL._AC_SL1000_.jpg'
                    ratings={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
