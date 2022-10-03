import React from 'react'
import Nav from './components/nav/Nav'
import './style.css'
import ServiceBlocks from './components/service blocks/ServiceBlocks'
import Footer from './components/footer/Footer'
import { Outlet, Link } from 'react-router-dom'
import { GiHighGrass, GiGardeningShears, GiWaterDrop } from 'react-icons/gi'
import { TbShovel } from 'react-icons/tb'
import { Helmet } from 'react-helmet'

const App = () => {
  return (
    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Garden-ER Home - Welcome To Your New Garden</title>
        <link rel="canonical" href='http://mysite.com/home' />
      </Helmet>


      {/*NAV ---------------------------------------------------------------------------------------------------  */
        <nav>
          <Outlet />
          <Nav />
        </nav>
      /*END OF NAV ------------------------------------------------------------------------------------------------  */}

      {/*HEADER ---------------------------------------------------------------------------------------------------  */
        <header>
          <div className='header--img'>
            <div className='header--content'>
              <h1>Garden-ER</h1>
              <h4>Get A Free Quote Today</h4>
              <Link to='./contact'>
                <button type='button' className='header--button' >Free Quote</button>
              </Link>
            </div>
          </div>
        </header>
      /*END OF HEADER ---------------------------------------------------------------------------------------  */}


      {/*START OF MAIN ---------------------------------------------------------------------------------------  */}
      <main>
        <div className='main--wrapper'>
          <div className='main--about'>
            <h2 className='thePads'>About Us</h2>
            <p className='thePads'>Garden ER is a North Vancouver owned & operated gardening & landscaping company, dedicated to servicing North & West Vancouver lawns & gardens. We provide a complete, reliable and professional garden service. Let Garden ER take care of any job, large or small, our services range from regular lawn mowing to the installation of a new garden.</p>
          </div>

          <div className='main--services'>
            <h2>Our Services</h2>

            <div className='main--service-blocks'> {/*EDITING SERVICE BLOCKS START */}

              <div>
                <ServiceBlocks
                  icon={<GiHighGrass />}
                  heading="Lawn Maint"
                  text="Bi-weekly mowing and weed wacking of lawns. Also including overseeding and lawn installs"
                />
              </div>

              <div>
                <ServiceBlocks
                  icon={<GiGardeningShears />}
                  heading="Trimming"
                  text="Cutting back overgrown foliage as well as trimming hedges, laurels, cedars, and yews"
                />
              </div>

              <div>
                <ServiceBlocks
                  icon={<TbShovel />}
                  heading="Garden Maint"
                  text="Garden clean ups, weeding, soil, mulch, and rock delivery"
                />
              </div>

              <div>
                <ServiceBlocks
                  icon={<GiWaterDrop />}
                  heading="Power Washing"
                  text="All ground surfaces pressure washed such as decks, walkways, and driveways"
                />
              </div>
            </div> {/*EDITING SERVICE BLOCKS END */}
          </div> {/*SERVICES END */}

        </div>
      </main>
      {/*END OF MAIN ---------------------------------------------------------------------------------------  */}


      {/*START OF FOOTER ---------------------------------------------------------------------------------------  */}
      <footer>
        <Footer />
      </footer>
      {/*END OF FOOTER ---------------------------------------------------------------------------------------  */}


    </div>
  )
}

export default App