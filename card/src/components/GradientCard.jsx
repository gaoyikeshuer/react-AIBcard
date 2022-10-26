import React from 'react'
import './GradientCard.css'

const GradientCard = ({title, gradientBody, imageUrl}) => {
  return (
    <div className='gradient-container'>
        <div className="gradient-container-img">
            <img src={imageUrl} alt="" />
        </div>
        <div className="gradient-container-text">
        <div className='gradient-title'>
        {title}
        </div>
      <div className='gradient-body'>
       {gradientBody}
      </div>
        </div>
   
    </div>
  )
}

export default GradientCard
