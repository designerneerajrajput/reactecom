import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { addCart, addtoCheck } from '../redux/Slice';
import { addWishlist } from '../redux/Whislist';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectQty, setSelectQty] = useState(1);
    const [isAdded, setIsAdded] = useState(false);


    const [wishlistStatus, setWishlistStatus] = useState(false);


    const dispatch = useDispatch();
    const handleWishlist = () => {
        setWishlistStatus(!wishlistStatus);
        //if (wishlistStatus) {
        const productToWishlist = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
        };
        dispatch(addWishlist(productToWishlist));
        //} else {
        // const productToWishlist = {
        //     id: product.id,
        //     title: product.title,
        //     price: product.price,
        //     image: product.image,
        //     quantity: 1,
        // };
        // dispatch(addWishlist(productToWishlist));
        // }

    };


    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = (e) => {
        e.preventDefault();

        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 1000);

        const productToAdd = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: selectQty,
        };
        dispatch(addCart(productToAdd));
    };

    const updateQty = (type) => {
        if (type === 1 && selectQty > 1) {
            setSelectQty(selectQty - 1);
        } else if (type === 2) {
            setSelectQty(selectQty + 1);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <section className="product-details">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt={product.title} style={{ width: "100%" }} />
                    </div>
                    <div className="col-md-6">
                        <div className="product-details-content">
                            <h2>{product.title}</h2>
                            <div className="product-details-price">
                                <span>$ {product.price.toFixed(2)}</span>
                            </div>
                            <div className="pro-details-rating-wrap">
                                <div className="pro-details-rating">
                                    {[...Array(5)].map((_, index) => {
                                        const starValue = index + 1;
                                        if (starValue <= Math.floor(product.rating.rate)) {
                                            return <i key={index} className="fa fa-star yellow"></i>;
                                        } else if (starValue - product.rating.rate < 1) {
                                            return <i key={index} className="fa fa-star-half-o yellow"></i>;
                                        } else {
                                            return <i key={index} className="fa fa-star-o yellow"></i>;
                                        }
                                    })}
                                </div>
                            </div>
                            <p>{product.description}</p>

                            <div className="pro-details-quality">
                                <td className="product-quantity">
                                    <div
                                        className="dec qtybutton"
                                        onClick={() => updateQty(1)}
                                        disabled={selectQty <= 1}
                                    >
                                        -
                                    </div>
                                    <input
                                        className="cart-plus-minus-box"
                                        type="text"
                                        value={selectQty}
                                        readOnly
                                    />
                                    <div className="inc qtybutton" onClick={() => updateQty(2)}>
                                        +
                                    </div>
                                </td>
                                <div className="pro-details-cart btn-hover">
                                    <Link title="Add To Cart" onClick={handleAddToCart}>
                                        <i className="pe-7s-cart"></i>
                                        {isAdded ? "Added!" : "Add to cart"}
                                    </Link>
                                </div>
                                <div className="pro-details-wishlist">


                                    <button onClick={handleWishlist}><i className={!wishlistStatus ? 'fa fa-heart-o' : 'fa fa-heart whi'}></i></button>
                                </div>
                                <div className="pro-details-compare">
                                    <a href="#"><i className="pe-7s-shuffle"></i></a>
                                </div>
                            </div>

                            <div className="pro-details-social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;
