import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { constructorSlider } from "../../alldata/index-7";

const InstructorSlide = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
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
        <div className="w-full max-md:w-[88%] m-auto mt-5 mb-10 bg-white p-2 slider-cart">
            <Slider {...settings}>
                {constructorSlider.map((item) => {
                    const { id, name, image } = item
                    return <div key={id} className='slider-box p-3'>
                        <div className="slide-img-box overflow-hidden">
                            <img className="m-auto" src={image} alt="" />
                        </div>
                        <h4 className="text-center mt-5"><Link to={`/team-single`}>{name}</Link></h4>
                        <p className="text-center text-[14px]">Lead Instructor</p>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default InstructorSlide
