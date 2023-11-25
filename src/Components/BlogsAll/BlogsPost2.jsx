import React, { useState } from 'react'
import { blogPosts } from '../../alldata/data'
import BlogCart from '../Homes/BlogCart'
import PrevNextButton from '../../pages/Blogs/PrevNextButton'
import BlogRight from './BlogRight'

const BlogsPost2 = () => {
    const [blogCart, setBlogCart] = useState(blogPosts.slice(0,8))
    return (
        <section className="blogPost-style2 blog-section">
            <div className="container blog-post-center lg:flex">
                <div className="blog-cart grid md:grid-cols-2 lg:w-[66%] my-8">
                    {blogCart.map((blog) => {
                        return <BlogCart key={blog.id} {...blog} />
                    })}
                    <PrevNextButton />
                </div>
                <div className="blog-style2-right lg:w-[34%]">
                    <BlogRight />
                </div>
            </div>
        </section>
    )
}

export default BlogsPost2
