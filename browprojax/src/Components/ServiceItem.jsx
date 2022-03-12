import React from 'react';

const ServiceItem = ({image,description,price,duration,name}) => {

  return (
    <div className='item serviceItem'>
      <div className='imageContainer'>
        <img className='image' src={require("../Images/"+image)}  alt={name}/>
      </div>
        <div className='details'>
          <div className='name'> {name}</div>
          <div className='description'>{description}</div>
          <div className='priceDuration'> Price starting from  {price} ({duration})</div>
        </div>
      
    </div> 
  )
}

export default ServiceItem