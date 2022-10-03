import React, { useState } from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import './services.css'
import { Helmet } from 'react-helmet'

const Services = () => {

  // const [gardenShow, setGardenShow] = useState(false)
  // const [trimShow, setTrimShow] = useState(false)
  // const [lawnShow, setLawnShow] = useState(false)

  // const revealBtn = () => {
  //   setGardenShow(prev => !prev)
  // }

  // const revealBtn2 = () => {
  //   setTrimShow(prev => !prev)
  // }

  // const revealBtn3 = () => {
  //   setLawnShow(prev => !prev)
  // }

  const [serviceShow, setServiceShow] = useState({
    garden: false,
    trim: false,
    lawn: false
  })

  const revealBtn = () => {
    setServiceShow(prev => ({
      garden: !prev.garden
    }))
  }
 
  const revealBtn2 = () => {
    setServiceShow(prev => ({
      trim: !prev.trim
    }))
  }

  const revealBtn3 = () => {
    setServiceShow(prev => ({
      lawn: !prev.lawn
    }))
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services - Check Out What We Offer</title>
        <link rel="canonical" href='http://mysite.com/services' />
      </Helmet>

      <Nav />

      <main className='services--wrapper'>
        <p className='services--intro'>
          At Garden ER we provide a fully licensed, insured & WCB garden service to all residential, strata and commercial clients. All enquiries are dealt with promptly and a free consultation can be arranged within days at your convenience. After the consultation you will receive a detailed estimate on the garden work discussed along with a confirmed schedule when the work will be performed. We provide a full range of services from a one off garden clean up visit to an ongoing regular garden maintenance service and everything else in between as found below.
        </p>

        <div className='services--selection'>
          <ul>
            <li onPointerUp={revealBtn}>Garden Maintenance <br /> <span className='selection--view-more'>(click to view)</span><hr /></li>
            <li onPointerUp={revealBtn2}>Trimming <br /> <span className='selection--view-more'>(click to view)</span><hr /></li>
            <li onPointerUp={revealBtn3}>Lawn Maintenance <br /> <span className='selection--view-more'>(click to view)</span><hr /></li>
          </ul>
        </div>

        <div className='services'>
          {serviceShow.garden && <div className='service--1 flip-vertical-right'>

            <ul>
              <li className='services--header'>Garden Maintenance</li>
              <li className='services--text'>Weekly, bi-weekly or monthly garden maintenance services. Gardens are weeded, debris is raked clear, deadheading of flowers, shrubs & plants trimmed, property blown out.</li>
            </ul>

            <ul>
              <li className='services--header'>Garden Design</li>
              <li className='services--text'>From the simple installation of new plants in an existing garden bed to the blueprint design of a complete new garden. Our extensive knowledge of plants will let you decide on what options are available for you unique garden.</li>
            </ul>

            <ul>
              <li className='services--header'>Garden Clean Ups</li>
              <li className='services--text'>A one off complete garden clean up to remove of all unwanted plants & debris/weeding & trimming.</li>
            </ul>

            <ul>
              <li className='services--header'>Seasonal Planting</li>
              <li className='services--text'>Bright annual flowers for the spring & summer, along with perennial planting all year round.</li>
            </ul>

            <ul>
              <li className='services--header'>Soil, Mulch & Rock Delivery</li>
              <li className='services--text'>We can deliver & install a variety of materials for your every need. Garden blend, turf blend, soil ammender, top dressing, bark mulch & river rock.</li>
            </ul>

            <ul>
              <li className='services--header'>Power Washing</li>
              <li className='services--text'>All ground surfaces pressure washed such as decks, walkways & driveways.</li>
            </ul>
          </div>}

          {serviceShow.trim && <div className='service--2 flip-vertical-right'>
            <ul>
              <li className='services--header'>Hedge Trimming</li>
              <li className='services--text'>Laurel, Cedar, Yew & Boxwood Hedges trimmed.</li>
            </ul>

            <ul>
              <li className='services--header'>Tree Pruning</li>
              <li className='services--text'>Dead branches removed, trees shaped & pruned.</li>
            </ul>

            <ul>
              <li className='services--header'>Tree, Hedge & Plant Installation</li>
              <li className='services--text'>We can purchase, deliver & install any plant material you request.</li>
            </ul>

          </div>}

          {serviceShow.lawn && <div className='service--3 flip-vertical-right'>

            <ul>
              <li className='services--header'>Lawn Maintenance</li>
              <li className='services--text'>Weekly and bi-weekly lawn mowing services with all grass clippings taken away.</li>
            </ul>

            <ul>
              <li className='services--header'>New Lawn Installation</li>
              <li className='services--text'>We remove the old lawn & replace it with new turf or grass seed.</li>
            </ul>

            <ul>
              <li className='services--header'>Lawn Applications</li>
              <li className='services--text'>Lawn Fertilizing Programs, Aerating, Power Raking & Overseeding</li>
            </ul>

          </div>}

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Services