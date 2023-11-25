import React from 'react'
import { Hero } from '../../Components/CoursesAll'
import BlogPost from '../../Components/Homes/BlogPost'
import Navbar from '../../Components/Navigation/Navbar'
import PrevNextButton from './PrevNextButton'
import Footer from '../../Components/Homes/Footer'

const Blog = () => {
  return (
    <>
      <Navbar />
      <Hero blog={'blogStyle'} />
      <BlogPost blog={'blogStyle'} />
      <PrevNextButton />
      <Footer />
    </>
  )
}

export default Blog
