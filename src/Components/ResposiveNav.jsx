import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navItem, navSubCatItem } from '../alldata/navbarData'

const ResposiveNav = ({ responce, style4 }) => {
    const [show, setShow] = useState(NaN)
    const toggleBtn = (i) => {
        if (show == i) {
            return setShow(null)
        }
        setShow(i)
    }
    return (
        <div className={`md:w-[80%] sm:w-[90%] max-sm:px-0 m-auto responsive-menu`}>
            <ul className={`${responce ? 'h-[260px] overflow-y-auto' : 'h-0 overflow-hidden'} ${style4 && '!bg-[#ffdf40] !text-[#101115]'}`}>
                {
                    navItem.map((item, index) => {
                        const { name, id } = item
                        return <li key={id}>
                            <div onClick={() => toggleBtn(index)}>
                                <a className={`!flex justify-between items-center w-full ${style4 && ' !text-[#101115] border'}`}><span>{name}</span> <span className='text-[25px] ml-1'>{show === index ? '-' : '+'}</span></a>
                            </div>
                            {
                                show === index ? <div>
                                    <ul className={`${style4 && '!bg-[#ffdf40]'}`}>
                                        {navSubCatItem.map((catItem) => {
                                            if (item.id === catItem.catId) {
                                                return <li key={catItem.id}><Link className={`${style4 && ' !text-[#101115] border'}`} to={`${catItem.slug}`}>{catItem.catName}</Link></li>
                                            }
                                        })}
                                    </ul>
                                </div> : ''
                            }
                        </li>
                    })
                }
                <li><Link to={`/contact`} className={`!flex justify-between items-center w-full ${style4 && ' !text-[#101115] border'}`}><span>Contact</span> <span className='text-[25px] text-[#ffdf40] ml-1'>.</span></Link></li>
            </ul>
        </div>
    )
}

export default ResposiveNav
