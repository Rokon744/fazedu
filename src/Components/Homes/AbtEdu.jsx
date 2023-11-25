import React from 'react'
import homeAbt from '../../alldata/photos/HomeCategory/homeAbt.png'
import AboutEdukon from './AboutEdukon'

const AbtEdu = () => {
  return (
    <section className="section-about-edukon relative mt-20 overflow-hidden">
        <div className="section-edukon-center md:w-[80%] sm:w-[90%] max-sm:p-5 m-auto">
            <div className="about-edukon flex flex-col max-xl:flex-col-reverse xl:flex-row justify-between items-end">
                <div className="first-box w-[100%]">
                    <img className='z-1 w-[100%] m-auto' src={homeAbt} alt="" />
                </div>
                <AboutEdukon/>
            </div>
        </div>
    </section>
  )
}

export default AbtEdu
