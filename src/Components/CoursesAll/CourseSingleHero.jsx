import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import crs1 from '../../alldata/photos/CoursesAll/CourseSingle/03.jpg'
import right1 from '../../alldata/photos/CoursesAll/CourseSingle/02.jpg'

const CourseSingleHero = () => {
    return (
        <section className="course-single-hero lg:pt-[250px] pt-[160px]">
            <div className="container">
                <div className="course-single-inner lg:flex flex-row-reverse justify-between">
                    <div className="course-single-right w-full">
                        <div className="right-image w-full ml-auto relative flex justify-center items-center">
                            <img className='lg:mb-[-60px]' src={right1} alt="" />
                            <div className="animation-button absolute flex justify-center items-center lg:mt-[30px]">
                                <span><FaPlay /></span>
                            </div>
                        </div>
                    </div>
                    <div className="course-single-left w-full max-lg:mt-10">
                        <div className="course-button">
                            <button><a href="#" className='bg-[#26c976]'>Adobe XD</a></button>
                            <button><a href="#" className='bg-[#f16126]'>30% off</a></button>
                        </div>
                        <h2>Advanced Adobe Photoshop For Everyone</h2>
                        <p>The most impressive is collection of share me online college courses</p>
                        <div className="course-left-footer flex items-center space-x-2">
                            <img src={crs1} alt="" />
                            <h5>Rajib Raj</h5>
                            <div className="star flex items-center">
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                            </div>
                            <h5>03 Reviews</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseSingleHero
