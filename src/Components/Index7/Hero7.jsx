import React from 'react'
import { Link } from 'react-router-dom'
import FlagSlide from './FlagSlide'

const Hero7 = () => {
  return (
    <section className="hero-style7 pt-[200px]">
        <div className="container !pb-0">
            <div className="hero-style7-top lg:w-[50%] ml-auto pb-[200px]">
                <h2 className='lg:text-[66px]'>Language is The <br className='max-lg:hidden' /> Dress of Thought</h2>
                <p>Learn Unlimited Language & Explore Yourself</p>
                <button><Link to={`/signup`}>Get Started Now</Link></button>
            </div>
            <div className="hero-style7-bottom">
                <FlagSlide />
            </div>
        </div>
    </section>
  )
}

export default Hero7
