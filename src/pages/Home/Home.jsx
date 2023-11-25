import React from 'react'
import AbtEdu from '../../Components/Homes/AbtEdu'
import AchieveMent from '../../Components/Homes/AchieveMent'
import BlogPost from '../../Components/Homes/BlogPost'
import Footer from '../../Components/Homes/Footer'
import HomeCategory from '../../Components/Homes/HomeCategory'
import HomeHero from '../../Components/Homes/HomeHero'
import HomeSlide from '../../Components/Homes/HomeSlide'
import RealCreators from '../../Components/Homes/RealCreators'
import StudentFback from '../../Components/Homes/StudentFback'
import Navbar from '../../Components/Navigation/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HomeHero/>
      <HomeSlide/>
      <HomeCategory/>
      <AbtEdu/>
      <RealCreators/>
      <StudentFback/>
      <BlogPost/>
      <AchieveMent/>
      <Footer/>
    </>
  )
}

export default Home
