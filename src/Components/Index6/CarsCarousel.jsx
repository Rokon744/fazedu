import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { carsCategories } from '../../alldata/index-6';

const CarsCarousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
        <div className='my-10 max-md:w-[85%] m-auto'>
            <Slider {...settings}>
                {carsCategories.map((item) => {
                    const { id, image } = item
                    return <div key={id}>
                        <div className="cars-cart border text-center">
                            <div className="cart-image overflow-hidden w-full">
                                <img className='w-full' src={image} alt="" />
                            </div>
                            <h4>Private Car</h4>
                            <h2>$329.00</h2>
                            <p>4 Weeks</p>
                            <ul>
                                <li>Driving License</li>
                                <li>15 Classroom Lessons</li>
                                <li>10 In-car Lessons</li>
                                <li>Medical Service</li>
                                <li>FREE Final Exam</li>
                                <li>With MTO Certification</li>
                            </ul>
                            <button><Link to={`/login`}>Read More</Link></button>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default CarsCarousel
