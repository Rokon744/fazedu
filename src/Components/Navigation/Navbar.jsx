import React, { useState } from 'react'
import { BsTelephoneFill, BsFillInfoSquareFill } from 'react-icons/bs';
import { FaUser, FaUsers } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { navIcon, navItem, navSubCatItem } from '../../alldata/navbarData';
import logo from '../../alldata/photos/FazLogo.png'
import ResposiveNav from '../ResposiveNav';

const Navbar = ({ style7 }) => {
    const [navTop, setNavtop] = useState(false)
    const [openResponsive, setOpenResponsive] = useState(false)
    const [navTopArea, setNavTopArea] = useState(true)
    const [btn, setBtn] = useState(NaN)

    const toggleBtn = (index) => {
        if (btn == index) {
            return setBtn(null)
        }
        setBtn(index)
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setNavtop(true)
        } else {
            setNavtop(false)
        }
    })
    return (
        <>
            {navTopArea && <section className={`header-section bg-[#F7F6F2] max-lg:bg-[#f16126f2] max-lg:text-[#fff] ${style7 ? 'bg-white' : 'bg-[#F7F6F2]'}`}>
                <div className="header-center md:w-[80%] sm:w-[90%] max-sm:p-5 m-auto">
                    <div className="top-header lg:flex items-center justify-between">
                        <ul className='flex flex-wrap justify-around items-center nav-detail space-x-3'>
                            <li className='py-4 max-lg:py-3 border-right space-x-3'><BsTelephoneFill /><span>+800-123-4567 6587</span></li>
                            <li className='py-4 max-lg:py-3 space-x-3'><MdLocationOn /><span>Beverley, New York 224 USA</span></li>
                        </ul>
                        <ul className='nav-icon flex justify-around items-center space-x-3'>
                            <li className='hover:!m-0'><p className='max-lg:text-[#fff]'>Find us on :</p></li>
                            {navIcon.map((Icon, index) => {
                                return <li className='border-right' key={index}>
                                    <a className={`max-lg:text-[#fff] ${style7 ? 'text-[#ffdf40]' : ''}`} href="#"><Icon /></a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </section>}
            <div className={`fixed w-[100%] z-50 ${navTop ? 'navigation-bar top-0' : ''} ${style7 ? 'bg-white' : ''}`}>
                <nav className='flex justify-between py-[19px] items-center container'>
                    <div className="nav-logo">
                        <img className='w-[41px] h-[41px]' src={logo} alt="" />
                    </div>
                    <div className="log-sign flex items-center">
                        <div className="after-lg max-lg:hidden mr-10">
                            <ul className='flex'>
                                {
                                    navItem.map((item, index) => {
                                        const { name, id } = item
                                        return <li key={id} className={`ml-[30px] dropdown-menu relative`}>
                                            <div className="dropdown">
                                                <Link to='/about'>{name} <span className='text-[25px] ml-1 minus-btn'>-</span></Link>
                                            </div>
                                            <div className="dropdown-content pt-10">
                                                <ul className='w-[220px] bg-white' >
                                                    {navSubCatItem.map((catItem) => {
                                                        if (item.id === catItem.catId) {
                                                            return <li key={catItem.id}><Link to={`${catItem.slug}`} className={`hover:!text-white transition-all ease-in duration-150${style7 ? 'hover:!bg-[#ffdf40]' : ''}`}>{catItem.catName}</Link></li>
                                                        }
                                                    })}
                                                </ul>
                                            </div>
                                        </li>
                                    })
                                }
                                <li className='ml-4 mt-[8px]'><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="log-sign-center flex mr-5 max-xl:hidden">
                            <button className="login-nav flex items-center space-x-2">
                                <Link className={`flex items-center space-x-2 ${style7 ? 'text-[#ffdf40]' : ''}`} to={`/login`}>
                                    <span><FaUser /></span>
                                    <span>LOG IN</span>
                                </Link>
                            </button>
                            <button className={`sign-nav ${style7 ? '!bg-[#ffdf40] !text-black' : ''}`}>
                                <Link className='flex items-center space-x-2' to={`/signup`}>
                                    <span><FaUsers /></span>
                                    <span>SIGN UP</span>
                                </Link>
                            </button>
                        </div>
                        <div className="hamberger-area lg:hidden flex items-center space-x-5">
                            <button onClick={() => setOpenResponsive(!openResponsive)} className="hmburger-btn text-[25px]">
                                {openResponsive ? <RxCross2 /> : <GiHamburgerMenu />}
                            </button>
                            <button className="info" onClick={() => setNavTopArea(!navTopArea)}>
                                <BsFillInfoSquareFill />
                            </button>
                        </div>
                    </div>
                </nav>
                {!style7 ? <ResposiveNav responce={openResponsive} /> : <ResposiveNav style4={true} responce={openResponsive} />}
            </div>
        </>
    )
}

export default Navbar
