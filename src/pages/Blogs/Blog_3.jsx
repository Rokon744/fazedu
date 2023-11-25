import React from 'react'
import BlogPost3 from '../../Components/BlogsAll/BlogPost3'
import { Hero } from '../../Components/CoursesAll'
import Footer from '../../Components/Homes/Footer'
import Navbar from '../../Components/Navigation/Navbar'

const Blog_3 = () => {
  return (
    <>
      <Navbar />
      <Hero blog3={'blogStyle3'} />
      <BlogPost3 />
      <Footer />
    </>
  )
}

export default Blog_3
