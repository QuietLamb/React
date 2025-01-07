import React, { Fragment } from 'react';
import Menu from '../component/menu';
import Homeproduct from './homeproduct';
import TopHeader from '../component/topheader';
import Header from '../component/header';

const Index = () => {
    return(
        <div>
            {/* <TopHeader/> */}
            {/* <!-- Offcanvas Menu Begin --> */}
            {/* <!-- Offcanvas Menu End -->

            <!-- Header Section Begin --> */}
            {/* <Header/> */}
            <Menu/>
            {/* <!-- Header Section End -->

            <!-- Hero Section Begin --> */}
            {/* <section className="hero">
                <div className="hero__slider owl-carousel">
                    <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8">
                                    <div className="hero__text">
                                        <h6>Summer Collection</h6>
                                        <h2>Fall - Winter Collections 2030</h2>
                                        <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                        commitment to exceptional quality.</p>
                                        <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                        <div className="hero__social">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero__items set-bg" data-setbg="img/hero/hero-2.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8">
                                    <div className="hero__text">
                                        <h6>Summer Collection</h6>
                                        <h2>Fall - Winter Collections 2030</h2>
                                        <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                        commitment to exceptional quality.</p>
                                        <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                        <div className="hero__social">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- Hero Section End -->

            <!-- Banner Section Begin --> */}
            <section className="banner spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-4">
                            <div className="banner__item">
                                <div className="banner__item__pic">
                                    <img src="ASSETS/img/banner/banner-1.jpg" alt=""/>
                                </div>
                                <div className="banner__item__text">
                                    <h2>Clothing Collections 2030</h2>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner__item banner__item--middle">
                                <div className="banner__item__pic">
                                    <img src="ASSETS/img/banner/banner-2.jpg" alt=""/>
                                </div>
                                <div className="banner__item__text">
                                    <h2>Accessories</h2>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="banner__item banner__item--last">
                                <div className="banner__item__pic">
                                    <img src="ASSETS/img/banner/banner-3.jpg" alt=""/>
                                </div>
                                <div className="banner__item__text">
                                    <h2>Shoes Spring 2030</h2>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Banner Section End -->

            <!-- Product Section Begin --> */}
            <Homeproduct/>
            {/* <!-- Product Section End -->

            <!-- Categories Section Begin --> */}
            <section className="categories spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="categories__text">
                                <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="categories__hot__deal">
                                <img src="ASSETS/img/product-sale.png" alt=""/>
                                <div className="hot__deal__sticker">
                                    <span>Sale Of</span>
                                    <h5>$29.99</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <div className="categories__deal__countdown">
                                <span>Deal Of The Week</span>
                                <h2>Multi-pocket Chest Bag Black</h2>
                                <div className="categories__deal__countdown__timer" id="countdown">
                                    <div className="cd-item">
                                        <span>3</span>
                                        <p>Days</p>
                                    </div>
                                    <div className="cd-item">
                                        <span>1</span>
                                        <p>Hours</p>
                                    </div>
                                    <div className="cd-item">
                                        <span>50</span>
                                        <p>Minutes</p>
                                    </div>
                                    <div className="cd-item">
                                        <span>18</span>
                                        <p>Seconds</p>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Categories Section End -->

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
    );
}
export default Index;