import React from 'react';
import image from  "../../img/greeting.jpg";
import "./style.css"

function Cover() {
  return (
    <div className='greeting--coverage'>
        <img className='greeting--image' src={image} alt="" />
    </div>
  )
}

export default Cover