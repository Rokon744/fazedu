import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { eventCategories } from '../../alldata/index-3';
import event1 from '../../alldata/photos/Index-3/01.jpg'

const Event3 = () => {
    return (
        <section className="event-section md:my-20 my-12">
            <div className="container">
                <div className="event-header">
                    <h6>DON’T MISS THE DAY</h6>
                    <h2>Upcomming Events</h2>
                    <p className='text-center'>Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn</p>
                </div>
                <div className="event-body">
                    <div className="event-body-center my-10 lg:flex items-center justify-start">
                        <div className="event-left lg:w-[50%]">
                            <div className="image-left-event w-full overflow-hidden">
                                <img className='w-full' src={event1} alt="" />
                            </div>
                            <div className="event-content sm:flex items-center mt-8">
                                <div className="edi-box p-3 mr-4 text-center w-[140px]">
                                    <h3>13</h3>
                                    <p>Nav 2021</p>
                                </div>
                                <div className="event-content-inner  w-full">
                                    <h2>The Way of Higher Education & Its Difficulties</h2>
                                    <div className="event-foot flex items-center space-x-4">
                                        <p className='flex items-center space-x-2'><AiOutlineClockCircle /> <span> 08:30 am</span></p>
                                        <p className='flex items-center space-x-2'><MdLocationPin /> <span> National Auditorium, Dhaka</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="event-right lg:ml-5">
                            {eventCategories.map((item) => {
                                const { id, count } = item
                                return <div key={id} className="event-content sm:flex items-start mt-5">
                                    <div className="edi-box w-[100px] p-3 mr-4 text-center">
                                        <h3>{count}</h3>
                                        <p>Nav 2021</p>
                                    </div>
                                    <div className="event-content-inner">
                                        <h2 className='!font-bold'>Convocation and Celebration 2021</h2>
                                        <div className="event-foot flex items-center space-x-4">
                                            <p className='flex items-center space-x-2'><AiOutlineClockCircle /> <span> 08:30 am</span></p>
                                            <p className='flex items-center space-x-2'><MdLocationPin /> <span> National Auditorium, Dhaka</span></p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Event3
