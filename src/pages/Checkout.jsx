import React from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
    const cartdata = useSelector((state) => state.cart);
    const totalPrice = cartdata.reduce((total, item) => total + item.price * item.quantity, 0);


    return (
        <><div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li className="active">Checkout </li>
                    </ul>
                </div>
            </div>
        </div>
            <div className="checkout-area pt-95 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="billing-info-wrap">
                                <h3>Billing Details</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>First Name</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Last Name</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>Company Name</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-select mb-20">
                                            <label>Country</label>
                                            <select>
                                                <option>Select a country</option>
                                                <option>Azerbaijan</option>
                                                <option>Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>Street Address</label>
                                            <input className="billing-address" placeholder="House number and street name" type="text" />
                                            <input placeholder="Apartment, suite, unit etc." type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>Town / City</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>State / County</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Postcode / ZIP</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Phone</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Email Address</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-account mb-50">
                                    <input className="checkout-toggle2" type="checkbox" />
                                    <span>Create an account?</span>
                                </div>
                                <div className="checkout-account-toggle open-toggle2 mb-30">
                                    <input placeholder="Email address" type="email" />
                                    <input placeholder="Password" type="password" />
                                    <button className="btn-hover checkout-btn" type="submit">register</button>
                                </div>
                                <div className="additional-info-wrap">
                                    <h4>Additional information</h4>
                                    <div className="additional-info">
                                        <label>Order notes</label>
                                        <textarea placeholder="Notes about your order, e.g. special notes for delivery. " name="message"></textarea>
                                    </div>
                                </div>
                                <div className="checkout-account mt-25">
                                    <input className="checkout-toggle" type="checkbox" />
                                    <span>Ship to a different address?</span>
                                </div>
                                <div className="different-address open-toggle mt-30">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>First Name</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Last Name</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Company Name</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-select mb-20">
                                                <label>Country</label>
                                                <select>
                                                    <option>Select a country</option>
                                                    <option>Azerbaijan</option>
                                                    <option>Bahamas</option>
                                                    <option>Bahrain</option>
                                                    <option>Bangladesh</option>
                                                    <option>Barbados</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Street Address</label>
                                                <input className="billing-address" placeholder="House number and street name" type="text" />
                                                <input placeholder="Apartment, suite, unit etc." type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Town / City</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>State / County</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Postcode / ZIP</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Phone</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Email Address</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="your-order-area">
                                <h3>Your order</h3>
                                <div className="your-order-wrap gray-bg-4">
                                    <div className="your-order-product-info">
                                        {/* Order Details */}
                                        <div className="your-order-top">
                                            <ul>
                                                <li>Product</li>
                                                <li>Total</li>
                                            </ul>
                                        </div>
                                        <div className="your-order-middle">
                                            <ul>
                                                {cartdata.map((item, index) => (
                                                    <li key={index}>
                                                        <span className="order-middle-left">
                                                            {item.title} X {item.quantity}
                                                        </span>
                                                        <span className="order-price">
                                                            ${item.price * item.quantity}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="your-order-bottom">
                                            <ul>
                                                <li className="your-order-shipping">Shipping</li>
                                                <li>Free shipping</li>
                                            </ul>
                                        </div>
                                        <div className="your-order-total">
                                            <ul>
                                                <li className="order-total">Total</li>
                                                <li>${totalPrice}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Payment Methods */}
                                    <div className="payment-method">
                                        <div className="payment-accordion element-mrg">
                                            <div className="panel-group" id="accordion">
                                                <div className="panel payment-accordion">
                                                    <div className="panel-heading" id="method-one">
                                                        <h4 className="panel-title">
                                                            <a data-bs-toggle="collapse" href="#method1">
                                                                Direct bank transfer
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div
                                                        id="method1"
                                                        className="panel-collapse collapse show"
                                                        data-bs-parent="#accordion"
                                                    >
                                                        <div className="panel-body">
                                                            <p>
                                                                Please send a check to Store Name, Store Street,
                                                                Store Town, Store State / County, Store Postcode.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel payment-accordion">
                                                    <div className="panel-heading" id="method-two">
                                                        <h4 className="panel-title">
                                                            <a
                                                                className="collapsed"
                                                                data-bs-toggle="collapse"
                                                                href="#method2"
                                                            >
                                                                Check payments
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div
                                                        id="method2"
                                                        className="panel-collapse collapse"
                                                        data-bs-parent="#accordion"
                                                    >
                                                        <div className="panel-body">
                                                            <p>
                                                                Please send a check to Store Name, Store Street,
                                                                Store Town, Store State / County, Store Postcode.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel payment-accordion">
                                                    <div className="panel-heading" id="method-three">
                                                        <h4 className="panel-title">
                                                            <a
                                                                className="collapsed"
                                                                data-bs-toggle="collapse"
                                                                href="#method3"
                                                            >
                                                                Cash on delivery
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div
                                                        id="method3"
                                                        className="panel-collapse collapse"
                                                        data-bs-parent="#accordion"
                                                    >
                                                        <div className="panel-body">
                                                            <p>
                                                                Please send a check to Store Name, Store Street,
                                                                Store Town, Store State / County, Store Postcode.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Place Order Button */}
                                <div className="Place-order mt-25">
                                    <a className="btn-hover btn-hover checkout-btn" href="#">
                                        Place Order
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div> </div> </div>
        </>
    );
}

export default Checkout;
