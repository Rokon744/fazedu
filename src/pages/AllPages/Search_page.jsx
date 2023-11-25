import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import { Hero } from '../../Components/CoursesAll'
import BlogPost3 from '../../Components/BlogsAll/BlogPost3'
import Footer from '../../Components/Homes/Footer'

const Search_page = () => {
  return (
    <>
      <Navbar />
      <Hero searchPage={'searchPage'} />
      <BlogPost3 searchPage={'searchPage'} />
      <Footer />
    </>
  )
}

export default Search_page
