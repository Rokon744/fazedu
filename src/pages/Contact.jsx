import React from 'react'
import '../Sass/contact.scss'
import Navbar from '../Components/Navigation/Navbar'
import { Hero } from '../Components/CoursesAll'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import Footer from '../Components/Homes/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero contact={'contact'} />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact
