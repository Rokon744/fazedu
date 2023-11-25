import React, { useState } from 'react'
import ImgSlide from './ImgSlide'
import pdk from '../../alldata/photos/AllPages/Shop/05.jpg'
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { descriptionList, singleComment } from '../../alldata/pages';
import sin1 from '../../alldata/photos/AllPages/ShopSingle/01.jpg'

const SingleShopLeft = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='singleShop-left lg:w-[66%] lg:mr-8 max-lg:mb-10'>
      <div className="product md:flex items-center w-full">
        <div className="product-image w-full">
          <img className='w-full' src={pdk} alt="" />
        </div>
        <div className="product-details w-full">
          <h4>The Title here</h4>
          <div className="star flex items-center">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <p>(3 review)</p>
          </div>
          <h4>$ 340.00</h4>
          <h6>Product Description</h6>
          <p>Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template.</p>
          <form action="#" method='get'>
            <div className="flex">
              <select name="cars" id="cars">
                <option value="volvo">Select Size</option>
                <option value="saab">SM</option>
                <option value="mercedes">MD</option>
                <option value="audi">LG</option>
                <option value="audi">XL</option>
                <option value="audi">XXL</option>
              </select>
              <select name="cars" id="cars">
                <option value="volvo">Select Color</option>
                <option value="saab">Pink</option>
                <option value="mercedes">Ash</option>
                <option value="audi">Red</option>
                <option value="audi">Blue</option>
              </select>
            </div>
            <div className="second-box mt-7 flex">
              <div className="second-left w-full">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="second-right w-full">
                <input className='py-2 px-2 outline-none' type="text" placeholder='Enter Discount Code' />
              </div>
            </div>
            <div className="submit-btn mt-5">
              <button>Add to Cart</button>
            </div>
          </form>
        </div>
      </div>
      <div className="product-reviews mt-20">
        <div className="head-button">
          <button onClick={() => setShow(!show)} className={`${show ? 'active' : ''}`}>Description</button>
          <button onClick={() => setShow(!show)} className={`${!show ? 'active' : ''}`}>Reviews 4</button>
        </div>
        {show && <div className="description">
          <p className='my-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="describe-middle flex max-md:flex-col-reverse  items-center">
            <ul className='space-y-4'>
              {descriptionList.map((iten) => {
                const { id, title } = iten
                return <li key={id}><span><AiOutlineStar /></span> {title}</li>
              })}
            </ul>
            <div className="img-box-desc m-auto">
              <img className='m-auto' src={pdk} alt="" />
            </div>
          </div>
          <p className='my-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>}
        {!show && <div className="reviews mt-10">
          {singleComment.map((item) => {
            const { id, name, para, image } = item
            return <div key={id} className="comment md:flex my-10">
              <div className="comment-img mr-4 w-[100px]">
                <img className='w-[70px] h-[70px]' src={image} alt="" />
              </div>
              <div className="new-box">
                <div className="comment-details md:flex items-center w-full">
                  <h6 className='w-[200px]'>{name}</h6>
                  <div className="date-star flex justify-between items-center w-full">
                    <p>Posted on Jun 10, 2022 at 6:57 am</p>
                    <div className="star flex items-center">
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                    </div>
                  </div>
                </div>
                <p className='mt-3'>{para}</p>
              </div>
            </div>
          })}
          <h4>Add a Review</h4>
          <form action="#" method='get' className='mt-8'>
            <div className="input-box md:flex justify-between items-center">
              <input type="text" placeholder='Full Name *' className='w-full p-3 outline-none border md:m-2' />
              <input type="text" placeholder='Your Email *' className='w-full p-3 outline-none border md:m-2' />
              <div className="star flex items-center w-full">
                <p>Your Rating :</p>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </div>
            </div>
            <textarea name="" id="" cols="30" rows="6" className='w-full outline-none border mt-4 p-3' placeholder='Type Here Massage'></textarea>
            <button type='submit'>Submit Review</button>
          </form>
        </div>}
      </div>
    </div>
  )
}

export default SingleShopLeft
