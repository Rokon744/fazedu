import React from 'react'
import '../../Sass/style4.scss'
import Navbar4 from '../../Components/Navigation/Navbar4'
import { Hero4, Proffesor, Courses4, Register4, Instructor4, Apps3 } from '../../Components/Index4'
import HomeSlide from '../../Components/Homes/HomeSlide'
import { Footer3 } from '../../Components/Index3'

const index_4 = () => {
  return (
    <>
      <Navbar4 />
      <Hero4 />
      <Proffesor />
      <Courses4 />
      <Register4 />
      <Instructor4 />
      <Apps3 />
      <HomeSlide/>
      <Footer3 style4={true}/>
    </>
  )
}

export default index_4
