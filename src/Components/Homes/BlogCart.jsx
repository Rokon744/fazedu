import React from 'react'
import { FaUserAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { MdSms } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { Link } from 'react-router-dom'

const BlogCart = ({ id, title, image, name, style7 }) => {
    return (
        <div className={`${style7? style7:''} blog-cart-member bg-white m-2`}>
            <div className="cart-detail p-5">
                <div className='overflow-hidden'>
                    <img className='w-full' src={image} alt="" />
                </div>
                <div className="cart-body p-2">
                    <h4 className='lg:text-[1.5rem]'><Link to={`/blog-single`}>{title}</Link></h4>
                    <div className="user-calender flex space-x-3">
                        <ul className="user">
                            <li className='flex items-center'><span className='mr-2'><FaUserAlt /></span>{name}</li>
                        </ul>
                        <ul>
                            <li className='flex items-center'><span className='mr-2'><SlCalender /></span>April 23,2022</li>
                        </ul>
                    </div>
                    <p className='my-3'>Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe</p>
                    <hr />
                    <div className="flex justify-between items-center mt-4 style-3">
                        <span className='flex items-center space-x-2'>
                            <h5 className='ca-name'><Link to={`/cource-single`}>Read More</Link></h5>
                            <FaExternalLinkAlt className='text-[18px] text-[#f16126]' />
                        </span>
                        <span className='text-[26px] relative'>
                            <MdSms />
                            <span className='absolute -top-[6px] left-2 text-[12px] bg-[#f16126] w-[16px] h-[16px] rounded-full text-white flex items-center justify-center'>3</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCart
