import React from 'react'
import './UsefulDocumentCard.css'

const UsefulDocumentCard = ({title,cardBody}) => {
  return (
    <div className='useful-container'>
        <div className='useful-container-text'>
            <div className='useful-title'>
             {title}
            </div>
            <div className='useful-content'>
             {cardBody}
            </div>
        </div>
        <div className='useful-link'>
          <a href="/">Download document</a>
        </div>
    </div>
  )
}

export default UsefulDocumentCard
