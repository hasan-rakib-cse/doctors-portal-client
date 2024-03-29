import React from 'react'

import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css'
import cadi from '../../../images/doctor1.jpg';
import padi from '../../../images/doctor2.jpg';
import jadi from '../../../images/doctor3.jpg';

const blogData = [
  {
    title: 'Check at least a doctor in a year for your teeth',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    author: 'Dr. Cadi',
    authorImg: cadi,
    date: '23 April 2019'
  },
  {
    title: 'Two time brush in a day can keep you healthy',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    author: 'Dr. Padi',
    authorImg: padi,
    date: '16 June 2015'
  },
  {
    title: 'The tooth cancer is taking a challenge',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    author: 'Dr. jadi',
    authorImg: jadi,
    date: '11 May 2023'
  },
]

const Blogs = () => {
  return (
    <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center">
          <h5 style={{ color: "#1CC7C1" }} className="text-uppercase">Our Blog</h5>
          <h1>From Our Blog News</h1>
        </div>
        <div className="card-deck mt-5 row">
          {
            blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Blogs