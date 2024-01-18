import React from 'react'

import './Testimonials.css'
import wilson from '../../../images/people1.png'
import ema from '../../../images/people2.png'
import aliza from '../../../images/people3.png'
import Testimonial from '../Testimonial/Testimonial'

const testimonialData = [
  {
    quote: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using \'Content here, content\'',
    name: 'Wilson Harry',
    from: 'California',
    img: wilson
  },
  {
    quote: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using \'Content here, content\'',
    name: 'Ema Watsone',
    from: 'Washington DC',
    img: ema
  },
  {
    quote: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using \'Content here, content\'',
    name: 'Christina Aliza',
    from: 'Newyork',
    img: aliza
  }
]

const Testimonials = () => {
  return (
    <section className='testimonials my-5 py-5'>
      <div className="container">
        <div className="section-header">
          <h5 style={{ color: "#1CC7C1" }} className='text-uppercase'>Testimonial</h5>
          <h1>What Our Patients <br/> Says </h1>
        </div>
        <div className="card-deck row mt-5">
          {
            testimonialData.map(testimonial => <Testimonial key={testimonial.name} testimonial={testimonial} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Testimonials