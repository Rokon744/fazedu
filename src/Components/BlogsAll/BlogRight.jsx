import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { blogPostCategories, galleryPosts, mostPopularPost, ourAchieves } from '../../alldata/blogs';
import img1 from '../../alldata/photos/BlogsAll/01.jpg'

const BlogRight = () => {
    return (
        <div className="blog-style-right mt-10 lg:ml-5">
            <form action="#" method='get' className='p-5 bg-white'>
                <div className="input-box relative">
                    <input className='w-full p-3 bg-[#ecf0f3] outline-none' type="text" placeholder='Search...' />
                    <button type='submit' className="absolute top-4 right-2">
                        <BiSearchAlt className='text-[20px]' />
                    </button>
                </div>
            </form>
            <div className="post-category bg-white p-5 mt-5">
                <h6 className='pb-5 border-b'>Post Category</h6>
                <ul className='mt-5'>
                    {blogPostCategories.map((item) => {
                        const { id, title, count } = item
                        return <li key={id}>
                            <a href="#" className='flex justify-between items-center pt-4 pb-3 border-b'>
                                <div className="detail flex items-center">
                                    <MdKeyboardDoubleArrowRight />
                                    <span className='ml-1'>{title}</span>
                                </div>
                                <div className="count">{count}</div>
                            </a>
                        </li>
                    })}

                </ul>
            </div>
            <div className="most-popular-post bg-white p-5 mt-5">
                <h6 className='pb-5 border-b'>Most Popular Post</h6>
                <div className="popular-image">
                    {mostPopularPost.map((item) => {
                        const { id, title, image } = item
                        return <div key={id} className="single-image flex items-center py-4 border-b">
                            <div className="img-box mr-4">
                                <img className='w-[100px] h-[80px]' src={image} alt="" />
                            </div>
                            <div className="img-details w-full">
                                <h5 className='cursor-pointer'>{title}</h5>
                                <p>Jun 05,2022</p>
                            </div>
                        </div>
                    })}

                </div>
            </div>
            <div className="post-category bg-white p-5 mt-5">
                <h6 className='pb-5 border-b'>Our Achieves</h6>
                <ul className='mt-5'>
                    {ourAchieves.map((item) => {
                        const { id, title, count } = item
                        return <li key={id}>
                            <a href="#" className='flex justify-between items-center pt-4 pb-3 border-b'>
                                <div className="detail flex items-center">
                                    <MdKeyboardDoubleArrowRight />
                                    <span className='ml-1'>{title}</span>
                                </div>
                                <div className="count">{count}</div>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
            <div className="gallery-photos bg-white p-5 mt-5">
                <h6 className='pb-5 border-b'>Our Gallery</h6>
                <ul className='grid grid-cols-3 mt-5'>
                    {galleryPosts.map((item) => {
                        const { id, image } = item
                        return <li key={id} className='m-[6px]'>
                            <a href={image} target="_blank">
                                <img src={image} alt="" />
                            </a>
                        </li>
                    })}

                </ul>
            </div>
            <div className="popular-tags bg-white p-5 mt-5">
                <h6 className='pb-5 border-b'>Our Popular Tags</h6>
                <ul className='flex flex-wrap justify-center items-center'>
                    <li><a href="#">envato</a></li>
                    <li><a href="#">themeforest</a></li>
                    <li><a href="#">codecanyon</a></li>
                    <li><a href="#">videohive</a></li>
                    <li><a href="#">audiojungle</a></li>
                    <li><a href="#">3docean</a></li>
                    <li><a href="#">envato</a></li>
                    <li><a href="#">themeforest</a></li>
                    <li><a href="#">codecanyon</a></li>
                </ul>
            </div>
        </div>
    )
}

export default BlogRight
