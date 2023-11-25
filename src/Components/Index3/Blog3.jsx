import React from 'react'
import { blogCategories } from '../../alldata/index-3';
import BlogCart from '../Homes/BlogCart';

const Blog3 = ({style7}) => {
    return (
        <section className="blog-section-3">
            <div className="container">
                <div className="blog-section-center">
                    <div className="blog-header">
                        <h6 className={`${style7? '!text-[#ffdf40]':''}`}>DON’T MISS THE DAY</h6>
                        <h2>Upcomming Events</h2>
                    </div>
                    <div className="blog-inner">
                        <div className="blog-cart grid md:grid-cols-2 xl:grid-cols-3 my-8">
                            {blogCategories.map((item) => {
                                return <BlogCart key={item.id} {...item} style7={style7} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog3
