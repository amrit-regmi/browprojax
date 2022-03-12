import React from 'react';
import ServiceItem from '../ServiceItem';

const Services = () => {
  const browServices = [{
    name:"threading",
    image:"threading.jpg",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis eum alias? Tempora aliquam sed ipsam explicabo, ratione esse optio, aspernatur fugit dignissimos quasi ex sint cupiditate corporis! Veritatis, itaque!",

    price:"10 to 20 $ ",
    duration:"10-20 min"
  },
  {
    name:"tinting",
    image:"tinting.jpg",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis eum alias? Tempora aliquam sed ipsam explicabo, ratione esse optio, aspernatur fugit dignissimos quasi ex sint cupiditate corporis! Veritatis, itaque!",

    price:"10 to 20 $ ",
    duration:"10-20 min"
  },
  {
    name:"lamination",
    image:"lamination.jpg",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis eum alias? Tempora aliquam sed ipsam explicabo, ratione esse optio, aspernatur fugit dignissimos quasi ex sint cupiditate corporis! Veritatis, itaque!",

    price:"10 to 20 $ ",
    duration:"10-20 min"
  },
  {
    name:"Eylash lift / extension",
    image:"extension.jpg",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis eum alias? Tempora aliquam sed ipsam explicabo, ratione esse optio, aspernatur fugit dignissimos quasi ex sint cupiditate corporis! Veritatis, itaque!",

    price:"10 to 20 $ ",
    duration:"10-20 min"
  },
]

const spaServices =  [{
      name:"waxing",
      image:"waxing.jpg",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis eum alias? Tempora aliquam sed ipsam explicabo, ratione esse optio, aspernatur fugit dignissimos quasi ex sint cupiditate corporis! Veritatis, itaque!",

      price:"$10 to $20 ",
      duration:"10-20 min"
    },
    {
      name:"facial",
      image:"facial.jpg",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis eum alias? Tempora aliquam sed ipsam explicabo, ratione esse optio, aspernatur fugit dignissimos quasi ex sint cupiditate corporis! Veritatis, itaque!",
      price:"$10 to $20 ",
      duration:"10-20 min"
    },
    {
      name:"hair oil treatment",
      image:"hairOilTreatment.jpg",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis eum alias? Tempora aliquam sed ipsam explicabo, ratione esse optio, aspernatur fugit dignissimos quasi ex sint cupiditate corporis! Veritatis, itaque!",

      price:"$10 to $20 ",
      duration:"10-20 min"
    },
    {
      name:"ear candeling",
      image:"earCandeling.jpg",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis eum alias? Tempora aliquam sed ipsam explicabo, ratione esse optio, aspernatur fugit dignissimos quasi ex sint cupiditate corporis! Veritatis, itaque!",

      price:"10 to 20 $ ",
      duration:"10-20 min"
    },
]
  return (
    <div className='page'>
      <div className='content services'>
        <div className='pageTitle'>Our Services</div>
        <div className='pageContent' href="#browServices">
          {
            browServices.map((item) => {
              return <ServiceItem {...item} key={item.name}></ServiceItem>
            })
          }
        </div>

        <div className='pageContent' href="#spaServices">
          {
            spaServices.map((item) => {
              return <ServiceItem {...item} key={item.name}></ServiceItem>
            })
          }
        </div>
      </div>
    </div> 
  )
}

export default Services