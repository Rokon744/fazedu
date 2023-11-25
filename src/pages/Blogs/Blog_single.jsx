import React from 'react'
import { BlogPost4 } from '../../Components/BlogsAll'
import { Hero } from '../../Components/CoursesAll'
import Footer from '../../Components/Homes/Footer'
import Navbar from '../../Components/Navigation/Navbar'

const Blog_single = () => {
  return (
    <>
      <Navbar />
      <Hero blogS={'blogSingle'} />
      <BlogPost4 />
      <Footer />
    </>
  )
}

export default Blog_single
