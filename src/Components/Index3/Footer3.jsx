import React from 'react'
import { MdLocationPin, MdOutlineMailOutline } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import logo from '../../alldata/photos/FazLogo.png'
import { coursesCategories, footerAllCategories, qLinkCategories } from '../../alldata/index-3';

const Footer3 = ({ style4 }) => {
  return (
    <>
      <section className={`footer-section ${style4 && 'footer-style-4'}`}>
        <div className="container">
          <div className="footer-center grid md:grid-cols-2 lg:grid-cols-4 my-10 md:my-20">
            <div className="footer-first my-7">
              <div className="logo mb-4">
                {style4 ? <h4 className='lg:text-[1.5rem]'>About FazEdu</h4> : <img className='w-[41px] h-[41px]' src={logo} alt="" />}
              </div>
              <p>Eduaid theme number one world class university in the world There are student are studing always in this university for all time.</p>
              <ul className='text-black office-address'>
                <li><span><MdLocationPin /></span> New Elefent Road, Dhaka</li>
                <li><span><BsTelephoneFill /></span> +880 123 456 789</li>
                <li><span><MdOutlineMailOutline /></span> info@Edukon.com</li>
              </ul>
              <ul className='contact-icon'>
                {footerAllCategories.map((item) => {
                  const { id, Icon, bgColor } = item
                  return <li style={{ background: bgColor }} key={id} className='flex justify-center items-center'><a href="#"><Icon /></a></li>
                })}
              </ul>
            </div>
            <div className="footer-courses my-7">
              <h4 className='lg:text-[1.5rem]'>Courses</h4>
              <ul>
                {coursesCategories.map((item, ind) => {
                  return <li key={ind}><a href="#">{item}</a></li>
                })}
              </ul>
            </div>
            <div className="footer-courses my-7">
              <h4 className='lg:text-[1.5rem]'>Quick Links</h4>
              <ul>
                {qLinkCategories.map((item, ind) => {
                  return <li key={ind}><a href="#">{item}</a></li>
                })}
              </ul>
            </div>
            <div className="footer-courses my-7">
              <h4 className='lg:text-[1.5rem]'>Recent Tweets</h4>
              <div className="footer-fourth flex items-start">
                <div className="icon text-[#55acee] mt-2 mr-2 text-[1.5rem]"><FaTwitter /></div>
                <div className="right">
                  <p>Aminur islam</p>
                  <ul>
                    <li><a href="#">@CodexCoder Edukon</a></li>
                    <li><a href="#">#HTML__ Template</a></li>
                  </ul>
                  <p>Grab your item, 50% Big Sale Offer !!</p>
                </div>
              </div>
              <div className="footer-fourth flex items-start mt-4">
                <div className="icon text-[#55acee] mt-2 mr-2 text-[1.5rem]"><FaTwitter /></div>
                <div className="right">
                  <p>Aminur islam</p>
                  <ul>
                    <li><a href="#">@CodexCoder Edukon</a></li>
                    <li><a href="#">#HTML__ Template</a></li>
                  </ul>
                  <p>Grab your item, 50% Big Sale Offer !!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-bottom container md:flex justify-between items-center py-8 bg-white">
        <p>© 2023 <span className='text-black font-medium'>FazEdu</span> Designed by <span className='text-black font-medium'>FazLTD</span></p>
        <ul className='flex items-center space-x-3'>
          <li>Faculty</li>
          <li>Staff</li>
          <li>Students</li>
          <li>Alumni</li>
        </ul>
      </div>
    </>
  )
}

export default Footer3
