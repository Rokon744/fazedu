import React from 'react'
import '../../Sass/style7.scss'
import { Feature7, Hero7, Instructor7, Offer, Subscribe } from '../../Components/Index7'
import Navbar from '../../Components/Navigation/Navbar'
import Blog3 from '../../Components/Index3/Blog3'
import { Courses4 } from '../../Components/Index4'
import { Footer3 } from '../../Components/Index3'

const index_7 = () => {
  return (
    <>
      <Navbar style7={'style-7'} />
      <Hero7 />
      <Courses4 />
      <Feature7 />
      <Offer />
      <Instructor7 />
      <Blog3 style7={'blog-style7'} />
      <Subscribe />
      <Footer3 />
    </>
  )
}

export default index_7
