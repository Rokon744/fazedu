import React from 'react'
import CourseAll from '../Homes/CourseAll'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Members = () => {
    return (
        <section className="courses-members md:py-20 py-10">
            <div className="container">
                <div className="courses-members-header flex justify-between items-center">
                    <p>Showing 1-6 of 10 results</p>
                    <form action="#" method='get'>
                        <label htmlFor="select">Sort By:</label>
                        <select name="skill" id="skill" className='text-[red]'>
                            <option value="1">All Skills</option>
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">PHP</option>
                            <option value="4">Laravel</option>
                            <option value="5">JAVASCRIPT</option>
                            <option value="5">PYTHON</option>
                            <option value="5">BOOTSTRAP</option>
                            <option value="5">REACT</option>
                        </select>
                    </form>
                </div>
                <div className="courses-members-inner">
                    <CourseAll />
                </div>
                <div className="page-btn flex items-center justify-center mt-16">
                    <button className='flex justify-center items-center'><a href='#'><IoIosArrowBack /></a></button>
                    <button><a href='#'>01</a></button>
                    <button className='!bg-[#f16126] !text-white'><a href='#'>02</a></button>
                    <button><a href='#'>03</a></button>
                    <button className='flex justify-center items-center'><a href="#"><IoIosArrowForward /></a></button>
                </div>
            </div>
        </section>
    )
}

export default Members
