import React from 'react'

import Navbar from '../../Shared/Navbar/Navbar'
import './ReviewsHeader.css'
import ReviewsMain from '../ReviewsMain/ReviewsMain'

const ReviewsHeader = () => {
  return (
    <div className="header-container">
        <Navbar></Navbar>
        <ReviewsMain></ReviewsMain>
    </div>
  )
}

export default ReviewsHeader
