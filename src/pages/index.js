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
        <meta name="title" content={siteTitle} />
        <meta name="description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brennaharden.netlify.app/" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content="%PUBLIC_URL%/static/portfolio-preview.png" />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
            “Eventually everything connects — people, ideas, objects. The quality of the connections is the key to quality per se.”  
            <br/>
            
            </h2>
            <blockquote>—Charles Eames, &nbsp; Architect & Designer</blockquote>
          </header>
          <p>
            <strong>My name is Brenna Harden. </strong><br/>I'm a web developer based in the Intermountain West. I love what I do, because I love planning and problem solving. My attitude toward development is best described in the words of Steve Jobs: &nbsp;
            "Design is not just what it looks like and feels like. Design is how it <i>works</i>."
            <br/><br/>
            I believe that intention is not only the key to great web design, but to creating a powerful infrastructure between the front and back end. A successful website improves the relationship between the user and the entity behind the site. <strong>My passion is engineering that trust.</strong>
            <br/>
            <br/>
            In my free time, catch me goofing off with my best friend and trying to convince my cat to eat her food before the dog gets it.
          </p>
          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
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
