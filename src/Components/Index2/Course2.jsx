import React from 'react'
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { BiMovie } from 'react-icons/bi';
import { GiNetworkBars } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { courseAll } from '../../alldata/data'

const Course2 = () => {
    return (
        <section className="course-style-2 my-20">
            <div className="container">
                <div className="couese-2-header">
                    <h6>FEATURED COURSES</h6>
                    <h2>Pick A Course To Get Started</h2>
                </div>
                <div className="course-center grid xl:grid-cols-2 mt-16">
                    {
                        courseAll.map((item) => {
                            const { id, banner, bgColor, title, member, name } = item
                            return <div key={id} className="course-box bg-white p-5 m-3 md:flex">
                                <div className="course-banner overflow-hidden relative md:h-[100%] md:!w-[80%] max-md:w-full mr-3">
                                    <img className='md:h-full w-full' src={banner} alt="" />
                                    <div className="course-price max-md:hidden left-5 absolute">$30</div>
                                </div>
                                <div className="course-details pt-7 relative">
                                    <div className="course-price md:hidden">$30</div>
                                    <div className="detail-header flex items-center space-x-3">
                                        <button style={{ background: bgColor }}><a href="#">Adobe XD</a></button>
                                        <div className="reviews flex items-center">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <span>03 reviews</span>
                                    </div>
                                    <h4 className='lg:text-[1.5rem]'><Link to={`/cource-single`}>{title}</Link></h4>
                                    <div className="lesson-online flex justify-between pb-4">
                                        <span className='flex items-center space-x-2'><BiMovie className='text-[23px] text-[#f16126]' /><p>18x Lesson</p></span>
                                        <span className='flex items-center space-x-2'><GiNetworkBars className='text-[23px] text-[#f16126]' /><p>Online Class</p></span>
                                    </div>
                                    <hr />
                                    <div className="lesson-online flex justify-between pt-4">
                                        <span className='flex items-center space-x-2'>
                                            <img src={member} alt="" />
                                            <h5 className='ca-name'><Link to={`/cource-single`}>{name}</Link></h5>
                                        </span>
                                        <span className='flex items-center space-x-2'>
                                            <h5 className='ca-name'><Link to={`/cource-single`}>Read More</Link></h5>
                                            <FaExternalLinkAlt className='text-[18px] text-[#f16126]' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Course2
