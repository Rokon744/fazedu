import React from 'react'
import { HiMail } from 'react-icons/hi';
import { FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import InstructorSlide from './InstructorSlide';
import { mainInstructor } from '../../alldata/index-7';

const Instructor7 = () => {
    return (
        <section className="instructor-style7 md:py-28 py-16">
            <div className="container">
                <div className="instructor-header">
                    <h6>WHY CHOOSE US</h6>
                    <h2>Get Everything for Learning</h2>
                </div>
                <div className="instructor-inner mt-10">
                    <div className="instructor-cart grid lg:grid-cols-2">
                        {mainInstructor.map((item)=>{
                            const {id, image, name} = item
                            return <div key={id} className="cart-single sm:flex items-center p-7 m-3">
                            <div className="cart-image max-sm:w-full max-sm:mb-6">
                                <img className='max-sm:w-full' src={image} alt="" />
                            </div>
                            <div className="cart-details sm:ml-6">
                                <h4>{name}</h4>
                                <p>Lead Instructor</p>
                                <div className="flex items-center icon mt-4"><span className='mr-2'><HiMail/></span> info@prof.mail.com</div>
                                <div className="flex items-center icon mb-4"><span className='mr-2'><FaYoutube/></span> www.youtube.com/prof.ls</div>
                                <div className="contact-icon flex items-center space-x-2">
                                    <span className='bg-[#3b5998]'><FaFacebookF /></span>
                                    <span className='bg-[#55acee]'><FaTwitter /></span>
                                    <span className='bg-[#007bb5]'><FaLinkedinIn /></span>
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                    <InstructorSlide />
                </div>
            </div>
        </section>
    )
}

export default Instructor7
