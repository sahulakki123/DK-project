import React from 'react'
import Peanut2 from './Peanut2'

import im1 from '../assets/wcpeanut.avif'
import im2 from '../assets/mc peanut.avif' 
import im3 from '../assets/cc Peanut.avif'
import im4 from '../assets/o p peanut.webp'
import im5 from '../assets/os peanut.webp'

import ScrollFloat from '../Library/ScrollFloat';

const Peanut1 = () => {

  let Props=[
    {
      id:"1",
      im:[im1], 
      mydes:"White Chocolate ", 
      name:"Crispy Peanut Butter", 
      price:"₹ 330.00",
      add:"add card",
      but:"Buy Now"
    },
    {
       id:"2",
       im:[im2], 
       mydes:"Mango Creamy", 
       name:"Peanut Butter Flavour",
       price:"₹ 330.00",
       add:"add card",
       but:"Buy Now"
    },
    {
      id:"3",
      im:[im3], 
      mydes:"Chocolate Crunchy", 
      name:"Peanut Butter", 
      price:"₹ 313.00",
      add:"add card",
      but:"Buy Now"
    },
    {
      id:"4",
      im:[im4], 
      mydes:"Oats pre", 
      name:"workout 1 kg", 
      price:"₹ 630.00",
      add:"add card",
      but:"Buy Now"
    },
    {
      id:"5",
      im:[im5], 
      mydes:"OATS SHAHI", 
      name:"RABDI", 
      price:"₹ 616.00",
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
  Peanut Butter
</ScrollFloat>
          
          </h1>

        <div style={{display:"flex"}}>
            <Peanut2 Mydata={Props}/>
        </div>
    </>
  )
}
export default Peanut1