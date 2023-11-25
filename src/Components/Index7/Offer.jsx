import React from 'react'
import Timer from './Timer'

const Offer = () => {
  return (
    <section className="offer-section lg:py-[110px] py-[70px]">
        <div className="container lg:flex justify-between items-start">
            <div className="offer-left max-lg:mb-8">
                <h2 className='!text-start'>Learning Spanish <br className='max-lg:hidden' /> Language</h2>
                <p>It’s Perfect Time to Learn Spanish Language</p>
            </div>
            <div className="offer-right bg-white">
                <h2 className='right-header'><span className='text-[#ffdf40]'>35%</span> <span className='font-bold'>Discount</span>. Let’s Start!</h2>
                <Timer />
            </div>
        </div>
    </section>
  )
}

export default Offer
