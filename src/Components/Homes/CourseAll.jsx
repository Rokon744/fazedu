import React from 'react'
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { BiMovie } from 'react-icons/bi';
import { GiNetworkBars } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { courseAll } from '../../alldata/data'

const CourseAll = () => {
    return (
        <div className='section-course'>
            <div className="course-center grid xl:grid-cols-3 md:grid-cols-2">
                {
                    courseAll.map((item) => {
                        const { id, banner, bgColor, title, member, name } = item
                        return <div key={id} className="course-box bg-white p-5 m-3">
                            <div className="course-banner overflow-hidden w-full">
                                <img className='w-full' src={banner} alt="" />
                            </div>
                            <div className="course-details pt-7 relative">
                                <div className="course-price">$30</div>
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
    )
}

export default CourseAll
