import React from 'react'
import '../../Sass/style5.scss'
import { About5, Features, Hero5, MyBook } from '../../Components/Index5'
import CourseCarousel from '../../Components/Index3/CourseCarousel'
import Navbar4 from '../../Components/Navigation/Navbar4'
import { Register4 } from '../../Components/Index4'
import { Clients, Footer3 } from '../../Components/Index3'

const index_5 = () => {
  return (
    <>
      <Navbar4 style5={true} />
      <Hero5 />
      <About5 />
      <CourseCarousel style5={'courseCarousel-style5'} />
      <Register4/>
      <Features />
      <Clients style5={'testimonail-style5'}/>
      <MyBook />
      <Footer3 style4={true}/>
    </>
  )
}

export default index_5
