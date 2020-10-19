import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = `Brenna Harden \u2022 Web Developer`
  const siteDescription = 'Personal Page and Portfolio'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Yesterday is yesterday. If we try to recapture it,
              <br />
              we will only lose <i>tomorrow</i>.
            </h2>
          </header>
          <p>
            The best websites are useful to both the user and the host.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            I am currently open to work and willing to relocate! Please feel free to contact me via email or connect with me on LinkedIn.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              {/* <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form> */}
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
              <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">brenna.avalee@gmail.com</a>
                </li>
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Pocatello, ID 83201
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  828-406-4122
                </li>
                
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
