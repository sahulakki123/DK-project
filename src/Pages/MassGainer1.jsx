import React from 'react'

import ScrollFloat from '../Library/ScrollFloat';

import im1 from '../assets/ms1.jpg'
import im2 from '../assets/ms2.webp' 
import im3 from '../assets/ms3.webp'
import im4 from '../assets/ms4.webp'
import im5 from '../assets/ms5.jpg'
import MassGainer2 from './MassGainer2';

const MassGainer1 = () => {

let Props=[
            {
              id:"1",
              im:[im1], 
              mydes:"Nutrabay Gold Bulk Up", 
              name:"Mass Gainer", 
              price:"₹ 1,999.00",
              add:"add card",
              but:"Buy Now"
            },
            {
               id:"2",
               im:[im2], 
               mydes:"Nutrabay Mega Mass", 
               name:"Weight Gainer",
               price:"₹ 999.00",
               add:"add card",
               but:"Buy Now"
            },
            {
              id:"3",
              im:[im3], 
              mydes:"Labrada Muscle", 
              name:"Mass Gainer", 
              price:"₹ 1,149.00",
              add:"add card",
              but:"Buy Now"
            },
            {
              id:"4",
              im:[im4], 
              mydes:"Optimum Nutrition (on) Serious", 
              name:"Mass Weight Gainer Powder", 
              price:"₹ 999.00",
              add:"add card",
              but:"Buy Now"
            },
            {
              id:"5",
              im:[im5], 
              mydes:"Kevin Levrone Anabolic", 
              name:"Mass Gainer", 
              price:"₹ 3,299.00",
              add:"add card",
              but:"Buy Now"
            },
          ]
  return (
    <> 
    <h1 style={{color: "red", fontSize: "40px", textAlign: "center", marginTop: "20px", fontWeight: "bold"}}>

            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}>

                Mass Gainer
            </ScrollFloat>
          
          </h1>
               <div style={{display:"flex"}}>
                    <MassGainer2 Mydata={Props} />
                </div>

    </>
  )
}

export default MassGainer1