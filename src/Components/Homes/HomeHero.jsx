import React from 'react'
import banner from '../../alldata/photos/01.png'
import { CiSearch } from 'react-icons/ci';

const HomeHero = () => {
    return (
        <section className="banner-section pt-28">
            <div className="banner-section-center max-sm:pb-0 md:w-[80%] sm:w-[90%] max-sm:p-5 m-auto">
                <div className="banner-hero lg:flex items-center justify-between">
                    <div className="banner-details">
                        <h6 className='lg:tracking-[5px]'>ONLINE EDUCATION</h6>
                        <h2 className='max-sm:!text-[24px] max-md:!text-[40px] my-3'>Learn The <br className='max-lg:hidden' /> Skills You Need <br className='max-lg:hidden' /> To Succeed</h2>
                        <p className='py-2'>Free online courses from the world’s Leading experts. join 18+ <br className='max-lg:hidden' /> million Learners today.</p>
                        <form action="#" method='get' className='max-lg:w-full bg-white flex justify-between'>
                            <span className='relative'><input className='outline-none p-3 pl-10 w-full' type="text" placeholder='Keywords of your course' /><CiSearch className='text-[20px] absolute top-4 left-3' /></span>
                            <button className='text-white' type='submit'>Search Cource</button>
                        </form>
                        <div className="banner-category flex flex-wrap space-x-5">
                            <p>Most Popular:</p>
                            <a href="#">Figma</a>
                            <a href="#">Adobe</a>
                            <a href="#">illustration</a>
                            <a href="#">PhotoShop</a>
                        </div>
                    </div>
                    <div className="banner-image max-lg:mt-8 flex !items-end lg:pt-10">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero
