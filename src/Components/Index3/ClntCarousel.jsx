import React from 'react'
import Slider from "react-slick";
import { BsQuote } from 'react-icons/bs';
import { clientsCategories } from '../../alldata/index-3';

const ClntCarousel = ({ style5 }) => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: style5 ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: style5 ? 1 : 2,
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
                {clientsCategories.map((item) => {
                    const { id, image, name } = item
                    return <div key={id}>
                        <div className="mx-3 p-10 carousel-cart text-center">
                            <div className="relative w-full">
                                <img className='m-auto mb-7' src={image} alt="" />
                                {style5 && <span><BsQuote/></span>}
                            </div>
                            <p>Dynamically impact tactical methods of empowerment through ubiquitous methodologies. Global utilize robust services without integrated process improvements. Completely leverage existing niche markets via exceptional leadership skills.</p>
                            <h4 className='mt-10'>{name}</h4>
                            <span>Assistant principal</span>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default ClntCarousel
