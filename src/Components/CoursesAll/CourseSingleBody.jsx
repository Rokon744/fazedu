import React from 'react'
import { Collapse } from 'antd';
import { TiTick } from 'react-icons/ti';
import { AiOutlinePlayCircle, AiTwotoneStar, AiOutlineClockCircle } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP, FaVimeoV, FaRss } from 'react-icons/fa';
import rajib from '../../alldata/photos/CoursesAll/CourseSingle/01.jpg'
import cln1 from '../../alldata/photos/CoursesAll/CourseSingle/04.jpg'
import cln2 from '../../alldata/photos/CoursesAll/CourseSingle/05.jpg'
import pay from '../../alldata/photos/CoursesAll/CourseSingle/pay.jpg'
import { accordionCategorisOne, accordionCategorisTwo, courseCategories, crsSingleLearn, limitedSingleCourse } from '../../alldata/course'
const { Panel } = Collapse;

const CourseSingleBody = () => {
    return (
        <section className="course-single-body py-10 mt-10">
            <div className="container">
                <div className="course-body-inner lg:flex">
                    <div className="course-body-left space-y-5 lg:w-[66%] lg:mr-5">
                        <h2 className='!text-start'>Course Overview</h2>
                        <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p>
                        <h4>What You'll Learn in This Course:</h4>
                        <ul className='this-course'>
                            {crsSingleLearn.map((item) => {
                                return <li key={item.id} className='flex items-center'><span><TiTick /></span>{item.para}</li>
                            })}
                        </ul>
                        <p>In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly the key covered the course</p>
                        <p>By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p>
                        <div className="accordion-area">
                            <h4>Course Content</h4>
                            <Collapse bordered={true} className='text-white'>
                                <Panel header="1.Introductions-----Lesson5, 17:18s" className='bg-[#26C976] mb-2'>
                                    <ul>
                                        {accordionCategorisOne.map((item) => {
                                            return <li key={item.id} className='flex justify-between items-center py-[15px]'><span>{item.list}</span> <span><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"><AiOutlinePlayCircle /></a></span></li>
                                        })}

                                    </ul>
                                </Panel>
                                <Panel header="2.How to Create Mixed Media Art in Adobe Photoshop-----Lesson5, 52:15s" className='bg-[#26C976]'>
                                    <ul>
                                        {accordionCategorisTwo.map((item) => {
                                            return <li key={item.id} className='flex justify-between items-center py-[15px]'><span>{item.list}</span> <span><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"><AiOutlinePlayCircle /></a></span></li>
                                        })}

                                    </ul>
                                </Panel>
                            </Collapse>
                        </div>
                        <div className="assistent sm:flex items-center bg-white shadow-sm p-5">
                            <div className="assistant-img sm:mr-5 m-auto">
                                <img className='max-sm:m-auto' src={rajib} alt="" />
                            </div>
                            <div className="assistant-details max-sm:text-center w-full">
                                <h6>Rajib Raj</h6>
                                <p>Assistant Teacher</p>
                                <p className='my-4'>I'm an Afro-Latina digital artist originally from Long Island, NY. I love to paint design and photo manpulate in Adobe Photoshop while helping others learn too. Follow me on Instagram or tweet me</p>
                                <div className="rajib-icon flex items-center max-sm:justify-center">
                                    <a className='bg-[#3b5998]' href="#"><FaFacebookF /></a>
                                    <a className='bg-[#55acee]' href="#"><FaTwitter /></a>
                                    <a className='bg-[#007bb5]' href="#"><FaLinkedinIn /></a>
                                    <a className='bg-[#e4405f]' href="#"><FaInstagram /></a>
                                    <a className='bg-[#bd081c]' href="#"><FaPinterestP /></a>
                                </div>
                            </div>
                        </div>
                        <h6>02 Comment</h6>
                        <div className="clients-comment sm:flex shadow-sm bg-white p-5 !mt-10">
                            <div className="client-image sm:mr-4">
                                <img src={cln1} alt="" />
                            </div>
                            <div className="comments-details">
                                <h6>Linsa Faith</h6>
                                <div className='flex justify-between items-center mb-3'>
                                    <span>Jun 5, 2022 at 12:41 pm</span>
                                    <div className="star flex items-center">
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
                                </div>
                                <p>The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth</p>
                            </div>
                        </div>
                        <div className="clients-comment sm:flex shadow-sm bg-white p-5">
                            <div className="client-image sm:mr-4">
                                <img src={cln2} alt="" />
                            </div>
                            <div className="comments-details">
                                <h6>Mahdi Mahmud</h6>
                                <div className='flex justify-between items-center mb-3'>
                                    <span>Jun 5, 2022 at 12:41 pm</span>
                                    <div className="star flex items-center">
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                        <AiTwotoneStar />
                                    </div>
                                </div>
                                <p>The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth</p>
                            </div>
                        </div>

                        <form action="#" method='get' className='bg-white p-5'>
                            <h6 className='py-5'>Leave a Comment</h6>
                            <hr />
                            <div className="sm:flex sm:!space-x-4 mt-4">
                                <input type="text" placeholder='Your Name *' />
                                <input type="email" placeholder='Your Email *' />
                            </div>
                            <input type="text" placeholder='Write a Subject' />
                            <textarea name="" id="" cols="10" rows="5" placeholder='Your Massage'></textarea>
                            <button type='submit'>SEND COMMENT</button>
                        </form>
                    </div>
                    <div className="course-body-right bg-white lg:w-[34%] max-lg:mt-16">
                        <div className="right-head p-3 flex justify-between items-center">
                            <h2 className='!mb-0'>$89</h2>
                            <p className='flex items-center'><span className='mr-2'><AiOutlineClockCircle /></span> Limited time offer</p>
                        </div>
                        <div className="right-body p-5 ">
                            <ul>
                                { limitedSingleCourse.map((item)=>{
                                    const {id, name, title, Icon} = item
                                    return <li key={id}>
                                    <div className='flex justify-between my-6'>
                                        <p className='flex items-center'><Icon className='mr-2' />{name}</p>
                                        <p>{title}</p>
                                    </div>
                                </li>
                                })}
                                
                            </ul>
                        </div>
                        <h6 className='px-5'>Secure Payment:</h6>
                        <div className="payment-image my-3 px-5">
                            <img src={pay} alt="" />
                        </div>
                        <h6 className='px-5'>Share This Course:</h6>
                        <div className="social-icon flex items-center my-5 px-5">
                            <a className='bg-[#55acee]' href='#'><FaTwitter /></a>
                            <a className='bg-[#3b5998]' href='#'><FaVimeoV /></a>
                            <a className='bg-[#ffdf40]' href='#'><FaRss /></a>
                        </div>
                        <button className='mx-5 mb-9' type='submit'>Enrolled Now</button>
                        <div className="right-head p-3 flex justify-between items-center mt-5 px-5">
                            <h6 className='!text-white'>Course Categories</h6>
                        </div>
                        <div className="right-body p-7 ">
                            <ul>
                                { courseCategories.map((item)=>{
                                    const {id, name, count} = item
                                    return <li key={id}>
                                    <div className='flex justify-between my-7'>
                                        <p><a href="#">{name}</a></p>
                                        <p>{count}</p>
                                    </div>
                                </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseSingleBody
