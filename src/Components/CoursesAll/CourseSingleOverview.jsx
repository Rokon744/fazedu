import React, { useState } from 'react'
import rajib from '../../alldata/photos/CoursesAll/CourseSingle/01.jpg'
import cmn1 from '../../alldata/photos/CoursesAll/CourseSingle/04.jpg'
import cmn2 from '../../alldata/photos/CoursesAll/CourseSingle/05.jpg'

const CourseSingleOverview = () => {
    const [open, setOpen] = useState(true)
    return (
        <section className="course-overview lg:py-20 py-10">
            <div className="container">
                <div className="overview-iner">
                    <div className="overviewBtn">
                        <button onClick={() => { setOpen(true) }}>Overview</button>
                        <button onClick={() => { setOpen(false) }}>Announcement</button>
                    </div>
                    <div className="overview-body lg:w-[60%]">
                        {open && <div className="overview">
                            <h6>About this course</h6>
                            <p className='mt-4'>You too can make cartoons!</p>
                            <div className="sm:flex box">
                                <p className='mr-5 sm:w-[200px]'>By the numbers</p>
                                <ul className='sm:w-[400px] space-y-4'>
                                    <li><span>Skill level</span>: <span>Beginner Leve</span></li>
                                    <li><span>Students</span>: <span>17118</span></li>
                                    <li><span>Languages</span>: <span>English</span></li>
                                    <li><span>Captions</span>: <span>Yes</span></li>
                                    <li><span>Lectures</span>: <span>31</span></li>
                                    <li><span>Video</span>: <span>1 total hour</span></li>
                                </ul>
                            </div>
                            <div className="sm:flex box">
                                <p className='mr-5 sm:w-[200px]'>Features</p>
                                <p className='sm:w-[400px]'>Standard Website Design</p>
                            </div>
                            <div className="sm:flex box">
                                <p className='mr-5 sm:w-[200px]'>Description</p>
                                <div className='sm:w-[80%]'>
                                    <p>I want to clarify some details right away: This course was created for the training unit of the General-Animation studio. Every new candidate who wants to become a member of our studio, we send to this course so that he can quickly and efficiently become familiar with our methods of work.</p>
                                </div>
                            </div>
                        </div>}
                        {!open&& <div className="announcement">
                            <div className='flex items-center my-10'>
                                <div className="rajib-image mr-5">
                                    <img className='rounded-full w-[70px]' src={rajib} alt="" />
                                </div>
                                <div className="rajib-detail">
                                    <h4 className='text-[25px] font-bold'>Rajib Raj</h4>
                                    <p>Posted an Announcement<span className='ml-9'>24 Days Ago</span></p>
                                </div>
                            </div>
                            <h4 className='text-[30px] font-bold text-[#737777]'>The best way to study animation is practice!</h4>
                            <p className='my-8'>I want to clarify some details right away: This course was created for the training unit of the General-Animation studio. Every new candidate who wants to become a member of our studio, we send to this course so that he can quickly and efficiently become familiar with our methods of work.</p>
                            <p>Many members of our community live in developing countries and have access only to the simplest computers. Taking into account the needs of such students, during training we use the Adobe After Effects of 7.0 version, which does not require high-performance hardware, but at the same time allows to master the basic principles of working with the program</p>

                            <div className="commnt flex mt-8">
                                <div className="img-cox mr-4">
                                    <img className='rounded-full w-[50px]' src={cmn2} alt="" />
                                </div>
                                <textarea placeholder='Enter Your Comment' className='w-full h-[60px] bg-[#29303b] p-4' name="" id="" cols="30" rows="0"></textarea>
                            </div>
                            <div className="commnt flex mt-8">
                                <div className="img-cox mr-4">
                                    <img className='rounded-full w-[50px]' src={cmn1} alt="" />
                                </div>
                                <div className="details">
                                    <h4 className='font-bold text-[27px] text-[#737777]'>Bin Tania <span className='ml-10 text-[17px]'>24 days ago</span></h4>
                                    <p>Many members of our progressively formulate fully researched niche markets vis-a-vis an expanded array of convergence. Uniquely supply orthogonal niches.</p>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseSingleOverview
