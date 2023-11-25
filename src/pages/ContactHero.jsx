import React from 'react'
import con1 from '../alldata/photos/Contact/01.png'
import { contactInfo } from '../alldata/pages'

const ContactHero = () => {
    return (
        <section className="contact-hero py-10 md:py-20">
            <div className="container">
                <div className="contact-heade">
                    <h6>GET IN TOUCH WITH US</h6>
                    <h2>We're Always Eager To Hear From You!</h2>
                </div>
                <div className="contact-inner lg:flex flex-row-reverse justify-between items-center mt-10">
                    <div className="contact-left lg:w-[34%]">
                        {contactInfo.map((item) => {
                            const { id, title, para, image } = item
                            return <div key={id} className="single-cart flex items-center p-5 bg-white mb-5">
                                <div className="image-box mr-4">
                                    <img src={image} alt="" />
                                </div>
                                <div className="cart-detail">
                                    <h4>{title}</h4>
                                    <p>{para}</p>
                                </div>
                            </div>
                        })}

                    </div>
                    <div className="contact-right lg:w-[66%] lg:mr-8">
                        <div className="maps relative w-full">
                            <iframe className='w-full h-[450px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2275990948147!2d90.38698831543141!3d23.739261895117753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c740f17d1%3A0xdd3daab8c90eb11f!2sCodexCoder!5e0!3m2!1sen!2sbd!4v1607313671993!5m2!1sen!2sbd" frameborder="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactHero
