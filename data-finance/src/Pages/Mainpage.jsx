import React from 'react'
import Navbar from '../Components/Navbar1'
import Hero from '../Components/Hero'
import Analytics from '../Components/Analytics'
import Newsletter from '../Components/Newsletter'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer';

const Mainpage = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Analytics />
    <Newsletter />
    <Cards />
    <Footer />
    </div>
  )
}

export default Mainpage