import React from 'react'
import { FiExternalLink } from 'react-icons/fi';
import logo from '../../alldata/photos/logo.png'
import error from '../../alldata/photos/AllPages/404.png'

const Error404 = () => {
  return (
    <section className="error-style py-20">
      <div className="container">
        <div className="error-inner md:flex justify-between items-center">
          <div className="error-left md:w-[34%]">
            <div className="logo">
              <a href='/'><img src={logo} alt="" /></a>
            </div>
            <h2 className='lg:text-[100px] font-bold text-black mt-5'>ERROR 404!</h2>
            <p className='sm:text-[1.5rem]'>Oops! The Page You Are Looking For Could Not Be Found</p>
            <a href="/"><button>Go Back To Home <span><FiExternalLink /></span></button></a>
          </div>
          <div className="error-right md:w-[66%]">
            <div className="img-box">
              <img src={error} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error404
