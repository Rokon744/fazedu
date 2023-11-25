import React from 'react'
import { BsFillSendFill } from 'react-icons/bs';
import { footerOurSupport, footerSiteMap, footerSocialContact, footerUsefullLinks } from '../../alldata/data';
import foot1 from '../../alldata/photos/AchieveGoal/03.png'
import foot2 from '../../alldata/photos/AchieveGoal/04.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="news-footer-center relative overflow-hidden">
                <div className="fs-shape max-lg:hidden">
                    <img className='absolute top-0 -left-10' src={foot1} alt="" />
                    <img className='absolute bottom-0 -right-10' src={foot2} alt="" />
                </div>
                <div className="container py-20 z-10">
                    <div className="news-footer lg:flex justify-between items-center py-14 max-xl:text-center">
                        <h3 className='w-full'>Want Us To Email You About Special <br className='max-xl:hidden' /> Offers And Updates?</h3>
                        <form action="#" method='get' className='flex items-center justify-between w-full p-1 bg-white'>
                            <div className="inp-area w-full relative">
                                <span className='absolute top-[6px] left-1 text-[#26c976] text-[18px]'><BsFillSendFill /></span>
                                <input className='w-full pl-10 outline-none' type="text" placeholder='Enter your email' />
                            </div>
                            <button type='submit' className='font-bold w-[40%]'>Subscribe Now</button>
                        </form>
                    </div>
                    <footer className='main-footer py-10 grid md:grid-cols-2 xl:grid-cols-4'>
                        <div className="py-10 footer-box">
                            <h4>Site Map</h4>
                            <ul>
                                {footerSiteMap.map((item) => {
                                    const { id, name, slug } = item
                                    return <li key={id}><Link to={slug}>{name}</Link></li>
                                })}

                            </ul>
                        </div>
                        <div className="py-10 footer-box">
                            <h4>Usefull Links</h4>
                            <ul>
                                {footerUsefullLinks.map((item) => {
                                    const { id, name, slug } = item
                                    return <li key={id}><Link to={slug}>{name}</Link></li>
                                })}
                            </ul>
                        </div>
                        <div className="py-10 footer-box">
                            <h4>Social Contact</h4>
                            <ul>
                                {footerSocialContact.map((item) => {
                                    const { id, name, slug } = item
                                    return <li key={id}><Link to={slug}>{name}</Link></li>
                                })}
                            </ul>
                        </div>
                        <div className="py-10 footer-box">
                            <h4>Our Support</h4>
                            <ul>
                                {footerOurSupport.map((item) => {
                                    const { id, name, slug } = item
                                    return <li key={id}><Link to={slug}>{name}</Link></li>
                                })}
                            </ul>
                        </div>
                    </footer>
                </div>
            </section>
            <div className="footer-bottom container text-center">
                <p className='my-5'>© 2023 <span className='text-black font-medium'>FazEdu</span> Designed by <span className='text-black font-medium'>FazLTD</span></p>
            </div>
        </>
    )
}

export default Footer
