import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import { Hero } from '../../Components/CoursesAll'
import '../../Components/PageAllComp/about.scss'
import { AboutPage } from '../../Components/PageAllComp'
import StudentFback from '../../Components/Homes/StudentFback'
import RealCreators from '../../Components/Homes/RealCreators'
import Skilled from '../../Components/Index2/Skilled'
import AchieveMent from '../../Components/Homes/AchieveMent'
import BlogPost from '../../Components/Homes/BlogPost'
import Footer from '../../Components/Homes/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <Hero about={'about'} />
      <AboutPage />
      <StudentFback />
      <RealCreators />
      <Skilled />
      <AchieveMent about={'about'} />
      <BlogPost />
      <Footer />
    </>
  )
}

export default About
