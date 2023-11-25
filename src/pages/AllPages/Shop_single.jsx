import React from 'react'
import { Hero } from '../../Components/CoursesAll'
import Footer from '../../Components/Homes/Footer'
import Navbar from '../../Components/Navigation/Navbar'
import { SingleShop } from '../../Components/PageAllComp'

const Shop_single = () => {
  return (
    <>
      <Navbar />
      <Hero singleShop={'singleShop'} />
      <SingleShop />
      <Footer />
    </>
  )
}

export default Shop_single
