import React from 'react'
import Creatines2 from './Creatines2'


import im1 from './assets/mp1.webp'
import im2 from './assets/on1.webp' 
import im3 from './assets/mc.webp'
import im4 from './assets/wpm.webp'
import im5 from './assets/gnc.webp'

import ScrollFloat from './Library/ScrollFloat';

const Creatines1 = () => {
  let Props=[
    {
      id:"1",
      im:[im1], 
      mydes:"MuscleTech Platinum", 
      name:"100% Creatine", 
      price:"₹ 429.00",
      add:"add card",
      but:"Buy Now"
    },
    {
       id:"2",
       im:[im2], 
       mydes:"ON Micronised", 
       name:"Creatine Powder",
       price:"₹ 489.00",
       add:"add card",
      but:"Buy Now"
    },
    {
      id:"3",
      im:[im3], 
      mydes:"MuscleBlaze Creatine", 
      name:"Monohydrate CreAMP", 
      price:"₹ 489.00",
      add:"add card",
      but:"Buy Now"
    },
    {
      id:"4",
      im:[im4], 
      mydes:"Wellcore - Pure Micronised", 
      name:"Creatine Monohydrate", 
      price:"₹ 569.00",
      add:"add card",
      but:"Buy Now"
    },
    {
      id:"5",
      im:[im5], 
      mydes:"GNC Creatine", 
      name:"Monohydrate", 
      price:"₹ 439.00",
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
  stagger={0.03}
>
  Creatines
</ScrollFloat>
          </h1>

        <div style={{display:"flex"}}>
          <Creatines2 Mydata={Props}/>
        </div>
        
    </>
  )
}

export default Creatines1