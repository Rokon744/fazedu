import React from 'react'
import { FaPlay } from 'react-icons/fa';

const Video = () => {
  return (
    <section className="video-section xl:p-[250px] lg:py-[110px] py-10">
        <div className="container z-10 relative">
            <div className="video-inner text-center">
                <h4 className='lg:!text-[1.875rem]'>It’s High Time to Start Driving Career</h4>
                <div className="video-animate w-full flex justify-center !mt-10 items-center text-[25px] relative">
                    <a className='video-button' href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"><span><FaPlay /></span></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Video
