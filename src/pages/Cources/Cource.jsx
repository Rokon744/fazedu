import React from 'react'
import { Hero, Members } from '../../Components/CoursesAll'
import '../../Sass/course.scss'
import Footer from '../../Components/Homes/Footer'
import Navbar from '../../Components/Navigation/Navbar'

const Cource = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Members />
      <Footer />
    </>
  )
}

export default Cource
