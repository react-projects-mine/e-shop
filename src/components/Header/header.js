import React from "react";
import "./header.scss";

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <div className="header-logo-image"></div>
                <div className="header-logo-name">eShop</div>
            </div>
            <div className="header-search">
                <div className="header-search-input">
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="header-search-icon">
                    <i className="fa fa-search"></i>
                </div>
            </div>
            <div className="header-options">
                <div className="header-title-display">
                    <div className="header-title">Hello Guest</div>
                    <div className="header-display">Sign In</div>
                </div>
                <div className="header-title-display">
                    <div className="header-title">Your</div>
                    <div className="header-display">Shop</div>
                </div>
                <div className="header-icon-count">
                    <div className="header-bag-icon"></div>
                    <div className="header-bag-count">0</div>
                </div>
            </div>
        </div>
    );
};

export default Header;