import React from 'react'
import PrevNextButton from '../../pages/Blogs/PrevNextButton'
import BlogLeft4 from './BlogLeft4'
import BlogRight from './BlogRight'

const BlogPost4 = () => {
    return (
        <section className="blog-style4 bg-[#fff9f1]">
            <div className="container lg:flex">
                <div className="blog3-left-style lg:w-[66%] my-8">
                    <BlogLeft4 />
                    <PrevNextButton />
                </div>
                <div className="blog-style2-right lg:w-[34%]">
                    <BlogRight />
                </div>
            </div>
        </section>
    )
}

export default BlogPost4
