import React from 'react'
import { FaDiscord, FaLinkedinIn, FaGithub, FaRegEnvelope} from 'react-icons/fa'

const Footer = () => (

  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/brennaharden/" >
            <FaLinkedinIn/>
          </a>
        </li>
        <li>
          <a href="https://github.com/brennaharden" >
            <FaGithub/>
          </a>
        </li>
        <li>
          <a href="https://discordapp.com/users/727918190285422623" target="_blank">
            <FaDiscord/>
          </a>
        </li>
        <li>
          <a href="mailto:brenna.avalee@gmail.com">
            <FaRegEnvelope/>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
  
)

export default Footer
