import React from 'react'
import BlogPost from '../../Components/Homes/BlogPost'
import Footer from '../../Components/Homes/Footer'
import RealCreators from '../../Components/Homes/RealCreators'
import StudentFback from '../../Components/Homes/StudentFback'
import Achieve2 from '../../Components/Index2/Achieve2'
import Course2 from '../../Components/Index2/Course2'
import Expert2 from '../../Components/Index2/Expert2'
import Hero2 from '../../Components/Index2/Hero2'
import Pcategory from '../../Components/Index2/Pcategory'
import Skilled from '../../Components/Index2/Skilled'
import Navbar2 from '../../Components/Navigation/Navbar2'

const index_2 = () => {
  return (
    <>
      <Navbar2 />
      <Hero2 />
      <Expert2 />
      <Course2 />
      <Pcategory />
      <StudentFback />
      <RealCreators />
      <Skilled />
      <Achieve2 />
      <BlogPost />
      <Footer/>
    </>
  )
}

export default index_2
