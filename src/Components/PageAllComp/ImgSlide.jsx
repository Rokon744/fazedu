import React, { Component } from "react";
import Slider from "react-slick";
import { productAllCategories } from '../../alldata/pages';

const ImgSlide = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="w-full">
            <Slider {...settings}>
                {productAllCategories.map((item) => {
                    const { id, image } = item
                    return <div>
                        <div key={id} className="img-box">
                            <img src={image} alt="" />
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default ImgSlide
