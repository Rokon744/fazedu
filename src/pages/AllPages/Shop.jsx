import React from 'react'
import { Hero } from '../../Components/CoursesAll'
import Footer from '../../Components/Homes/Footer'
import Navbar from '../../Components/Navigation/Navbar'
import { ShopIng } from '../../Components/PageAllComp'

const Shop = () => {
  return (
    <>
      <Navbar />
      <Hero shop={'shop'} />
      <ShopIng />
      <Footer />
    </>
  )
}

export default Shop
