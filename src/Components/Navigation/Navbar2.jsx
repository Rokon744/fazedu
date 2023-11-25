import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { FaUser, FaUsers } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { navItem, navSubCatItem } from '../../alldata/navbarData';
import logo from '../../alldata/photos/FazLogo.png'
import ResposiveNav from '../ResposiveNav';

const Navbar2 = () => {
    const [navTop, setNavtop] = useState(false)
    const [openResponsive, setOpenResponsive] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setNavtop(true)
        } else {
            setNavtop(false)
        }
    })
    return (
        <>
            <div className={`fixed w-[100%] bg-[#F7F6F1] z-50 shadow-md ${navTop ? 'navigation-bar top-0' : ''}`}>
                <nav className='flex justify-between py-[19px] items-center mx-4'>
                    <div className="nav-logo">
                        <img className='w-[41px] h-[41px]' src={logo} alt="" />
                    </div>
                    <form action="#" method='get' className='max-xl:hidden my-auto flex'>
                        <select className='bg-transparent mr-4 outline-none' name="pets" id="pet-select">
                            <option value="">Uncategorized --</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                        <div className="inp-box ml-4 bg-white py-4 px-6 rounded-sm relative">
                            <input className='outline-none w-full' type="text" name="" id="" placeholder='Search Here....' />
                            <span className='absolute top-5 right-2'><BsSearch/></span>
                        </div>
                    </form>
                    <div className="log-sign flex items-center">
                        <div className="after-lg max-lg:hidden mr-10">
                            <ul className='flex'>
                                {
                                    navItem.map((item, index) => {
                                        const { name, id } = item
                                        return <li key={id} className='ml-[30px] dropdown-menu relative'>
                                            <div className="dropdown">
                                                <Link to='/about'>{name} <span className='text-[25px] ml-1 minus-btn'>-</span></Link>
                                            </div>
                                            <div className="dropdown-content pt-10">
                                                <ul className=' w-[220px] bg-white' >
                                                    {navSubCatItem.map((catItem) => {
                                                        if (item.id === catItem.catId) {
                                                            return <li key={catItem.id}><Link to={`${catItem.slug}`} className='hover:!text-white'>{catItem.catName}</Link></li>
                                                        }
                                                    })}
                                                </ul>
                                            </div>
                                        </li>
                                    })
                                }
                                <li className='ml-4 mt-[10px] my-auto'><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="log-sign-center flex mr-5 max-md:hidden">
                            <button className="login-nav flex items-center space-x-2">
                                <Link className='flex items-center space-x-2' to={`/login`}>
                                    <span><FaUser /></span>
                                    <span>LOG IN</span>
                                </Link>
                            </button>
                            <button className="sign-nav">
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
                        </div>
                    </div>
                </nav>
                <ResposiveNav responce={openResponsive} />
            </div>
        </>
    )
}

export default Navbar2
