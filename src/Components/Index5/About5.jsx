import React, { useState } from 'react'
import { achievement3 } from '../../alldata/index-3'
import { about5Categories } from '../../alldata/index-5'
import about1 from '../../alldata/photos/Index-5/03.jpg'

const About5 = () => {
    const [achieve, setAchieve] = useState(achievement3.slice(0, 3))
    return (
        <section className="about-style5 my-16">
            <div className="container">
                <div className="about5-center grid lg:grid-cols-2 xl:grid-cols-3">
                    <div className="about5-image w-full">
                        <img className='max-lg:w-full m-auto' src={about1} alt="" />
                    </div>
                    <div className="about5-lincon w-full">
                        <h2><span>About</span> Lincon Senses</h2>
                        <p>Lincon Senses is Senior English Teacher of Professor University. I am Sharing my knowledge with my lovely students</p>
                        <ul className='mt-5 w-full'>
                            {about5Categories.map((item) => {
                                const { id, name, detail } = item
                                return <li key={id}>
                                    <p className='flex justify-between'>{name}<span className='mr-3'>:</span></p>
                                    <span>{detail}</span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="achieve w-full md:ml-5">
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
                </div>
            </div>
        </section>
    )
}

export default About5
