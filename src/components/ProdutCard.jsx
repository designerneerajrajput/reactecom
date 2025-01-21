
import React, { useEffect, useState } from 'react';
import { addCart } from '../redux/Slice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductCard({ id, image, title, price, category, rating }) {
    const maxStars = 5;

    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {

        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 1000);
        const product = { id, title, price, image, quantity: 1 };


        dispatch(addCart(product));

    };
    return (
        <div className="product-wrap mb-25">
            <div className="product-img">
                <Link to={`/product/${id}`}>
                    <img className="default-img" src={image} alt={title} />
                    <img className="hover-img" src={image} alt={title} />
                </Link>
                <span className="pink">-10%</span>
                <div className="product-action">
                    <div className="pro-same-action pro-wishlist">
                        <Link title="Wishlist" to="/wishlist">
                            <i className="pe-7s-like"></i>
                        </Link>
                    </div>
                    <div className="pro-same-action pro-cart">
                        <Link title="Add To Cart" onClick={handleAddToCart}>
                            <i className="pe-7s-cart"></i> {isAdded ? "Added" : "Add to cart"}


                        </Link>
                    </div>
                    <div className="pro-same-action pro-quickview">
                        <Link
                            title="Quick View"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            <i className="pe-7s-look"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="product-content text-center">
                <span className='catName'>{category}</span>
                <h3>
                    <Link to={`/product/${id}`}>{title}</Link>
                </h3>
                <div className="product-rating">
                    {[...Array(maxStars)].map((_, index) => {
                        const starValue = index + 1;
                        if (starValue <= Math.floor(rating.rate)) {
                            return <i key={index} className="fa fa-star yellow"></i>; // Full star
                        } else if (starValue - rating.rate < 1) {
                            return <i key={index} className="fa fa-star-half-o yellow"></i>; // Half star
                        } else {
                            return <i key={index} className="fa fa-star-o yellow"></i>; // Empty star
                        }
                    })}
                </div>
                <div className="product-price">
                    <span>${price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard