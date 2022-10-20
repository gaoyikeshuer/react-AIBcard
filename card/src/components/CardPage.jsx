import React from 'react'

const CardPage = ({slides, index}) => {
  return (
    <div>
       <h1>{slides[index].title}</h1>  
      <p>{slides[index].content}</p>
   
    </div>
  )
}

export default CardPage
