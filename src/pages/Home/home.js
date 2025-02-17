import React from 'react';

import Product from '../products/product';

import { banner } from '../../assets/images/images';

import "./home.scss";

function Home () {    
    return (
        <div className="home-container">    
            <div className="banner">
                <div className="banner-image">
                    <img src={banner} alt="banner" />
                </div>
            </div>

            <div className="product-widget">
                <Product />
            </div>
        </div>
    );
};  

export default Home;