import React from 'react'
import { Hero } from '../../Components/CoursesAll'
import AchieveMent from '../../Components/Homes/AchieveMent'
import Footer from '../../Components/Homes/Footer'
import StudentFback from '../../Components/Homes/StudentFback'
import Navbar from '../../Components/Navigation/Navbar'
import { Category } from '../../Components/PageAllComp'

const Instructor = () => {
  return (
    <>
      <Navbar />
      <Hero instructor={'instructor'} />
      <Category />
      <StudentFback />
      <AchieveMent />
      <Footer />
    </>
  )
}

export default Instructor
