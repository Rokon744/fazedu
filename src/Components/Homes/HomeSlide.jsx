import React, { Component } from "react";
import Slider from "react-slick";
import {homeSlide} from '../../alldata/data'

const HomeSlide = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
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
        <div className="lg:w-[90%] md:w-[88%] max-md:w-[83%] m-auto my-10">
            <Slider {...settings}>
                {homeSlide.map((item, index)=>{
                    return <div key={index}>
                        <img className="m-auto" src={item} alt="" />
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default HomeSlide
