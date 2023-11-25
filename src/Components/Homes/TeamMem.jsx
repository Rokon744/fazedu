import React from 'react'
import { FaStar, FaUsers } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';

const TeamMem = ({name, title, image}) => {
    return (
        <div className='team-member m-auto my-5'>
            <div className="member-cart p-7">
                <img src={image} alt="" />
                <div className="cart-details text-center">
                <h4 className='lg:text-[1.5rem] mt-3'>{name}</h4>
                    <p className='mb-3'>{title}</p>
                    <div className="reviews flex items-center justify-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
            <hr />
            <ul className="cart-footer flex justify-between items-center p-3">
                <li className='flex items-center space-x-2'>
                    <BiBook/>
                    <span>08 courses</span>
                </li>
                <li className='flex items-center space-x-2'>
                    <FaUsers/>
                    <span>30 students</span>
                </li>
            </ul>
        </div>
    )
}

export default TeamMem
