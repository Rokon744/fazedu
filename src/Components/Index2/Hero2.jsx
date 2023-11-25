import React from 'react'
import { CiSearch } from 'react-icons/ci';
import banner1 from '../../alldata/photos/Index-2/02.png'
import banner2 from '../../alldata/photos/Index-2/03.png'

const Hero2 = () => {
    return (
        <section className="hero-style-2 pt-28">
            <div className="container">
                <div className="style-2-header flex flex-col lg:flex-row max-xl:flex-col-reverse items-center justify-between">
                    <div className="banner-img">
                        <img className='w-full' src={banner1} alt="" />
                    </div>
                    <div className="shape-img hidden xl:block absolute bottom-0 left-0 z-[-2]">
                        <img src={banner2} alt="" />
                    </div>
                    <div className="style-2-details mt-20">
                        <h6 className='!font-bold'>ONLINE EDUCATION</h6>
                        <h2 className='lg:text-[66px]'>Build Skills With <br className='max-lg:hidden' />
                            Experts Any Time <br className='max-lg:hidden' />
                            Anywhere</h2>
                        <p className='py-2'>Free online courses from the world’s Leading experts. join 18+ <br className='max-lg:hidden' /> million Learners today.</p>
                        <form action="#" method='get' className='max-lg:w-full bg-white flex justify-between'>
                            <span className='relative'><input className='outline-none p-3 pl-10 w-full' type="text" placeholder='Keywords of your course' /><CiSearch className='text-[20px] absolute top-4 left-3' /></span>
                            <button className='text-white' type='submit'>Search Cource</button>
                        </form>
                        <div className="banner-category flex flex-wrap space-x-5 my-5">
                            <p>Most Popular:</p>
                            <a href="#">Figma</a>
                            <a href="#">Adobe</a>
                            <a href="#">illustration</a>
                            <a href="#">PhotoShop</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2
