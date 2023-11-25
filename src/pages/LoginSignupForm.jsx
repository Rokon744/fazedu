import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterestP } from 'react-icons/fa';

const LoginSignupForm = ({ form }) => {
    return (
        <section className="signup-section py-10 md:py-20">
            <div className="container">
                <div className="signup-form">
                    <form action="#" method='get'>
                        <h2 className='lg:!text-[1.875rem]'>{form === 'form' ? 'Login' : 'Regsiter Now'}</h2>
                        <input type="text" placeholder={`User Name${form ? '*' : ''}`} />
                        {!form && <input type="text" placeholder='Email' />}
                        <input type="text" placeholder={`Password${form ? '*' : ''}`} />
                        {!form && <input type="text" placeholder='Confirm Password' />}
                        {form?
                            <div className="flex justify-between items-center">
                            <div className="remember-box flex items-center">
                                <input className='!w-[20px]' type="checkbox" />
                                <p>Remember Me</p>
                            </div>
                            <p><Link to={`/forgot`} className='underline'>Forgot Password?</Link></p>
                        </div>:''}
                        <button>Get Started Now</button>
                    </form>
                    <p className='mt-14'>{form?'Don’t Have any Account?':'Are you a member?'} <Link to={`${form?'/signup':'/login'}`} className='text-black'>{form?'sign up':'Login'}</Link></p>
                    <p className='orBtn my-5'>Or</p>
                    <h4>{form==='form'? 'Login With Social Media':'Register With Social Media'}</h4>
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
    )
}

export default LoginSignupForm
