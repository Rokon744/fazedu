import React from 'react'
import { SlCalender } from 'react-icons/sl';
import { FaUser, FaPlay } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillWechat } from 'react-icons/ai';
import img1 from '../../alldata/photos/BlogsAll/blog3-1.jpg'
import img2 from '../../alldata/photos/BlogsAll/blog3-2.jpg'
import img3 from '../../alldata/photos/BlogsAll/blog3-3.jpg'
import quote from '../../alldata/photos/BlogsAll/quote.png'
import { Link } from 'react-router-dom';

const BlogLeft3 = ({searchPage}) => {
    return (
        <div className='blog-left-style3'>
            <article>
                <div className="common-cart w-full mt-5">
                    {!searchPage && <div className="cart-img overflow-hidden">
                        <img className='w-full' src={img1} alt="" />
                    </div>}
                    <div className="cart-details">
                        <h2 className='lg:text-[2rem]'><Link to={`/blog-single`}>Interactively Morph High Standards Anding</Link></h2>
                        <ul>
                            <li><SlCalender />April 23,2021</li>
                            <li><FaUser />Begrass Tyson</li>
                            <li><AiFillWechat />09 Comments</li>
                        </ul>
                        {!searchPage && <p className='mt-5'>Complete deploy focused supply chains rather than viraling services productiva pandemc experiences via interoperable niche markets ramatica incentivize superior functionalitese Rapidiously evolve impactful core competencies without</p>}
                        <button className='mt-5'><Link to={`/blog-single`} className='flex items-center'>Read More <BiLinkExternal /></Link></button>
                    </div>
                </div>
                <div className="common-cart w-full mt-5">
                    {!searchPage && <div className="cart-img overflow-hidden">
                        <img className='w-full' src={img2} alt="" />
                    </div>}
                    <div className="cart-details">
                        <h2 className='lg:text-[2rem]'><Link to={`/blog-single`}>Financial Reporting Qoncil What Could More.</Link></h2>
                        <ul>
                            <li><SlCalender />April 23,2021</li>
                            <li><FaUser />Begrass Tyson</li>
                            <li><AiFillWechat />09 Comments</li>
                        </ul>
                        {!searchPage && <p className='mt-5'>Complete deploy focused supply chains rather than viraling services productiva pandemc experiences via interoperable niche markets ramatica incentivize superior functionalitese Rapidiously evolve impactful core competencies without</p>}
                        <button className='mt-5'><Link to={`/blog-single`} className='flex items-center'>Read More <BiLinkExternal /></Link></button>
                    </div>
                </div>
                <div className="common-cart w-full mt-5">
                    {!searchPage && <div className="cart-img overflow-hidden relative w-full flex justify-center items-center m-auto">
                        <img className='w-full' src={img3} alt="" />
                        <div className="animation-button absolute flex justify-center items-center lg:mt-[30px]">
                            <a className='z-10' href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"><span><FaPlay /></span></a>
                        </div>
                    </div>}
                    <div className="cart-details">
                        <h2 className='lg:text-[2rem]'><Link to={`/blog-single`}>Consulting Reporting Qounc Arei Could More.</Link></h2>
                        <ul>
                            <li><SlCalender />April 23,2021</li>
                            <li><FaUser />Begrass Tyson</li>
                            <li><AiFillWechat />09 Comments</li>
                        </ul>
                        {!searchPage && <p className='mt-5'>Complete deploy focused supply chains rather than viraling services productiva pandemc experiences via interoperable niche markets ramatica incentivize superior functionalitese Rapidiously evolve impactful core competencies without</p>}
                        <button className='mt-5'><Link to={`/blog-single`} className='flex items-center'>Read More <BiLinkExternal /></Link></button>
                    </div>
                </div>
                <div className="common-cart last-box w-full mt-5">
                    {!searchPage && <div className="cart-img overflow-hidden">
                        <img className='max-sm:!mt-[120px]' src={quote} alt="" />
                        <h4 className='max-sm:hidden'>Quickly morph empowered ideas through viral systems niquely opensource metricss whereas premium human capital creater bjectively underwhelm world-class total.</h4>
                    </div>}
                    <div className="cart-details">
                        <h2 className='lg:text-[2rem]'><Link to={`/blog-single`}>Strategic Social Media and of visual design</Link></h2>
                        <ul>
                            <li><SlCalender />April 23,2021</li>
                            <li><FaUser />Begrass Tyson</li>
                            <li><AiFillWechat />09 Comments</li>
                        </ul>
                        {!searchPage && <p className='mt-5'>Complete deploy focused supply chains rather than viraling services productiva pandemc experiences via interoperable niche markets ramatica incentivize superior functionalitese Rapidiously evolve impactful core competencies without</p>}
                        <button className='mt-5'><Link to={`/blog-single`} className='flex items-center'>Read More <BiLinkExternal /></Link></button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default BlogLeft3
