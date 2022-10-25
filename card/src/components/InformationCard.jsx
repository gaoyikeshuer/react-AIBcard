import React from 'react'
import'./InformationCard.css'

const InformationCard = ({imageUrl}) => {
  return (
  
     <div className='information-container'>
    <div className='information-ImgContainer'>
        <img src={imageUrl} alt="" />
    </div>
     <div className='information-textContainer'>
<h2 className='information-title'>
  First time morgage buyers
</h2>
<p className='information-body'>
  Whether you're buying new or used, we can help you spread the cost of your car. Find out what you can borrow using our calculator, you could have what you need in three hours.
</p>
     </div>
     </div>
 
  )
}

export default InformationCard
