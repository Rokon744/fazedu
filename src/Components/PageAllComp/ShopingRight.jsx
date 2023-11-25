import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { mostPopularPost } from '../../alldata/blogs';
import catItem, { subCatItem } from '../../alldata/pages';

const ShopingRight = () => {
  const [show, setShow] = useState(NaN)

  const openCat = (ind) => {
    if (show == ind) {
      return setShow(null)
    }
    setShow(ind)
  }

  return (
    <div className='shoping-style-right lg:w-[34%]'>
      <form action="#" method='get' className='p-5'>
        <div className="inp-box relative">
          <input className='w-full py-3 px-5' type="text" placeholder='Search...' />
          <button className='absolute top-3 right-2 text-[22px]'><BiSearchAlt /></button>
        </div>
      </form>
      <div className="all-categories p-5">
        <h4>All Categories</h4>
        <div className="categories">
          {catItem.map((item, ind) => {
            return <div onClick={() => openCat(ind)} key={item.id} className="main-cat py-[10px]">
              <div className="cat-head">
                <span>{item.cat}</span>
                <span className='text-[19px]'>{show === ind ? '-' : '+'}</span>
              </div>
              {show === ind ?
                <ul className='m-3'>
                  {subCatItem.map((catItem) => {
                    const { id, catId, subCat } = catItem
                    if (catId === item.id) {
                      return <li key={id}>{subCat}</li>
                    }
                  })}
                </ul> : ''}
            </div>
          })}

        </div>
      </div>
      <div className="most-popular-post bg-white p-5 mt-5">
        <h6 className='pb-5 border-b'>Most Popular Post</h6>
        <div className="popular-image">
          {mostPopularPost.map((item) => {
            const { id, title, image } = item
            return <div key={id} className="single-image flex items-center py-4 border-b">
              <div className="img-box mr-4">
                <img className='w-[100px] h-[80px]' src={image} alt="" />
              </div>
              <div className="img-details w-full">
                <h5 className='cursor-pointer'>{title}</h5>
                <p>Jun 05,2022</p>
              </div>
            </div>
          })}

        </div>
      </div>
      <div className="popular-tags bg-white p-5 mt-5">
        <h6 className='pb-5 border-b'>Our Popular Tags</h6>
        <ul className='flex flex-wrap justify-center items-center'>
          <li><a href="#">envato</a></li>
          <li><a href="#">themeforest</a></li>
          <li><a href="#">codecanyon</a></li>
          <li><a href="#">videohive</a></li>
          <li><a href="#">audiojungle</a></li>
          <li><a href="#">3docean</a></li>
          <li><a href="#">envato</a></li>
          <li><a href="#">themeforest</a></li>
          <li><a href="#">codecanyon</a></li>
        </ul>
      </div>
    </div>
  )
}

export default ShopingRight
