import React, { Fragment } from 'react';
import ProductSection from './ProductSection';
import Menu from '../component/menu';
import Topheader from '../component/topheader';
import Header from '../component/header';

function ShopDetails(){
    return(
        <Fragment>
            <div>
    {/* <!-- Offcanvas Menu Begin --> */}
    <div className="offcanvas-menu-overlay"></div>
    {/* <div className="offcanvas-menu-wrapper">
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
                        <a href="./inex.html"><img src="ASSETS/img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <nav className="header__menu mobile-menu">
                        <ul>
                            <li><a href="./inex.html">Home</a></li>
                            <li className="active"><a href="./shop.html">Shop</a></li>
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
                            <li><a href="./contact.html">Contacts</a></li>
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
    {/* <Topheader/>
    <Header/> */}
    <Menu/>
    {/* <!-- Header Section End -->

    <!-- Shop Details Section Begin --> */}
    <section className="shop-details">
        <div className="product__details__pic">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__breadcrumb">
                            <a href="./index.html">Home</a>
                            <a href="./shop.html">Shop</a>
                            <span>Product Details</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                    <div className="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-1.png">
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                    <div className="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-2.png">
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                    <div className="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-3.png">
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                    <div className="product__thumb__pic set-bg" data-setbg="img/shop-details/thumb-4.png">
                                        <i className="fa fa-play"></i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-9">
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="ASSETS/img/shop-details/product-big-2.png" alt=""/>
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="ASSETS/img/shop-details/product-big-3.png" alt=""/>
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-3" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="ASSETS/img/shop-details/product-big.png" alt=""/>
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-4" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="ASSETS/img/shop-details/product-big-4.png" alt=""/>
                                    <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1" className="video-popup"><i className="fa fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product__details__content">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="product__details__text">
                            <h4>Hooded thermal anorak</h4>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <span> - 5 Reviews</span>
                            </div>
                            <h3>$270.00 <span>70.00</span></h3>
                            <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable
                                cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
                            with placket.</p>
                            <div className="product__details__option">
                                <div className="product__details__option__size">
                                    <span>Size:</span>
                                    <label for="xxl">xxl
                                        <input type="radio" id="xxl"/>
                                    </label>
                                    <label className="active" for="xl">xl
                                        <input type="radio" id="xl"/>
                                    </label>
                                    <label for="l">l
                                        <input type="radio" id="l"/>
                                    </label>
                                    <label for="sm">s
                                        <input type="radio" id="sm"/>
                                    </label>
                                </div>
                                <div className="product__details__option__color">
                                    <span>Color:</span>
                                    <label className="c-1" for="sp-1">
                                        <input type="radio" id="sp-1"/>
                                    </label>
                                    <label className="c-2" for="sp-2">
                                        <input type="radio" id="sp-2"/>
                                    </label>
                                    <label className="c-3" for="sp-3">
                                        <input type="radio" id="sp-3"/>
                                    </label>
                                    <label className="c-4" for="sp-4">
                                        <input type="radio" id="sp-4"/>
                                    </label>
                                    <label className="c-9" for="sp-9">
                                        <input type="radio" id="sp-9"/>
                                    </label>
                                </div>
                            </div>
                            <div className="product__details__cart__option">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" value="1"/>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn">add to cart</a>
                            </div>
                            <div className="product__details__btns__option">
                                <a href="#"><i className="fa fa-heart"></i> add to wishlist</a>
                                <a href="#"><i className="fa fa-exchange"></i> Add To Compare</a>
                            </div>
                            <div className="product__details__last__option">
                                <h5><span>Guaranteed Safe Checkout</span></h5>
                                <img src="ASSETS/img/shop-details/details-payment.png" alt=""/>
                                <ul>
                                    <li><span>SKU:</span> 3812912</li>
                                    <li><span>Categories:</span> Clothes</li>
                                    <li><span>Tag:</span> Clothes, Skin, Body</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-5"
                                    role="tab">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-6" role="tab">Customer
                                    Previews(5)</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Additional
                                    information</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-5" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                            solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                            ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                                        pharetras loremos.</p>
                                        <div className="product__details__tab__content__item">
                                            <h5>Products Infomation</h5>
                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                capabilities as a modern PC. These handy little devices allow
                                                individuals to retrieve and store e-mail messages, create a contact
                                                file, coordinate appointments, surf the internet, exchange text messages
                                                and more. Every product that is labeled as a Pocket PC must be
                                                accompanied with specific software to operate the unit and must feature
                                            a touchscreen and touchpad.</p>
                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                was substantial during it’s early release. For approximately $700.00,
                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                These days, customers are finding that prices have become much more
                                                reasonable now that the newness is wearing off. For approximately
                                            $350.00, a new Pocket PC can now be purchased.</p>
                                        </div>
                                        <div className="product__details__tab__content__item">
                                            <h5>Material used</h5>
                                            <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                                                from synthetic materials, not natural like wool. Polyester suits become
                                                creased easily and are known for not being breathable. Polyester suits
                                                tend to have a shine to them compared to wool and cotton suits, this can
                                                make the suit look cheap. The texture of velvet is luxurious and
                                                breathable. Velvet is a great choice for dinner party jacket and can be
                                            worn all year round.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-6" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        <div className="product__details__tab__content__item">
                                            <h5>Products Infomation</h5>
                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                capabilities as a modern PC. These handy little devices allow
                                                individuals to retrieve and store e-mail messages, create a contact
                                                file, coordinate appointments, surf the internet, exchange text messages
                                                and more. Every product that is labeled as a Pocket PC must be
                                                accompanied with specific software to operate the unit and must feature
                                            a touchscreen and touchpad.</p>
                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                was substantial during it’s early release. For approximately $700.00,
                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                These days, customers are finding that prices have become much more
                                                reasonable now that the newness is wearing off. For approximately
                                            $350.00, a new Pocket PC can now be purchased.</p>
                                        </div>
                                        <div className="product__details__tab__content__item">
                                            <h5>Material used</h5>
                                            <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                                                from synthetic materials, not natural like wool. Polyester suits become
                                                creased easily and are known for not being breathable. Polyester suits
                                                tend to have a shine to them compared to wool and cotton suits, this can
                                                make the suit look cheap. The texture of velvet is luxurious and
                                                breathable. Velvet is a great choice for dinner party jacket and can be
                                            worn all year round.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-7" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                            solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                            ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                                        pharetras loremos.</p>
                                        <div className="product__details__tab__content__item">
                                            <h5>Products Infomation</h5>
                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                capabilities as a modern PC. These handy little devices allow
                                                individuals to retrieve and store e-mail messages, create a contact
                                                file, coordinate appointments, surf the internet, exchange text messages
                                                and more. Every product that is labeled as a Pocket PC must be
                                                accompanied with specific software to operate the unit and must feature
                                            a touchscreen and touchpad.</p>
                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                was substantial during it’s early release. For approximately $700.00,
                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                These days, customers are finding that prices have become much more
                                                reasonable now that the newness is wearing off. For approximately
                                            $350.00, a new Pocket PC can now be purchased.</p>
                                        </div>
                                        <div className="product__details__tab__content__item">
                                            <h5>Material used</h5>
                                            <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                                                from synthetic materials, not natural like wool. Polyester suits become
                                                creased easily and are known for not being breathable. Polyester suits
                                                tend to have a shine to them compared to wool and cotton suits, this can
                                                make the suit look cheap. The texture of velvet is luxurious and
                                                breathable. Velvet is a great choice for dinner party jacket and can be
                                            worn all year round.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Shop Details Section End -->

    <!-- Related Section Begin --> */}
    <ProductSection/>
    {/* <!-- Related Section End -->

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

export default ShopDetails;