import React from 'react'
import { Achievement3, Blog3, Clients, CourseCarousel, Event3, Features, Footer3, Hero3, NewsLetters, WorkShop, WorkShopJoin } from '../../Components/Index3'
import Navbar3 from '../../Components/Navigation/Navbar3'
import '../../Sass/style3.scss'

const index_3 = () => {
  return (
    <>
      <Navbar3 />
      <Hero3 />
      <Features />
      <CourseCarousel />
      <Achievement3 />
      <Event3 />
      <WorkShop />
      <WorkShopJoin />
      <Blog3 />
      <Clients />
      <NewsLetters />
      <Footer3 />
    </>
  )
}

export default index_3
