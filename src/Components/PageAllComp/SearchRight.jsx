import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';

const SearchRight = () => {
  return (
    <div className='search-right bg-white lg:pl-5 max-lg:mt-14 max-lg:mb-20'>
        <h4>Need a new search?</h4>
        <p>If you didn't find what you were looking for, try a new search!</p>
      <form action="">
        <div className="input-box relative">
            <input type="text" placeholder='Search...' />
            <span className='absolute right-3 top-3 text-[22px]'><BiSearchAlt /></span>
        </div>
      </form>
    </div>
  )
}

export default SearchRight
