import React, { useEffect, useState } from 'react'
import { blogPosts } from '../../alldata/data'
import BlogCart from './BlogCart'

const BlogPost = ({blog}) => {
    const [blogCart, setBlogCart] = useState(blogPosts.slice(0,3))

    useEffect(()=>{
        if(blog){
            setBlogCart(blogPosts)
        }else{
            setBlogCart(blogPosts.slice(0,3))
        }
    },[])
    return (
        <section className="blog-section md:pt-20 pt-8">
            <div className="blog-post-center container ">
                <div className={`blog-header ${blog==='blogStyle'?'hidden':''}`}>
                    <h6>FORM OUR BLOG POSTS</h6>
                    <h2>More Articles From Resource Library</h2>
                </div>
                <div className="blog-cart grid md:grid-cols-2 xl:grid-cols-3 my-8">
                    {blogCart.map((blog)=>{
                       return <BlogCart key={blog.id} {...blog}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default BlogPost
