import React from 'react'
import AboutEdukon from '../../Components/Homes/AboutEdukon'
import about1 from '../../alldata/photos/AllPages/About/01.jpg'
import about2 from '../../alldata/photos/AllPages/About/02.jpg'

const AboutPage = () => {
    return (
        <section className="about relative py-20 overflow-hidden">
            <div className="section-edukon-center container lg:flex justify-between items-end">
                <div className="about-right w-full">
                    <div className="img-box relative">
                        <img className='max-md:w-full' src={about1} alt="" />
                        <img className='absolute bottom-[-20%] right-[10%] max-md:hidden' src={about2} alt="" />
                    </div>
                </div>
                <div className="right max-lg:mt-16">
                    <AboutEdukon />
                </div>
            </div>
        </section>
    )
}

export default AboutPage
