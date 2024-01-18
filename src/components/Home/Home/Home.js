import React from 'react'
import Header from '../Header/Header'
import Services from '../Services/Services'
import FeaturedService from '../FeaturedService/FeaturedService'
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Services></Services>
        <FeaturedService></FeaturedService>
        <MakeAppoinment></MakeAppoinment>
        <Testimonials></Testimonials>
    </div>
  )
}

export default Home