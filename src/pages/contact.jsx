import React, { Fragment } from 'react';
import Topheader from '../component/topheader';
import Header from '../component/header';
import Menu from '../component/menu';

function Contact(){
    return(
        <Fragment>
            <div>
    {/* <!-- Offcanvas Menu Begin --> */}
    {/* <div className="offcanvas-menu-overlay"></div>
    <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__option">
            <div className="offcanvas__links">
                <a href="#">Sign in</a>
                <a href="#">FAQs</a>
            </div>
            <div className="offcanvas__top__hover">
                <span>Usd <i className="arrow_carrot-down"></i></span>
                <ul>
                    <li>USD</li>
                    <li>EUR</li>
                    <li>USD</li>
                </ul>
            </div>
        </div>
        <div className="offcanvas__nav__option">
            <a href="#" className="search-switch"><img src="ASSETS/img/icon/search.png" alt=""/></a>
            <a href="#"><img src="ASSETS/img/icon/heart.png" alt=""/></a>
            <a href="#"><img src="ASSETS/img/icon/cart.png" alt=""/> <span>0</span></a>
            <div className="price">$0.00</div>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__text">
            <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
    </div> */}
    <Topheader/>
    <Header/>
    <Menu/>
    {/* <!-- Offcanvas Menu End -->

    <!-- Header Section Begin --> */}
    {/* <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="header__top__left">
                            <p>Free shipping, 30-day return or refund guarantee.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="header__top__right">
                            <div className="header__top__links">
                                <a href="#">Sign in</a>
                                <a href="#">FAQs</a>
                            </div>
                            <div className="header__top__hover">
                                <span>Usd <i className="arrow_carrot-down"></i></span>
                                <ul>
                                    <li>USD</li>
                                    <li>EUR</li>
                                    <li>USD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="ASSETS/img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <nav className="header__menu mobile-menu">
                        <ul>
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><a href="./about.html">About Us</a></li>
                                    <li><a href="./shop-details.html">Shop Details</a></li>
                                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                    <li><a href="./checkout.html">Check Out</a></li>
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li className="active"><a href="./contact.html">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="header__nav__option">
                        <a href="#" className="search-switch"><img src="ASSETS/img/icon/search.png" alt=""/></a>
                        <a href="#"><img src="ASSETS/img/icon/heart.png" alt=""/></a>
                        <a href="#"><img src="ASSETS/img/icon/cart.png" alt=""/> <span>0</span></a>
                        <div className="price">$0.00</div>
                    </div>
                </div>
            </div>
            <div className="canvas__open"><i className="fa fa-bars"></i></div>
        </div>
    </header> */}
    {/* <!-- Header Section End -->

    <!-- Contact Section Begin --> */}
    <section className="contact spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="contact__text">
                        <div className="section-title">
                            <span>Information</span>
                            <h2>Contact Us</h2>
                            <p>As you might expect of a company that began as a high-end interiors contractor, we pay
                                strict attention.</p>
                        </div>
                        <ul>
                            <li>
                                <h4>America</h4>
                                <p>195 E Parker Square Dr, Parker, CO 801 <br />+43 982-314-0958</p>
                            </li>
                            <li>
                                <h4>France</h4>
                                <p>109 Avenue Léon, 63 Clermont-Ferrand <br />+12 345-423-9893</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="contact__form">
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" placeholder="Email"/>
                                </div>
                                <div className="col-lg-12">
                                    <textarea placeholder="Message"></textarea>
                                    <button type="submit" className="site-btn">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Contact Section End -->

    <!-- Footer Section Begin --> */}
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <a href="#"><img src="ASSETS/img/footer-logo.png" alt=""/></a>
                        </div>
                        <p>The customer is at the heart of our unique business model, which includes design.</p>
                        <a href="#"><img src="ASSETS/img/payment.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="#">Clothing Store</a></li>
                            <li><a href="#">Trending Shoes</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Sale</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Payment Methods</a></li>
                            <li><a href="#">Delivary</a></li>
                            <li><a href="#">Return & Exchanges</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div className="footer__widget">
                        <h6>NewLetter</h6>
                        <div className="footer__newslatter">
                            <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                            <form action="#">
                                <input type="text" placeholder="Your email"/>
                                <button type="submit"><span className="icon_mail_alt"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="footer__copyright__text">
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        <p>Copyright ©
                            <script>
                                document.write(new Date().getFullYear());
                            </script>2020
                            All rights reserved | This template is made with <i className="fa fa-heart-o"
                                aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer Section End -->

    <!-- Search Begin --> */}
    <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-switch">+</div>
            <form className="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....."/>
            </form>
        </div>
    </div>
</div>
        </Fragment>
    );
}

export default Contact;