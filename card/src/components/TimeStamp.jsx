import React from 'react'

const TimeStamp = () => {
    var showdate = new Date().toLocaleDateString('en-IE',{day:"2-digit", month:"short", year:"numeric"});
  
  return (
    <div>
      {showdate}
    </div>
  )
}

export default TimeStamp
