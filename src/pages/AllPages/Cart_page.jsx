import React from 'react'
import { Hero } from '../../Components/CoursesAll'
import Footer from '../../Components/Homes/Footer'
import Navbar from '../../Components/Navigation/Navbar'
import { CartItem } from '../../Components/PageAllComp'

const Cart_page = () => {
  return (
    <>
      <Navbar />
      <Hero cartPage={'cartPage'} />
      <CartItem />
      <Footer />
    </>
  )
}

export default Cart_page
