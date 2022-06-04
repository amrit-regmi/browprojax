import React from 'react';
import Map from '../Map/Map';

const ContactUs = () => {

  const location = {
    address: 'Brow Pro, 1479 Atlantic Blvd, Neptune Beach, FL 32266',
    lat: 30.32376385412655,
    lng:  -81.41400075994149,
  } 

  return (
    <div className='page' id='contact'>
      
      <div className='content contactUs'>
        <div className='pageTitle'>Contact Us / Visit Us</div>
        <div className='pageContent'>
        <div className="asidelh">
            <div className='address'>
              <div>Brow Pro</div>
            1479 Atlantic Blvd <br/>
            Neptune Beach, FL 32266

              <div><a href="tel:+05890000111" style={{textDecoration:"auto"}}> <i className="fa fa-phone" aria-hidden="true"></i> <span style={{paddingLeft:"10px"}}>0-589-0000111</span> </a> </div>
              <div><a href="mailto:probrowjax@gmail.com">probrowjax@gmail.com</a> </div>
            </div>
            <div className="openingHoursContainer"><span className='openingHours'>Opening hours:</span>
        <table className="OpeningHoursTable">
          <tbody>
          <tr>
            <td>Monday</td>
            <td>09:00 AM - 05:00 AM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>09:00 AM - 05:00 AM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>09:00 AM - 05:00 AM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>09:00 AM - 05:00 AM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>09:00 AM - 05:00 AM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>09:00 AM - 05:00 AM</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
          </tbody>
        </table>
        </div>
        </div>
        <Map location={location} zoomLevel={17}></Map>
          
        </div>

        
        
        
      </div>
    </div> 
  )
}

export default ContactUs