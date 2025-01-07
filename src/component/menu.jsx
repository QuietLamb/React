import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Menu(){

    const {cart} = useCart();

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="header__logo">
                        <Link to="/index"><img src="ASSETS/img/logo.png" alt=""/></Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <nav className="header__menu mobile-menu">
                        <ul>
                            <li className="active"><Link to="/index">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/shop-details">Shop Details</Link></li>
                                    <li><Link to="/shopping-cart">Shopping Cart</Link></li>
                                    <li><Link to="/checkout">Check Out</Link></li>
                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contacts</Link></li>

                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="header__nav__option">
                        <a href="#" className="search-switch"><img src="ASSETS/img/icon/search.png" alt=""/></a>
                        <a href="#"><img src="ASSETS/img/icon/heart.png" alt=""/></a>
                        <Link to="/shopping-cart"><img src="ASSETS/img/icon/cart.png" alt=""/> <span>{cart.length}</span></Link>
                        <div className="price"></div>

                    </div>
                </div>
            </div>
            <div className="canvas__open"><i className="fa fa-bars"></i></div>
        </div>
    );
}

export default Menu;