import React from 'react'
import { DiGhostSmall } from 'react-icons/di';
import { AiTwotoneStar, AiFillHeart } from 'react-icons/ai';
import { BsFillEyeFill, BsCart4 } from 'react-icons/bs';
import { FcList } from 'react-icons/fc';
import { productAllCategories } from '../../alldata/pages';
import PrevNextButton from '../../pages/Blogs/PrevNextButton';
import { Link } from 'react-router-dom';

const ShopingLeft = () => {
  return (
    <div className='shoping-style-left lg:w-[66%] lg:mr-8'>
      <div className="shoping-style-left-inner w-full">
        <div className="shoping-style-head flex justify-between items-center">
          <p>Showing 01 - 12 of 139 Results</p>
          <div className="grid-icon flex items-center">
            <DiGhostSmall />
            <FcList />
          </div>
        </div>
        <div className="shoping-product grid lg:grid-cols-3 md:grid-cols-2 md:mt-16 mt-8">
          {productAllCategories.map((item) => {
            const { id, image } = item
            return <div key={id} className="single-product my-5 mx-2">
              <div className="img-box m-auto w-full overflow-hidden">
                <img className='m-auto w-full' src={image} alt="" />
                <div className="img-icon">
                  <span><a href="#"><BsFillEyeFill /></a></span>
                  <span><a href="#"><AiFillHeart /></a></span>
                  <span><a href="#"><BsCart4 /></a></span>
                </div>
              </div>
              <div className="cart-deta text-center">
                <h4><Link to={`/shop-single`}>Product Title Here</Link></h4>
                <div className="star flex items-center justify-center">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <h4>$200</h4>
              </div>
            </div>
          })}
        </div>
          <PrevNextButton />
      </div>
    </div>
  )
}

export default ShopingLeft
