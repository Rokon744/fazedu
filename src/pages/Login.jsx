import React from 'react'
import Navbar from '../Components/Navigation/Navbar'
import { Hero } from '../Components/CoursesAll'
import Footer from '../Components/Homes/Footer';
import LoginSignupForm from './LoginSignupForm';

const Login = () => {
  return (
    <>
      <Navbar />
      <Hero login={'login'} />
      <LoginSignupForm form={'form'} />
      <Footer />
    </>
  )
}

export default Login
