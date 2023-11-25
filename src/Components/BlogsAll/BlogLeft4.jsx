import React from 'react'
import { SlCalender } from 'react-icons/sl';
import { FaUser, FaQuoteLeft, FaPlay, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';
import rajib from '../../alldata/photos/CoursesAll/CourseSingle/01.jpg'
import cln1 from '../../alldata/photos/CoursesAll/CourseSingle/04.jpg'
import { AiFillWechat, AiTwotoneStar } from 'react-icons/ai';
import cln2 from '../../alldata/photos/CoursesAll/CourseSingle/05.jpg'
import img1 from '../../alldata/photos/BlogsAll/blog3-1.jpg'
import img2 from '../../alldata/photos/BlogsAll/blog3-2.jpg'
import img3 from '../../alldata/photos/BlogsAll/blog3-3.jpg'
import { Link } from 'react-router-dom';

const BlogLeft4 = () => {
    return (
        <div className='blog-left-style4'>
            <article className='bg-white'>
                <div className="common-cart w-full mt-5">
                    <div className="cart-img">
                        <img className='w-full' src={img1} alt="" />
                    </div>
                    <div className="cart-details p-10">
                        <h2 className='lg:text-[2rem]'>Interactively Morph High Standards Anding</h2>
                        <ul>
                            <li><SlCalender />April 23,2021</li>
                            <li><FaUser />Begrass Tyson</li>
                            <li><AiFillWechat />09 Comments</li>
                        </ul>
                        <p className='my-5'>Serenity hasir taken poseson mying entre soung these sweet morngs sprng whch enoywith whole heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi whch was the blis of soulis mineing amsoing dear frend soingu absoribed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenty has taken possesison of my entre soulng these sweet present moment and yet feel that never was greater artst</p>
                        <div className="quoteBlock ">
                            <span className='mt-4 text-[30px]'><FaQuoteLeft /></span>
                            <p className='pl-20 mt-[-30px]'>Dynamically recaptiualize distributed technologies is wherease turnkey channels and onotonectally provide access to resource leveling expertise vias worldwide deliverables uolisticly extend aserser are diverse vortals</p>
                            <button className='italic ml-auto flex justify-end items-end'>...Melissa Hunter</button>
                        </div>
                        <p className='my-5'>whole heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi whch was the blis of soulis mineing amsoing dear frend soingu absoribed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenty has taken possesison of my entre soulng these sweet present moment and yet feel that never was greater artst</p>
                    </div>
                    <div className="cart-img">
                        <img className='w-full' src={img2} alt="" />
                    </div>
                    <div className="cart-details">
                        <p>Serenity hasir taken poseson mying entre soung these sweet morngs sprng whch enoywith whole heart create am alones and feel the charm of exstenceth spot whch the blissouls like mineing am soo happy my dearsi frend absoribed the exquste sense enjoy my whole hearts alone and fee the charm of exstenceths spotsi whch was the blis of soulis mineing amsoing dear frend soingu absoribed the exqust sense tranqui existence neglect my talentsr should ncapable ofing is drawng singe wonderful serenty has taken possesison of my entre soulng these sweet present moment and yet feel that never was greater artst</p>
                    </div>
                    <div className="cart-img overflow-hidden relative w-full flex justify-center items-center m-auto">
                        <img className='w-full' src={img3} alt="" />
                        <div className="animation-button absolute flex justify-center items-center lg:mt-[30px]">
                            <a className='z-10' href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"><span><FaPlay /></span></a>
                        </div>
                    </div>
                    <div className="bottom-part p-10 md:flex justify-between items-center">
                        <ul className='flex title space-x-3 items-center'>
                            <li className='border'><a href="#">Agency</a></li>
                            <li className='border'><a href="#">Business</a></li>
                            <li className='border'><a href="#">Personal</a></li>
                        </ul>
                        <ul className='icon flex items-center space-x-2 max-md:mt-8'>
                            <li className='bg-[#3b5998]'><FaFacebookF /></li>
                            <li className='bg-[#55acee]'><FaTwitter /></li>
                            <li className='bg-[#007bb5]'><FaLinkedinIn /></li>
                            <li className='bg-[#e4405f]'><FaInstagram /></li>
                            <li className='bg-[#bd081c]'><FaPinterestP /></li>
                        </ul>
                    </div>
                </div>

            </article>
            <div className="course-body-left space-y-5 bg-[#ffff] p-5 mt-10">
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
        </div>
    )
}

export default BlogLeft4
