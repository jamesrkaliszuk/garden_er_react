import React, {useState, useEffect} from 'react'
import { CgPushChevronUpR } from 'react-icons/cg'
import './toTop.css'

const ToTop = () => {
    
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        setVisible(window.pageYOffset)
    },[])
    
    useEffect(() => {
        const handleScroll = () => {
            if(window.pageYOffset >= 500) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])


    const backToTop = () => {
        window.scrollTo({
            top: 0
        })
    }


    return (
        <div>
            {visible ? <CgPushChevronUpR className='to-top slide-top-btn' onPointerUp={backToTop} /> : <CgPushChevronUpR className='to-top slide-top-reverse' onPointerUp={backToTop} />}
        </div>
    )
}

export default ToTop