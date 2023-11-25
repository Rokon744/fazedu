import React from 'react'
import car from '../../alldata/photos/Index-6/01.png'
import { FaChevronCircleRight } from 'react-icons/fa';

const Driving = () => {
  return (
    <section className="driving-section py-10 md:py-20">
      <div className="container">
        <div className="driving-inner lg:flex">
          <div className="driving-left lg:w-[60%]">
            <h6>SMART & RELAXING CAREER</h6>
            <h2>Why You Should Start Driving</h2>
            <p>Proactively enhance prospective resources for next generation convergence. Dramatically myocardinate high-quality vortals through transparent.</p>
            <ul>
              <li><span><FaChevronCircleRight/></span> Smart & Relaxing Career</li>
              <li><span><FaChevronCircleRight/></span> No Required Higher Education</li>
              <li><span><FaChevronCircleRight/></span> WorldWide Working Opportunity</li>
              <li><span><FaChevronCircleRight/></span> Lots of Working Opportunity</li>
            </ul>
          </div>
          <div className="driving-right w-full max-lg:pt-16">
            <div className="driving-image w-full">
              <img className='w-full' src={car} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Driving
