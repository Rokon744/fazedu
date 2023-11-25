import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PrevNextButton = () => {
    return (
        <div>
            <div className="page-btn flex items-center justify-center my-10">
                <button className='flex justify-center items-center'><a href='#'><IoIosArrowBack /></a></button>
                <button><a href='#'>01</a></button>
                <button className='!bg-[#f16126] !text-white'><a href='#'>02</a></button>
                <button><a href='#'>03</a></button>
                <button className='flex justify-center items-center'><a href="#"><IoIosArrowForward /></a></button>
            </div>
        </div>
    )
}

export default PrevNextButton
