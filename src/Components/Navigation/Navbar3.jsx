import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { BsFillInfoSquareFill, BsSearch } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { navItem, navSubCatItem } from '../../alldata/navbarData';
import logo from '../../alldata/photos/FazLogo.png'
import ResposiveNav from '../ResposiveNav';

const Navbar3 = () => {
    const [navTop, setNavtop] = useState(false)
    const [openResponsive, setOpenResponsive] = useState(false)
    const [navTopArea, setNavTopArea] = useState(true)
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setNavtop(true)
        } else {
            setNavtop(false)
        }
    })
    return (
        <>
            <div className={`fixed w-[100%] bg-[#fff] z-50 ${navTop ? 'navigation-bar shadow-lg top-0' : ''}`}>
                {navTopArea && <section className="header-section bg-[#f16126f2] text-[#fff]">
                    <div className="header-center container !py-2">
                        <div className="top-header md:flex items-center justify-between">
                            <ul className='flex flex-wrap items-center nav-detail space-x-3'>
                                <li className='bg-white rounded-md text-[#f16126f2] text-[14px] font-semibold px-3 py-1'><a href="#">For Your Question</a></li>
                                <li className='max-lg:py-3 border-right space-x-3'><span>+800-123-4567 6587</span></li>
                                <li className='max-lg:py-3 space-x-3'>roknujjamanripon@gmail.com</li>
                            </ul>
                            <ul className='flex items-center space-x-3'>
                                <li className='border-r pr-3'><Link to={`/login`}>Login</Link></li>
                                <li><Link to={`/signup`}>Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>}
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
                                        return <li key={id} className='ml-[30px] dropdown-menu relative'>
                                            <div className="dropdown">
                                                <Link to='/about'>{name}</Link>
                                            </div>
                                            <div className="dropdown-content pt-12">
                                                <ul className=' w-[220px] bg-white' >
                                                    {navSubCatItem.map((catItem) => {
                                                        if (item.id === catItem.catId) {
                                                            return <li key={catItem.id}><Link to={`${catItem.slug}`}>{catItem.catName}</Link></li>
                                                        }
                                                    })}
                                                </ul>
                                            </div>
                                        </li>
                                    })
                                }
                                <li className='ml-4'><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="log-sign-center flex mr-5">
                            <button type="primary" onClick={showModal}>
                                <BsSearch />
                            </button>
                            <Modal open={open} onCancel={hideModal} >
                                <form action="#" className='bg-white w-full flex relative'>
                                    <input className='w-full mt-10 p-3 outline-none' type="text" placeholder='Search here....' />
                                    <button type='submit' className='absolute top-14 right-1'><BsSearch /></button>
                                </form>
                            </Modal>
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
                <ResposiveNav responce={openResponsive} />
            </div>
        </>
    )
}

export default Navbar3
