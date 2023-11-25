import React from 'react'
import '../../Sass/style6.scss'
import { Clients, Footer3 } from '../../Components/Index3'
import { CarsEvent, ContactInfo, Driving, Feature6, Hero6, Video } from '../../Components/Index6'
import Navbar6 from '../../Components/Navigation/Navbar6'

const index_6 = () => {
  return (
    <>
      <Navbar6 style5={true} />
      <Hero6 />
      <Feature6 />
      <Driving />
      <CarsEvent />
      <Video />
      <Clients style5={'testimonail-style5'}/>
      <ContactInfo />
      <Footer3 style4={true}/>
    </>
  )
}

export default index_6
