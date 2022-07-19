import React, { useState } from 'react'
import Nav from './../../components/nav/nav'
import { Helmet } from 'react-helmet'
import './contact.css'
import Footer from '../../components/footer/footer'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
    maint: false,
    trim: false,
    lawn: false
  })
  console.log(formData)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = (event) => {
    alert(`Thank you for contacting Garden-ER ${formData.name}! We have recieved your message and will get back to you shortly.`)
    // event.preventDefault()
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us - Get A Free Quote</title>
        <link rel="canonical" href='http://mysite.com/contact' />
      </Helmet>

      <Nav />

      <h2 className='top-text'>WE'RE HERE TO HELP WITH ALL GARDEN EMERGENCIES</h2>

      {/* TEXT AT THE TOP IN A FLEXBOX ------- */}
      <div className='contact--top-text'>

        <p>Request A Quote</p>

        <div className='hours-info'>
          <h4>Working Hours <hr /></h4>
          <ul>
            <li>Mon - Fri</li>
            <li>8AM - 4PM</li>
          </ul>
          <ul>
            <li>Sat - Sun</li>
            <li>CLOSED</li>
          </ul>
        </div>

      </div>
      {/* TEXT AT THE TOP IN A FLEXBOX END ------- */}

      {/* FORM BEGINS ------------------------------------------------------ */}
      <div className='contact--form'>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            name='name'
            required
            onChange={handleChange}
            value={formData.name}
          />

          <input
            type="email"
            placeholder="Your Email"
            name='email'
            required
            onChange={handleChange}
            value={formData.email}
          />

          <input
            type="tel"
            placeholder="Phone Number (optional)"
            name='phone'
            onChange={handleChange}
            value={formData.phone}
          />

          <h4>Services You Are Interested In</h4>

          <div className='form--boxes'>
            <ul>
              <li><label htmlFor='maint'>Garden Maintenance</label></li>
              <li>
                <input
                  type="checkbox"
                  name='maint'
                  id='maint'
                  onChange={handleChange}
                  checked={formData.maint}
                />
              </li>
            </ul>

            <ul>
              <li><label htmlFor='trim'>Trimming</label></li>
              <li>
                <input
                  type="checkbox"
                  name='trim'
                  id='trim'
                  onChange={handleChange}
                  checked={formData.trim}
                />
              </li>
            </ul>

            <ul>
              <li><label htmlFor='lawn'>Lawn Maintenance</label></li>
              <li>
                <input
                  type="checkbox"
                  name='lawn'
                  id='lawn'
                  onChange={handleChange}
                  checked={formData.lawn}
                />
              </li>
            </ul>
          </div>

          <textarea
            placeholder="Type Your Message.."
            name='text'
            onChange={handleChange}
            value={formData.text}
          />

          <button className='contact--btn-sub' type='submit'>Submit</button>
          {/* <input 
            type="submit"
            value="Submit"
          /> */}

        </form>
      </div>
      {/* FORM ENDS ------------------------------------------------------ */}

      <Footer />
    </div>
  )
}

export default Contact