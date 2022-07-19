import React from 'react'
import './serviceBlocks.css'

const ServiceBlocks = (props) => {
  return (
    <div className='service-blocks--wrapper'>
      <div className='service-blocks--top'>
        {props.icon}
        <h3>{props.heading}</h3>
      </div>
      <p>{props.text}</p>
    </div>
  )
}

export default ServiceBlocks