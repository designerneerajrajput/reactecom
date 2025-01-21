import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart, clearCart, increment, decrement } from '../redux/Slice'; // Adjust path if necessary

function Cart() {
    const cartData = useSelector(state => state.cart);
    const dispatch = useDispatch();


    const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

    // Handle remove item
    const handleRemoveItem = (id) => {
        dispatch(removeCart(id));
    };

    // Handle clear cart
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const HandleDec = (id) => {
        dispatch(decrement(id))
    }
    const HandleInc = (id) => {
        dispatch(increment(id))
    }
    return (
        <>
            <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
                <div className="container">
                    <div className="breadcrumb-content text-center">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className="active">Cart Page</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cart-main-area pt-90 pb-100">
                <div className="container">
                    <h3 className="cart-page-title">Your cart items</h3>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            {cartData.length > 0 ? (
                                <form>
                                    <div className="table-content table-responsive cart-table-content">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Product Name</th>
                                                    <th>Price</th>
                                                    <th>Qty</th>
                                                    <th>Subtotal</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartData.map((item) => (
                                                    <tr key={item.id}>
                                                        <td className="product-thumbnail">
                                                            <a href="#"><img src={item.image} alt={item.title} /></a>
                                                        </td>
                                                        <td className="product-name">
                                                            <a href="#">{item.title}</a>
                                                        </td>
                                                        <td className="product-price-cart">
                                                            <span className="amount">${item.price.toFixed(2)}</span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div class="dec qtybutton" onClick={() => HandleDec(item.id)}>-</div>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                type="text"
                                                                value={item.quantity}
                                                                readOnly
                                                            />
                                                            <div class="inc qtybutton" onClick={() => HandleInc(item.id)}>+</div>
                                                        </td>
                                                        <td className="product-subtotal">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </td>
                                                        <td className="product-remove">
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveItem(item.id)}
                                                            >
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="cart-shiping-update-wrapper">
                                                <div className="cart-shiping-update">
                                                    <a href="/">Continue Shopping</a>
                                                </div>
                                                <div className="cart-clear">
                                                    <button
                                                        type="button"
                                                        onClick={handleClearCart}
                                                    >
                                                        Clear Shopping Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="grand-totall">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                </div>
                                {cartData.length > 0 ? (
                                    <>
                                        <h5>
                                            Total products: <span>${totalPrice.toFixed(2)}</span>
                                        </h5>
                                        <div className="total-shipping">
                                            <h5>Shipping</h5>
                                            <ul>
                                                <li>Delivery charges <span>$20.00</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="grand-totall-title">
                                            Grand Total: <span>${(totalPrice + 20).toFixed(2)}</span>
                                        </h4>
                                        <Link to="/checkout">Proceed to Checkout</Link>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
