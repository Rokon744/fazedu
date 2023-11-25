import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { featureCategories } from '../../alldata/index-6';
import shape1 from '../../alldata/photos/Index-6/09.png'
import shape2 from '../../alldata/photos/Index-6/10.png'
import img1 from '../../alldata/photos/Index-6/Feature/07.png'

const Feature6 = () => {
    return (
        <section className="feature-style6 relative overflow-hidden py-16 md:py-28">
            <div className="shape-1 absolute top-0 left-0">
                <img src={shape2} alt="" />
            </div>
            <div className="shape-1 absolute top-0 right-0">
                <img src={shape1} alt="" />
            </div>
            <div className="container lg:flex justify-between items-center relative z-10">
                <div className="feature-cart grid sm:grid-cols-2">
                    {featureCategories.map((item) => {
                        const { id, image, title, para } = item
                        return <div key={id} className="single-cart bg-white m-3">
                            <div className="cart-image w-full">
                                <img className='m-auto' src={image} alt="" />
                            </div>
                            <h4>{title}</h4>
                            <p className='text-center'>{para}</p>
                            <button className='flex items-center'>View More <span><BsArrowRight /></span></button>
                        </div>
                    })}
                </div>
                <div className="feature-form lg:w-[40%]">
                    <form action="#" method='get' className='`text-center'>
                        <h2>Fined Your Course</h2>
                        <input type="text" placeholder='Your Name' />
                        <input type="email" placeholder='Your Email' />
                        <input type="text" placeholder='Your Phone' />
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                        </select>
                        <select name="cars" id="cars">
                            <option value="volvo">Motor </option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                        </select>
                        <input type="email" placeholder='Date' />
                        <input type="text" placeholder='Time' />
                        <button className='mr-auto'>Register Now</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Feature6
