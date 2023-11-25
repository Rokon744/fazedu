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

const Navbar4 = ({ style5 }) => {
    const [navTop, setNavtop] = useState(false)
    const [openResponsive, setOpenResponsive] = useState(false)
    const [navTopArea, setNavTopArea] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setNavtop(true)
        } else {
            setNavtop(false)
        }
    })
    return (
        <>
            <div className={`fixed w-[100%] ${style5 ? 'bg-white' : ''} z-50 ${navTop ? 'navigation-bar top-0' : ''}`}>
                {navTopArea && <section className={`header-section ${style5 ? 'bg-[#f16126]' : ''}`}>
                    <div className="header-center container">
                        <div className="navtop-style4 p-5 flex justify-between items-center">
                            <button className={`${style5 ? '!text-white font-bold' : 'signup'}`}><Link to={`/signup`}>Create Account</Link></button>
                            <button className='login'><Link to={`/login`}>Log In</Link></button>
                        </div>
                    </div>
                </section>}
                <nav className='flex justify-between items-center py-[19px] container'>
                    <div className="nav-logo">
                        <img className='w-[41px] h-[41px]' src={logo} alt="" />
                    </div>
                    <div className="log-sign flex items-center">
                        <div className="after-lg max-lg:hidden mr-10">
                            <ul className='flex'>
                                {
                                    navItem.map((item, index) => {
                                        const { name, id } = item
                                        return <li key={id} className='ml-[30px] dropdown-menu relative'>
                                            <div className="dropdown">
                                                <Link to='/about'>{name} <span className={`text-[25px] ml-1 ${style5 ? '' : 'minus-btn'}`}>{style5 ? '' : '-'}</span></Link>
                                            </div>
                                            <div className="dropdown-content pt-10 ml-[-10px]">
                                                <ul className=' w-[220px] bg-white' >
                                                    {navSubCatItem.map((catItem) => {
                                                        if (item.id === catItem.catId) {
                                                            return <li key={catItem.id} className='hover:!bg-[#ffdf40]'><Link to={`${catItem.slug}`} className='hover:!text-white'>{catItem.catName}</Link></li>
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
                        <div className="log-sign-center max-xl:hidden">
                            <div className="navtop-style4 flex justify-between items-center">
                                <button className={`${style5 ? '!text-white signup' : 'signup mr-3'}`}><Link to={`/signup`}>Create Account</Link></button>
                                {style5 ? '' : <button className='login'><Link to={`/login`}>Log In</Link></button>}
                            </div>
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
                {style5 ? <ResposiveNav responce={openResponsive} /> : <ResposiveNav style4={true} responce={openResponsive} />}
            </div>
        </>
    )
}

export default Navbar4
