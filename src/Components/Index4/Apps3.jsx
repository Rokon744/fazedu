import React from 'react'
import { Link } from 'react-router-dom'
import app1 from '../../alldata/photos/Index-4/01.jpg'
import app2 from '../../alldata/photos/Index-4/02.jpg'

const Apps3 = () => {
  return (
    <section className="app-section md:py-20 py-10">
        <div className="container lg:w-[550px] m-auto text-center">
            <button><Link to={`/signup`}>Sign up for Free</Link></button>
            <h2>Learn Anytime, Anywhere</h2>
            <p className=' lg:w-[550px] m-auto mb-10'>Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn</p>
            <div className="app-section-image flex justify-center items-center space-x-3">
                <img className='max-md:w-[50%] m-auto' src={app1} alt="" />
                <img className='max-md:w-[50%] m-auto' src={app2} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Apps3
