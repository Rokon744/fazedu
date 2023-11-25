import React from 'react'
import { Link } from 'react-router-dom'
import { skilledCategories } from '../../alldata/index-2'

const Skilled = () => {
    return (
        <section className="skilled-section">
            <div className="container lg:flex items-center justify-between">
                <div className="skill-left">
                    <h2>Build Your Project <br className='max-md:hidden' /> Management Skills Online <br className='max-lg:hidden' /> Anytime</h2>
                    <button className='py-2 px-5 bg-white'><Link to={`/signup`}>Sign Up Now</Link></button>
                </div>
                <div className="skill-right grid md:grid-cols-2 lg:w-[60%]">
                    {
                        skilledCategories.map((category) => {
                            const { id, image, title, detail } = category
                            return <div key={id} className="skilled-cart flex items-center p-4 space-x-2 m-3 ml-0">
                                <img src={image} alt="" />
                                <div className="cart-detail">
                                    <h5>{title}</h5>
                                    <p>{detail}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skilled
