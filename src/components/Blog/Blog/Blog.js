import React from 'react'

import BlogHeader from '../BlogHeader/BlogHeader'
import Footer from '../../Shared/Footer/Footer'
import './Blog.css'

const Blog = () => {
  return (
    <div className='blog'>
      <BlogHeader></BlogHeader>
      <Footer></Footer>
    </div>
  )
}

export default Blog