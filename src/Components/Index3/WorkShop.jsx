import React from 'react'
import MyTimer from './MyTimer';

const WorkShop = () => {
    const time = new Date();
    time.setSeconds(time.getDay() + 60000000);
    return (
        <section className="workshop-section py-10 md:pt-20">
            <div className="container">
                <div className="workshop-center">
                    <div className="workshop-header">
                        <h6>SAVE THE DAY</h6>
                        <h3>Join on Day Long Free Workshop for</h3>
                        <h2>Advance <span>PHP</span> Language</h2>
                        <div className='workshop-timer md:my-14 my-5'>
                            <MyTimer expiryTimestamp={time} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkShop
