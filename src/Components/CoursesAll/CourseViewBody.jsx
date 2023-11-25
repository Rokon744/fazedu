import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP, FaVimeoV, FaRss } from 'react-icons/fa';
import rajib from '../../alldata/photos/CoursesAll/CourseSingle/01.jpg'
import CourseAccorion from './CourseAccorion';

const CourseViewBody = () => {
    return (
        <section className="course-view-body py-16">
            <div className="container">
                <div className="course-view-inner lg:flex justify-between">
                    <div className="course-view-left lg:w-[66%] w-full">
                        <h4>Themeforest Standard Website Design</h4>
                        <video controls>
                            <source src='http://demos.codexcoder.com/anthem/wp-content/uploads/2017/07/Ghum-by-Habib-Wahid-Ft.-Mithila.mp4' type='video/mp4' />
                        </video>
                        <h4>Introduction</h4>
                        <p>This is an excellent course. The content seems very thorough and comprehensive. I like the way all the concepts and configurations are clearly demonstrated in GNS3. There are also a lot of troubleshooting examples and real world applications. I especially enjoyed the practical simlets.</p>
                        <div className="assistent sm:flex items-center bg-white shadow-sm p-5 my-10">
                            <div className="assistant-img sm:mr-5 m-auto">
                                <img className='max-sm:m-auto' src={rajib} alt="" />
                            </div>
                            <div className="assistant-details max-sm:text-center w-full">
                                <h6>Rajib Raj</h6>
                                <p className='my-4'>This is an excellent course. The content seems very thorough and comprehensive. I like the way all the concepts and configurations are clearly demonstrated in GNS3.</p>
                                <div className="rajib-icon flex items-center max-sm:justify-center">
                                    <a className='bg-[#3b5998]' href="#"><FaFacebookF /></a>
                                    <a className='bg-[#55acee]' href="#"><FaTwitter /></a>
                                    <a className='bg-[#007bb5]' href="#"><FaLinkedinIn /></a>
                                    <a className='bg-[#e4405f]' href="#"><FaInstagram /></a>
                                    <a className='bg-[#bd081c]' href="#"><FaPinterestP /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="course-view-right lg:w-[34%] w-full lg:ml-7 mt-10">
                        <h6>Course Requirements</h6>
                        <div className="course-right-accordion mt-7">
                            <CourseAccorion />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseViewBody