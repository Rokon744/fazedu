import React from 'react'
import { FaWindows } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { proffesorCategories } from '../../alldata/index-4';
import prof1 from '../../alldata/photos/Index-4/Proffesor/01.jpg'

const Proffesor = () => {
    return (
        <section className="proffesor-section my-10 md:my-20">
            <div className="container">
                <div className="proffesor-section-center">
                    <div className="proffesor-header">
                        <h6>CHOOSE ANY ONE COURSE</h6>
                        <h2>Learn Everything with Professor</h2>
                    </div>
                    <div className="proffesor-cart grid md:grid-cols-3 sm:grid-cols-2 my-10">
                        {proffesorCategories.map((item) => {
                            const { id, image, exper } = item
                            return <div key={id} className="cart-box relative m-3">
                                <img className='w-full' src={image} alt="" />
                                <div className="cart-detail flex items-center">
                                    <span className='mr-3 flex justify-center items-center'><FaWindows /></span>
                                    <h5>{exper}</h5>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="cart-btn w-full text-center">
                        <button><Link to={`/cource`}>Get Started Now</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proffesor
