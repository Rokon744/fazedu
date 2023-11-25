import React from 'react'
import { Link } from 'react-router-dom'
import { homeCategories } from '../../alldata/data'
import CourseAll from './CourseAll'

const HomeCategory = () => {
    return (
        <section className="category-section">
            <div className="home-category my-20 text-center container">
                <h6>POPULAR CATEGORY</h6>
                <h2>Popular Category For Learn</h2>
                <div className="category-grid grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
                    {
                        homeCategories.map((cat) => {
                            const { id, image, name, time, color } = cat
                            return <div key={id} className="category m-auto text-center my-20">
                                <img className='m-auto' src={image} alt="cat1" />
                                <Link to={`/cource`}>
                                    <p>{name}</p>
                                </Link>
                                <span style={{ color: color }}>{time}</span>
                            </div>
                        })
                    }
                </div>
                <button className='text-center m-auto my-7'><Link>Browse All Categories</Link></button>
            </div>
            <div className="category-cource">
                <div className="category-cource-center  md:w-[80%] sm:w-[90%] max-sm:p-5 m-auto">
                    <h6>FEATURED COURSES</h6>
                    <h2>Pick A Course To Get Started</h2>
                    <CourseAll/>
                </div>
            </div>
        </section>
    )
}

export default HomeCategory
