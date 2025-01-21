import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import ProductCard from '../components/ProdutCard';
import axios from 'axios';
import support1 from '../assets/img/support-1.png';
import support2 from '../assets/img/support-2.png';
import support3 from '../assets/img/support-3.png';
import support4 from '../assets/img/support-4.png';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);
    return (
        <>
            <Slider></Slider>
            <div className="suppoer-area pt-100 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-1">
                                <div className="support-icon">
                                    <img className="animated" src={support1} alt="" />
                                </div>
                                <div className="support-content">
                                    <h5>Free Shipping</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-2">
                                <div className="support-icon">
                                    <img className="animated" src={support2} alt="" />
                                </div>
                                <div className="support-content">
                                    <h5>Support 24/7</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-3">
                                <div className="support-icon">
                                    <img className="animated" src={support3} alt="" />
                                </div>
                                <div className="support-content">
                                    <h5>Money Return</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-4">
                                <div className="support-icon">
                                    <img className="animated" src={support4} alt="" />
                                </div>
                                <div className="support-content">
                                    <h5>Order Discount</h5>
                                    <p>Free shipping on all order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-area pb-60">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>DAILY DEALS!</h2>
                    </div>

                    <div className="tab-content jump">
                        <div className="tab-pane" id="product-1">
                            <div className="row">

                                {products.map((product) => (
                                    <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
                                        <ProductCard
                                            key={product.id}
                                            id={product.id}
                                            image={product.image}
                                            title={product.title}
                                            price={product.price}
                                            category={product.category}
                                            rating={product.rating}
                                        />   </div>
                                ))}

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;