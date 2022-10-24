import React from 'react'
import './HelpCard.css'

const HelpCard = ({title, imageUrl,helpcardBody}) => {
  return (
    <div className='grid-container'>
    <div className='helpcard-container'>
        <div className='helpcard-icon'>
        <img src={imageUrl} alt="" />
        </div>
        <div className='helpcard-title'>
        {title}
        </div>
        <div className='helpcard-body'>
       {helpcardBody}
        </div>
    <div className='helpcard-a'>
     <a href="/">Call Now</a>
    </div>
    </div>
    </div>

  )
}

export default HelpCard
