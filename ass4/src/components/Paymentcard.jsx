import React from 'react'
import Card from './Card.jsx'

const Paymentcard = () => {
    let data=[
        {date:"28/10/2020",logo:"https://pngimg.com/uploads/amazon/small/amazon_PNG27.png",heading:'Amazon Gift',subheading:'Pay',devices:'Desktop-Mobile', color: "yellow"},
        {date:"28/10/2020",logo:"https://pngimg.com/uploads/amazon/small/amazon_PNG27.png",heading:'Amazon Gift',subheading:'Pay',devices:'Desktop-Mobile' ,color: "yellow"},
        {date:"21 Sep 2020",logo:"https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png",heading:'Apple Gift',subheading:'Payment',devices:'Desktop-Mobile', color: "grey"},
    ]
  return (
    <>
     {
         <div>
             <Card value={data}/>
         </div>
     }
    </>
    
  )
}

export default Paymentcard