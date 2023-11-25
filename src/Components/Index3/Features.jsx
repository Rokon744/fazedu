import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { featureCategories } from '../../alldata/index-3';

const Features = () => {
    return (
        <section className="feature-section py-20">
            <div className="container">
                <div className="feature-header">
                    <h6>WHY CHOOSE US</h6>
                    <h2>Get Everything for Learning</h2>
                </div>
                <div className="feature-body grid md:grid-cols-2 lg:grid-cols-3">
                    {
                        featureCategories.map((feature) => {
                            const { id, title, image } = feature
                            return <div key={id} className="cart-feature max-md:text-center m-4">
                                <div className="cart-body md:flex">
                                    <div className="cart-img my-auto md:mr-4">
                                        <img className='max-md:m-auto' src={image} alt="" />
                                    </div>
                                    <Link className="cart-right">
                                        <h4 className='normal-case'>{title}</h4>
                                        <button className='flex items-center max-md:m-auto'>
                                            <p>View More</p>
                                            <span><BsArrowRight /></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Features
