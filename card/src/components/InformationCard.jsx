import React from 'react'
import'./InformationCard.css'

const InformationCard = ({imageUrl}) => {
  return (
  
     <div className='information-container'>
    <div className='information-ImgContainer'>
      <div className="information-ImgContainer-bg">
      <img src={imageUrl} alt="" />
      </div>
       
    </div>
     <div className='information-textContainer'>
<div className='information-title'>
  First time morgage buyers
</div>
<div className='information-body'>
  Whether you're buying new or used, we can help you spread the cost of your car. Find out what you can borrow using our calculator, you could have what you need in three hours.
</div>
     </div>
     </div>
 
  )
}

export default InformationCard
