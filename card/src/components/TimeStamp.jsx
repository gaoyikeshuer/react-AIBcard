import React from 'react'

const TimeStamp = () => {
    var showdate = new Date().toLocaleDateString('en-IE',{day:"2-digit", month:"short", year:"numeric"});
  const myStyle = {
    fontFamily: "AspiraRegular",
    fontSize:"14px",
    lineHeight: "18px",
   
  }
  return (
    <div className='timestamp' style={myStyle} >
      {showdate}
    </div>
  )
}

export default TimeStamp
