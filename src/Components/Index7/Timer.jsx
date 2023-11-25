import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Timer = () => {
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const days = Math.floor(elapsedTime / (24 * 60 * 60));
    const hours = Math.floor((elapsedTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((elapsedTime % (60 * 60)) / 60);
    const seconds = Math.floor(elapsedTime % 60);

    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-4 py-6 text-center'>
                <span className='days'> <h2>-136</h2> <p>days</p> </span>
                <span className='hour'> <h2>-11</h2> <p>hours</p> </span>
                <span className='minute'><h2>-{minutes}</h2> <p>minutes</p> </span>
                <span className='seconds'><h2>-{seconds}</h2> <p>seconds</p></span>
            </div>
            <button className='flex justify-center items-center m-auto'><Link to={`/signup`}>Register Now</Link></button>
        </>
    );
};

export default Timer;