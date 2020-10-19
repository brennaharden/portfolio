import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/portfolio-oct-200.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I'm Brenna</strong>, a web developer&nbsp; 
        <br />
        striving to make the online experience&nbsp; 
        <br />
        more <strong>intuitive</strong> and <strong>accessible</strong>.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
