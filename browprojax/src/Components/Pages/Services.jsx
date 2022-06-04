import React from 'react';
import ServiceItem from '../ServiceItem';

const Services = () => {
  const browServices = [{
    name:"threading",
    image:"threading.jpg",
    description:"A significant step to carry out when we talk about removing unwanted hair is threading. A lot of the spas and salons provide threading service but with a higher level of discomfort. At Brow Pro, we believe in delivering pain-free service with the most delicate finesse to go with it. We use ancient eastern technique of removing unwanted hair by use of single strand of organic cotton thread. This procedure does not involve any chemicals.",

    price:"10 to 20 $ ",
    duration:"10-20 min"
  },
  {
    name:"Tinting / Brow henna",
    image:"tinting.jpg",
    description:"Tinting of lashes and brows is an easy way to maintain a beautiful colour and a groomed look. Tinted lashes and brows look natural while still adding structure to the face and depth to the eyes. Shaping the brows is always a part of the tinting service. At Brow Pro, tinting is done by certified professional, and the procedure is carried out in a treatment room, if possible.  Both procedures are semi parmanent, tinting lasts up to 2 weeks and brow henna lasts up to 6 weeks.",

    price:" Tinting 15 to 20 $, Brow Henna 45$ ",
    duration:"20-30 min"
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
      description:"At Brow Pro, we've perfected the art of waxing. We've streamlined our process to maximize your comfort, take up less of your time, and leave you with smoother, longer-lasting results.",

      price:"$7 to $250 ",
      duration:"10-60 min"
    },
    {
      name:"facial",
      image:"facial.jpg",
      description:"Each treatment begins with an assessment of your skin's needs, followed by customized deep cleansing, exfoliation, extractions, masks and lymphatic drainage massage. You'll emerge feeling fresh and glowing, armed with recommendations for home care to help attain your best skin ever.",
      price:"$30 to $100 ",
      duration:"60 min"
    },
    {
      name:"hair oil treatment",
      image:"hairOilTreatment.jpg",
      description:"Hair oil treatment can help promote stronger, healthy looking, and manageable hair. From nourishing scalp treatments to rich blended oils, give your hair the boost it needs. Using orgainc hair treatment productes, Brow pro's hair treatment service is instantaneous, leaving you with sleek, straight, and shiny hair as you walk out of our salon.",
      price:"$30 to $50 ",
      duration:"10-20 min"
    },
    {
      name:"ear candeling",
      image:"earCandeling.jpg",
      description:"A natural way to remove excessive earwax, fungus, infection & candida virus. This technique may also alleviate headaches, ringing in the ears or vertigo. It can also work well for single issues. The procedure is simple & safe, and tends to improve general health & well-being. ",
      price:"20 to 40 $ ",
      duration:"10-20 min"
    },
]
  return (
    <div className='page'>
      <div className='content services'>
        <div className='pageTitle'>Our Services</div>
        <div className='pageContent' id="browServices">
          {
            browServices.map((item) => {
              return <ServiceItem {...item} key={item.name}></ServiceItem>
            })
          }
        </div>

        <div className='pageContent' id="spaServices">
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