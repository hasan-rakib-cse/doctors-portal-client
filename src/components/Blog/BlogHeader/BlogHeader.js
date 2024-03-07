import React from 'react'

import Navbar from '../../Shared/Navbar/Navbar'

import BlogMain from '../BlogMain/BlogMain'
import './BlogHeader.css'

const BlogHeader = () => {
  return (
    <div className="header-container">
        <Navbar></Navbar>
        <BlogMain></BlogMain>
    </div>
  )
}

export default BlogHeader
