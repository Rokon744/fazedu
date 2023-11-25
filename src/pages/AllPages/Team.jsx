import React from 'react'
import { Hero } from '../../Components/CoursesAll'
import AchieveMent from '../../Components/Homes/AchieveMent'
import Footer from '../../Components/Homes/Footer'
import RealCreators from '../../Components/Homes/RealCreators'
import Navbar from '../../Components/Navigation/Navbar'

const Team = () => {
  return (
    <>
      <Navbar />
      <Hero team={'team'} />
      <RealCreators teama={'team'} />
      <AchieveMent team={'team'} />
      <Footer />
    </>
  )
}

export default Team
