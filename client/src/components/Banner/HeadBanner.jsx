import React from 'react'
import './HeadBanner.css'
const HeadBanner = ({bannerimage,heading}) => {
  return (
    <div className='headbanner'>
        <div className='bannerimgfilter'></div>
        <img className='bannerimg' src={bannerimage} alt='no-image'/>
        <div className='bannerheading'>
            <h1>{heading}</h1>
        </div>
    </div>
  )
}

export default HeadBanner