import React from 'react'
import Slider from "react-slick";
import { BsStar, BsWechat, BsStarFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { carouselCategories } from '../../alldata/index-3';
import { Link } from 'react-router-dom';

const CarouselCrs = ({style5}) => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
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
                {carouselCategories.map((item) => {
                    const { id, title, price, image } = item
                    return <div key={id} className={`${style5}`}>
                        <div className={`carousel-cart border m-5 rounded-sm text-center`}>
                            <div className="cart-image relative w-full overflow-hidden">
                                <img className='w-full' src={image} alt="" />
                                <div className="absolute bottom-3 w-full flex justify-center space-x-2">
                                    <span className='text-[black] font-bold rounded-sm bg-white py-1 px-4'>{title}</span>
                                    <span className='bg-[#f16126] font-medium rounded-sm text-white py-1 px-4'>{price}</span>
                                    <span className='flex bg-white rounded-sm py-2 px-4 m-auto text-[#f16126]'>
                                        {style5? <><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></>:<>
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                        </>}
                                    </span>
                                </div>
                            </div>
                            <div className="cart-footer text-center">
                                <h4>Learn Basic Web Design with HTML & CSS</h4>
                                <div className="course-detail flex justify-center items-center space-x-3">
                                    <p className='flex items-center space-x-2'><FaUsers/><span>200</span></p>
                                    <p className='flex items-center space-x-2'><BsWechat/><span>23</span></p>
                                </div>
                            </div>
                            <button className='py-3 px-6 border rounded-md my-4'><Link to={`/cource-single.html`}>Read More</Link></button>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default CarouselCrs
