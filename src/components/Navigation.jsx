import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCart } from '../redux/Slice';
import { CiShoppingCart } from "react-icons/ci";


import logo from '../assets/img/logo.png';
import { useState } from 'react';

function Navigation() {

    const dispatch = useDispatch()
    const [togCls, setTogCls] = useState(false);
    const cartData = useSelector(state => state.cart);

    const HandleViewcard = () => {
        setTogCls(!togCls);
    }
    const handleRemoveItem = (id) => {
        dispatch(removeCart(id));
    };
    const handleCartClick = () => {
        setTogCls(!togCls);
    };

    const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <header className="header-area header-padding-1 sticky-bar header-res-padding clearfix">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                            <div className="logo">
                                <a href="">
                                    <img alt="" src={logo} />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                            <div className="main-menu">
                                <nav>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/tshirt">T-shirt</Link></li>
                                        <li><Link to="/new-arrival-tshirt">New Arrival T-shirt</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                            <div className="header-right-wrap">
                                <Link to="/wishlist"><i class="far fa-heart"></i></Link>
                                <div className="same-style cart-wrap">
                                    <button className="icon-cart" onClick={handleCartClick}>
                                        <CiShoppingCart />
                                        <span className="count-style">{cartData.length}</span> {/* Cart item count */}
                                    </button>
                                    <div className={togCls ? 'shopping-cart-content cart-visible' : 'shopping-cart-content'}>
                                        {cartData.length > 0 ? (<><ul>
                                            {cartData.map(item => (
                                                <li className="single-shopping-cart" key={item.id}>
                                                    <div className="shopping-cart-img">
                                                        <a href="#"><img alt="" src={item.image} /></a>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><a href="#">{item.title}</a></h4>
                                                        <h6>Qty: {item.quantity}</h6>
                                                        <span>${item.price * item.quantity}</span>
                                                    </div>
                                                    <div className="shopping-cart-delete" onClick={() => handleRemoveItem(item.id)}>
                                                        <a href="#"><i className="fa fa-times-circle"></i></a>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>  <div className="shopping-cart-total">
                                                <h4>Shipping : <span>$20.00</span></h4>
                                                <h4>Total : <span className="shop-total">${totalPrice + 20}</span></h4>
                                            </div>
                                            <div className="shopping-cart-btn btn-hover text-center">
                                                <Link className="default-btn" to="/cart" onClick={HandleViewcard}>view cart</Link>
                                                <a className="default-btn" href="checkout.html">checkout</a>
                                            </div> </>) : (
                                            <p>Cart is empty</p>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-area">
                        <div className="mobile-menu">
                            <nav id="mobile-menu-active">
                                <ul className="menu-overflow">
                                    <li><a href=""> Home </a></li>
                                    <li><a href=""> About</a></li>
                                    <li><a href="">T-shirt</a></li>
                                    <li><a href="">New Arrival T-shirt</a></li>
                                    <li><a href="">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navigation;
