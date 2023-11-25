import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';

const NewsLetters = () => {
  return (
    <section className="newsletters-section py-10 md:py-20">
        <div className="container">
            <div className="newsletters-center lg:flex justify-center items-center lg:space-x-7">
                <div className="newsletter-left lg:text-end">
                  <h2>Subscribe to Newsletter</h2>
                  <p>Subscribe free and get the notification and latest offers of our courses.</p>
                </div>
                <div className="newssletter-middle flex justify-center items-center max-lg:hidden">
                  <span className='text-[24px] text-white'><AiOutlineMail/></span>
                </div>
                <div className="newsletter-right max-lg:my-14">
                  <form action="#" method='get' className='flex flex-col space-y-3'>
                    <h4>Enter Your Name & Email Press to Submit Button</h4>
                    <input className='p-3 outline-none border' type="text" name="" id="" placeholder='Enter your name' />
                    <input className='p-3 outline-none border' type="email" name="" id="" placeholder='Enter your email' />
                    <button>Get Start Now</button>
                  </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsLetters
