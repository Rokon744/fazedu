import React from 'react'
import { insCategories } from '../../alldata/pages'

const Category = () => {
    return (
        <section className="category-section md:py-20 py-10">
            <div className="container">
                <div className="category-header lg:w-[50%] m-auto">
                    <h6>TEACH ON EDULON</h6>
                    <h2>Discover Your Potential. Make A Global Impact.</h2>
                </div>
                <div className="category-inner mt-10">
                    <div className="categories-cart sm:flex flex-wrap justify-around items-center text-center">
                    {insCategories.map((item)=>{
                        const {id, title, detail, image} = item
                        return <div key={id} className="single-cart">
                            <div className="image-box">
                                <img src={image} alt="" />
                            </div>
                            <div className="cart-details">
                                <h4>{title}</h4>
                                <p>{detail}</p>
                            </div>
                        </div>
                    })}
                        
                    </div>
                    <button className='!mt-10'>Browse All Categories</button>
                </div>
            </div>
        </section>
    )
}

export default Category
