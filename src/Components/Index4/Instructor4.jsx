import React, { useState } from 'react'
import { achievement3 } from '../../alldata/index-3'
import chieve1 from '../../alldata/photos/Index-4/01.png'

const Instructor4 = () => {
    const [achieve, setAchieve] = useState(achievement3.slice(0, 3))
    return (
        <>
            <div className="instructor-head-style">
                <div className="container">
                    <div className="instructor4-header lg:w-[550px] m-auto text-center my-10">
                        <h2>More Then <span>60,000</span> Students</h2>
                        <p>Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn</p>
                    </div>
                </div>
            </div>
            <section className="instructor4-style md:py-[120px] py-[70px]">
                <div className="container relative z-10">
                    <div className="instructor4-body lg:flex justify-between items-center">
                        <div className="achieve w-full">
                            {
                                achieve.map((item) => {
                                    const { id, count, detail, Icon, bgColor } = item
                                    return <div key={id} className="achieve-box flex items-center my-5">
                                        <div style={{ background: bgColor }} className="achieve-icon flex justify-center items-center mr-4">
                                            <Icon />
                                        </div>
                                        <div className="achieve-box-detail">
                                            <h2>{count}</h2>
                                            <p>{detail}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className="achieve-image w-full">
                            <img src={chieve1} alt="" />
                        </div>
                        <div className="achieve-online w-full max-lg:!text-[#fff]">
                            <span>Why Choose Us</span>
                            <h2 className='md:text-[2.5rem]'>Become Online Instructor</h2>
                            <p className='max-lg:!text-[#fff]'>Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn</p>
                            <button className='max-lg:!text-black'>Apply Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Instructor4
