import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterestP } from 'react-icons/fa';
import Navbar from '../Components/Navigation/Navbar';
import { Hero } from '../Components/CoursesAll';
import Footer from '../Components/Homes/Footer';

const Forgot = () => {
    return (
        <>
            <Navbar />
            <Hero forgot={'forgot'} />
            <section className="signup-section py-10 md:py-20">
                <div className="container">
                    <div className="signup-form">
                        <form action="#" method='get'>
                            <h2 className='lg:!text-[1.875rem]'>Forgot Password</h2>
                            <input type="text" placeholder='User email' />
                            <button>Submit Now</button>
                        </form>
                        <p className='mt-14'>Don’t Have any Account? <Link to={`/login`} className='text-black'>Login</Link></p>
                        <p className='orBtn my-5'>Or</p>
                        <h4>Forget Password With Social Media</h4>
                        <ul className='flex justify-center items-center'>
                            <li className='bg-[#3b5998]'><FaFacebookF /></li>
                            <li className='bg-[#55acee]'><FaTwitter /></li>
                            <li className='bg-[#007bb5]'><FaLinkedin /></li>
                            <li className='bg-[#e4405f]'><FaInstagram /></li>
                            <li className='bg-[#bd081c]'><FaPinterestP /></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Forgot
