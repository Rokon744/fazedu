import React from 'react'
import ShopingLeft from './ShopingLeft'
import ShopingRight from './ShopingRight'

const ShopIng = () => {
  return (
    <section className="shop-inner py-10 md:py-16 lg:py-20">
        <div className="container">
            <div className="shop-style-inner lg:flex justify-between">
                <ShopingLeft />
                <ShopingRight />
            </div>
        </div>
    </section>
  )
}

export default ShopIng
