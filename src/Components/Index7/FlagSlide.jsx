import React, { Component } from "react";
import Slider from "react-slick";
import { flagCategories } from "../../alldata/index-7";

const HomeSlide = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 13,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="lg:w-[90%] md:w-[88%] max-md:w-[85%] m-auto my-10 bg-white p-2">
            <Slider {...settings}>
                {flagCategories.map((item, index) => {
                    return <div key={index}>
                        <img className="m-auto" src={item} alt="" />
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default HomeSlide
