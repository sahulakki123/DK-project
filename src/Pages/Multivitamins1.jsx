import React from 'react'


import ScrollFloat from '../Library/ScrollFloat';

import im1 from '../assets/odm1.avif'
import im2 from '../assets/odm.avif' 
import im3 from '../assets/msm.avif'
import im4 from '../assets/50p.avif'
import im5 from '../assets/odmt.avif'
import Multivitamins2 from './Multivitamins2';

const Multivitamins1 = () => {

        let Props=[
            {
              id:"1",
              im:[im1], 
              mydes:"One Daily Multivitamin", 
              name:"Improves Energy, Immunity & Overall Health", 
              price:"₹ 409.00",
              add:"add card",
              but:"Buy Now"
            },
            {
               id:"2",
               im:[im2], 
               mydes:"One Daily Multivitamin", 
               name:"mproves Energy, Immunity, Skin and Over",
               price:"₹ 399.00",
               add:"add card",
               but:"Buy Now"
            },
            {
              id:"3",
              im:[im3], 
              mydes:"Mens Staminol Max", 
              name:"Testosterone Booster for Long-Lasting Perf", 
              price:"₹ 1499.00",
              add:"add card",
              but:"Buy Now"
            },
            {
              id:"4",
              im:[im4], 
              mydes:"50 Plus Multivitamin", 
              name:"For Healthy Heart, Prostate Support Cedarwood, and Nutmeg Oil.", 
              price:"₹ 1299.00",
              add:"add card",
              but:"Buy Now"
            },
            {
              id:"5",
              im:[im5], 
              mydes:"Triple Strength Fish Oil", 
              name:"Builds Muscle Strength & Inhaling certain scent molecules ", 
              price:"₹ 899.00",
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

                Multivitamins | Fish Oil
            </ScrollFloat>
          
          </h1>
               <div style={{display:"flex"}}>
                    <Multivitamins2 Mydata={Props} />
                </div>

    </>
    
  )
}

export default Multivitamins1