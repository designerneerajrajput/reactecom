import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCart } from '../redux/Whislist';

function Wishlist() {
    const dispatch = useDispatch();
    //const wishlist = useSelector((state) => state.wishlist.filter(item => item.checked)); // Filter items marked as "checked"
    const wishlist = useSelector(state => state.whislist);
    console.log(wishlist, 'wishlist0')
    const handleRemove = (id) => {
        dispatch(removeCart(id)); // Remove item from the cart
    };

    if (wishlist.length === 0) {
        return <p>Your wishlist is empty.</p>;
    }

    return (
        <section className="wishlist">
            <div className="container">
                <h2>My Wishlist</h2>
                <div className="wishlist-products">
                    {wishlist.map((product) => (
                        <div key={product.id} className="wishlist-item">
                            <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px' }} />
                            <h3>{product.title}</h3>
                            <p>${product.price.toFixed(2)}</p>
                            <div className="wishlist-actions">
                                <button className="btn btn-danger" onClick={() => handleRemove(product.id)}>
                                    Remove
                                </button>
                                <Link to={`/product/${product.id}`} className="btn btn-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Wishlist;
