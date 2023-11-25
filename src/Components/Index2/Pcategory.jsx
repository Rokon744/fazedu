import React from 'react'
import { Link } from 'react-router-dom'
import { popularCategories } from '../../alldata/index-2'
import cat1 from '../../alldata/photos/HomeCategory/07.jpg'
import bg1 from '../../alldata/photos/HomeCategory/bg7.jpg'

const Pcategory = () => {
    return (
        <section className="popular-category py-20">
            <div className="container">
                <div className="popular-category-header">
                    <h6>POPULAR CATEGORY</h6>
                    <h2>Popular Category For Learn</h2>
                </div>
                <div className="category-body grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-auto">
                    {
                        popularCategories.map((category) => {
                            const { id, title, course, image, bg } = category
                            return <div key={id} style={{ backgroundImage: `url(${bg})` }} className="category-cart">
                                <img className='mt-[60px] mb-[20px] m-auto rounded-full' src={image} alt="" />
                                <p className='text-white text-center mb-[10px] font-medium'><Link to={`/cource`}>{title}</Link></p>
                                <p className='text-white text-center font-medium'>{course}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Pcategory
