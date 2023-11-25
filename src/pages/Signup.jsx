import React from 'react'
import Navbar from '../Components/Navigation/Navbar'
import { Hero } from '../Components/CoursesAll'
import Footer from '../Components/Homes/Footer';
import LoginSignupForm from './LoginSignupForm';

const Signup = () => {
  return (
    <>
      <Navbar />
      <Hero signup={'signup'} />
      <LoginSignupForm />
      <Footer />
    </>
  )
}

export default Signup
