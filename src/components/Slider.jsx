import React from 'react';
import Slider from 'react-slick';

// Import Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerimg1 from '../assets/img/slider/single-slide-1.png'
import { FaChevronLeft, FaArrowRight } from 'react-icons/fa'; // Example using react-icons
import bannerimg2 from '../assets/img/slider/single-slide-2.png'
const PrevArrow = ({ className, onClick }) => (
    <div className={`${className} custom-prev-arrow`} onClick={onClick}>
        <FaChevronLeft />
    </div>
);

const NextArrow = ({ className, onClick }) => (
    <div className={`${className} custom-next-arrow`} onClick={onClick}>
        <FaArrowRight />
    </div>
);
const SliderComponent = () => {
    // Define slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="slider-area">
            <Slider {...settings}>
                <div>
                    <div className="single-slider slider-height-1 bg-purple">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                    <div className="slider-content slider-animated-1">
                                        <h3 className="animated">Smart Products</h3>
                                        <h1 className="animated">
                                            Summer Offer <br /> 2020 Collection
                                        </h1>
                                        <div className="slider-btn btn-hover">
                                            <a className="animated" href="shop.html">
                                                SHOP NOW
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                    <div className="slider-single-img slider-animated-1">
                                        <img
                                            className="animated"
                                            src={bannerimg1}
                                            alt="Slide 1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="single-slider slider-height-1 bg-purple">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                    <div className="slider-content slider-animated-1">
                                        <h3 className="animated">Smart Products 2</h3>
                                        <h1 className="animated">
                                            Summer Offer <br /> 2020 Collection
                                        </h1>
                                        <div className="slider-btn btn-hover">
                                            <a className="animated" href="shop.html">
                                                SHOP NOW
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                    <div className="slider-single-img slider-animated-1">
                                        <img
                                            className="animated"
                                            src={bannerimg2}
                                            alt="Slide 2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;
