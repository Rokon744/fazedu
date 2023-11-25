import React from 'react'
import PrevNextButton from '../../pages/Blogs/PrevNextButton'
import BlogLeft3 from './BlogLeft3'
import BlogRight from './BlogRight'
import SearchRight from '../PageAllComp/SearchRight'

const BlogPost3 = ({searchPage}) => {
    return (
        <section className="blog-style3 bg-[#fff9f1]">
            <div className="container lg:flex">
                <div className="blog3-left-style lg:w-[66%] my-8">
                    <BlogLeft3 searchPage={searchPage} />
                    {!searchPage && <PrevNextButton />}
                </div>
                <div className="blog-style2-right lg:w-[34%]">
                    {!searchPage && <BlogRight />}
                    {searchPage && <SearchRight />}
                </div>
            </div>
        </section>
    )
}

export default BlogPost3
