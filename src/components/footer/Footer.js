import React from 'react'
import './footer.css'
import ToTop from '../toTopBtn/ToTop'
import { CgCopyright } from 'react-icons/cg'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()





    return (
        <div className='footer--wrapper'>

            <div className='footer--hours'>
                <h4>Hours Of Operation</h4>

                <div className='footer--hours-lists'>
                    <ul>
                        <li><h5>Mon - Fri</h5></li>
                        <li><h5>:</h5></li>
                        <li><h5>8:00AM  4:00PM</h5></li>
                    </ul>

                    <ul>
                        <li><h5>Sat - Sun</h5></li>
                        <li><h5>:</h5></li>
                        <li><h5>CLOSED</h5></li>
                    </ul>
                </div>

            </div>

            <div className='footer--copyright'>
                <h5><CgCopyright />{`copyright ${year} Garden-ER | developed by kaliszuk media`}</h5>
            </div>

            <ToTop />

        </div>
    )
}

export default Footer