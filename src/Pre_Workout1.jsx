import React from 'react'

import im1 from './assets/bmp.webp'
import im2 from './assets/mpw.webp' 
import im3 from './assets/tbd.webp'
import im4 from './assets/dp.avif'
import Pre_Workout2 from './Pre_Workout2'

import ScrollFloat from './Library/ScrollFloat';

const Pre_Workout1 = () => {
     let Props=[
        {
          id:"1",
          im:[im1], 
          mydes:"Big Muscles", 
          name:"Pre Workout", 
          price:"₹ 1,199.00",
          add:"add card",
          but:"Buy Now"
        },
        {
           id:"2",
           im:[im2], 
           mydes:"MuscleBlaze Pre", 
           name:"Workout WrathX",
           price:"₹ 1,099.00",
           add:"add card",
           but:"Buy Now"
        },
        {
          id:"3",
          im:[im3], 
          mydes:"The Big Daddy", 
          name:"Pre Workout", 
          price:"₹ 1,399.00",
          add:"add card",
          but:"Buy Now"
        },
        {
          id:"4",
          im:[im4], 
          mydes:"Dynamite", 
          name:"Pre-Workout", 
          price:"₹ 749.00",
          add:"add card",
          but:"Buy Now"
        }
 
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
  Pre Workout
</ScrollFloat>
          
          
          
          
          </h1>

        <div style={{display:"flex"}}>
          <Pre_Workout2 Mydata={Props}/>
        </div>
    </>
  )
}

export default Pre_Workout1