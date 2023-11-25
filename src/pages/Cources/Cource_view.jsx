import React from 'react'
import { CourseSingleOverview, CourseViewBody, Hero } from '../../Components/CoursesAll'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Homes/Footer'

const Cource_view = () => {
  return (
    <>
      <Navbar />
      <Hero view={true} />
      <CourseViewBody />
      <CourseSingleOverview />
      <Footer />
    </>
  )
}

export default Cource_view
