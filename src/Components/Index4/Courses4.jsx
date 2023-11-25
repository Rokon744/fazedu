import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { couesesAllCategories, courseFilter } from '../../alldata/index-4'

const Courses4 = () => {
  const [item, setItem] = useState(couesesAllCategories)

  const courseFilt = (name) => {
    if (name === 'all') {
      setItem(couesesAllCategories)
    } else {
      const newCatItem = couesesAllCategories.filter((item) => {
        return item.exper === name
      })
      setItem(newCatItem)
    }

  }
  return (
    <section className="course-style-4 md:py-[70px] py-[50px]">
      <div className="container">
        <div className="courses4-header max-md:px-16 flex flex-wrap justify-between items-center m-auto">
          <h2 className='max-md:m-auto'>Our Courses</h2>
          <ul className='capitalize flex flex-wrap justify-between items-center space-x-5'>
            {courseFilter.map((item) => {
              const { id, name } = item
              return <li key={id} onClick={() => { courseFilt(name) }} className='cursor-pointer'>{name}</li>
            })}
          </ul>
        </div>
        <div className="course4-body my-12">
          <div className="course-cart grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {item.map((item) => {
              const { id, banner, exper, title, member, name } = item
              return <div key={id} className="single-cart m-3">
                <div className="cart-img relative w-full">
                  <img className='w-full' src={banner} alt="" />
                  <div className="course-category flex justify-between items-center">
                    <div className="exper capitalize">{exper}</div>
                    <div className="reviews flex items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <div className="cart-details p-4">
                  <h4><Link to={`/cource-single`}>{title}</Link></h4>
                  <hr />
                  <div className="course-member flex justify-between items-center mt-2">
                    <div className="ca-name flex items-center">
                      <img className=' mr-3' src={member} alt="" />
                      {name}
                    </div>
                    <div className="price">$199.00</div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses4
