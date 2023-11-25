import React from 'react'
import SearchRight from './SearchRight'

const SearchNone = () => {
    return (
        <section className="search-none py-10 md:py-20">
            <div className="container lg:flex items-center">
                <div className="search-none-left lg:w-[66%] p-10 lg:mr-5">
                    <h2 className='max-sm:text-[1.5rem] text-black'>Couldn't find what you're looking for!</h2>
                    <h2 className='text-[#f16126] lg:font-bold font-medium max-sm:text-[1.5rem]'>Oops!</h2>
                </div>
                <div className="search-none-left lg:w-[34%]">
                    <SearchRight />
                </div>
            </div>
        </section>
    )
}

export default SearchNone
