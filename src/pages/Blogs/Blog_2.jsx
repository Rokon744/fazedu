import React from 'react'
import '../../Sass/blog.scss'
import { BlogsPost2 } from '../../Components/BlogsAll'
import { Hero } from '../../Components/CoursesAll'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Homes/Footer'

const Blog_2 = () => {
  return (
    <>
      <Navbar />
      <Hero blog2={'blogStyle2'} />
      <BlogsPost2 />
      <Footer />
    </>
  )
}

export default Blog_2
