import React from 'react'
import Header from '../Header/Header'
import Services from '../Services/Services'
import FeaturedService from '../FeaturedService/FeaturedService'
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment'
import Testimonials from '../Testimonials/Testimonials'
import Blogs from '../Blogs/Blogs'
import Doctors from '../Doctors/Doctors'
import Contact from '../Contact/Contact'
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Services></Services>
        <FeaturedService></FeaturedService>
        <MakeAppoinment></MakeAppoinment>
        <Testimonials></Testimonials>
        <Blogs></Blogs>
        <Doctors></Doctors>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Home