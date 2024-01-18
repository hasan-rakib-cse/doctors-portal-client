import React from 'react'
import featured from '../../../images/treatment.png'

const FeaturedService = () => {
  return (
    <section className='features-service pb-0 pb-md-5 my-5'>
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-5 mb-4 m-md-0">
                    <img className='img-fluid' src={featured} alt="treatment" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h1>Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className='text-secondary my-5' style={{width: '450px'}}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <button className='btn text-white px-4' style={{ background: "#1CC7C1", border: "1px solid#1CC7C1" }}>Learn More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedService