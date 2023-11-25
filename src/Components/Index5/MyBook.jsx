import React from 'react'
import { BsStarFill } from 'react-icons/bs';
import { myBookCategories } from '../../alldata/index-5';
import book1 from '../../alldata/photos/Index-5/MyBook/01.jpg'

const MyBook = () => {
    return (
        <section className="mybook-section md:py-28 py-14">
            <div className="container">
                <div className="mybook-header">
                    <h6>LEARN EASILY THE BRIGHT THING</h6>
                    <h2>My Book & Publications</h2>
                </div>
                <div className="mybook-body grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {myBookCategories.map((item) => {
                        const { id, image, title } = item
                        return <div key={id} className="mybook-cart m-3">
                            <div className="cart-image overflow-hidden w-full">
                                <img className='w-full' src={image} alt="" />
                            </div>
                            <div className="cart-detail pt-8 px-5 pb-4">
                                <h4>{title}</h4>
                                <p className='pb-3'>Handcover</p>
                                <hr />
                                <div className="cart-inner flex justify-between items-center pt-3">
                                    <span className='flex bg-white star rounded-sm py-2'>
                                        <><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></>
                                    </span>
                                    <div className="price flex items-center">
                                        <delete className='line-through mr-3'>$199.00</delete>
                                        <p className='font-bold text-black'>$150</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </section>
    )
}

export default MyBook
