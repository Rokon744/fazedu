import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import { Hero } from '../../Components/CoursesAll'
import { SearchNone } from '../../Components/PageAllComp'
import Footer from '../../Components/Homes/Footer'

const Search_none = () => {
  return (
    <>
      <Navbar />
      <Hero searchNone={'searchNone'} />
      <SearchNone />
      <Footer />
    </>
  )
}

export default Search_none
