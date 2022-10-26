import React from 'react'
import PrimaryButton from './PrimaryButton'
import './BannerCardWhite.css'
const BannerCardWhite = ({title, cardBody}) => {
  return (
    <div className='bannerWhite-container'>
     <div className='bannerWhite-container-text'>
        <div className='bannerWhite-title'>
         {title}
        </div>
        <div className='bannerWhite-content'>
         {cardBody}
        </div>

     </div>
     <div className='bannerWhite-button'>
 <PrimaryButton title="Primary"/>
     </div>
    </div>
  )
}

export default BannerCardWhite
