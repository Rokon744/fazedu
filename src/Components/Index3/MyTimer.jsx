import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <ul className='sm:flex md:space-x-4 max-sm:space-y-3 flex-auto items-center'>
        <li className='max-md:m-auto'><h2>-{days}</h2> Day</li>
        <li className='max-md:m-auto'><h2>-{hours}</h2> Hours</li>
        <li className='max-md:m-auto'><h2>-{minutes}</h2> Minutes</li>
        <li className='max-md:m-auto'><h2>-{seconds}</h2> Seconds</li>
    </ul>
  );
}

export default MyTimer