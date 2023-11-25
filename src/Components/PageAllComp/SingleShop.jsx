import React from 'react'
import ShopingRight from './ShopingRight'
import SingleShopLeft from './SingleShopLeft'

const SingleShop = () => {
  return (
    <section className="single-shop-inner py-10 md:py-16 lg:py-20">
        <div className="container">
            <div className="single-style-inner lg:flex justify-between">
                <SingleShopLeft />
                <ShopingRight />
            </div>
        </div>
    </section>
  )
}

export default SingleShop
