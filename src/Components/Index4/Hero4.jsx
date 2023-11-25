import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { TbWorld } from 'react-icons/tb';
import { FaUserFriends, FaBell } from 'react-icons/fa';
import { allCategories } from '../../alldata/index-4'

const Hero4 = () => {
    return (
        <section className="hero-style-4 max-md:!pt-[160px] max-md:!pb-[100px]">
            <div className="container">
                <div className="hero-style4-center">
                    <h2 className='lg:text-[46px]'>Search Your One From <span>150+</span> Online Courses</h2>
                    <form action="#" method='get' className='md:flex justify-between items-center overflow-hidden px-5 my-8'>
                        <select name="cars" id="cars">
                            <option value="volvo">All Catgeries</option>
                            {allCategories.map((item, ind) => {
                                return <option key={ind} value={item}>{item}</option>
                            })}
                        </select>
                        <div className="input-area flex w-full">
                            <input type="text" placeholder='Search your theme' />
                            <button type='submit' className='text-[22px]'><CiSearch /></button>
                        </div>
                    </form>
                    <p className='text-center'>We Have The Largest Collection of Courses</p>
                    <ul className='md:flex justify-center items-center md:mt-[100px] mt-[50px]'>
                        <li><span><FaUserFriends /></span>1.5 Million Students</li>
                        <li><span><FaBell /></span>More then 2000 Courses</li>
                        <li><span><TbWorld /></span>Learn Anything Online</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero4
