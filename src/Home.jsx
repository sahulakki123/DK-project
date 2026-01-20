import React from 'react'
import im from './assets/Eveay.jpg'
import Child from './Child'

import im1 from './assets/Mnt.webp'
import im2 from './assets/mnt1.webp' 
import im3 from './assets/my p.webp'
import im4 from './assets/Ln.webp'
import im5 from './assets/awp.webp'
import Creatines1 from './Creatines1'
import Pre_Workout1 from './Pre_Workout1'
import Peanut1 from './Pages/Peanut1'


import ScrollFloat from './Library/ScrollFloat';
import Multivitamins1 from './Pages/Multivitamins1'
import MassGainer1 from './Pages/MassGainer1'


const Home = () => {


  let Props=[
    {
      id:"1",
      im:[im1], 
      mydes:"MuscleTech Nitro", 
      name:"Tech Whey Protein", 
      price:"₹ 2,899.00",
      add:"add card",
      but:"Buy Now"
    },
    {
       id:"2",
       im:[im2], 
       mydes:"MuscleTech Nitro Tech", 
       name:"Ripped Whey Protein",
       price:"₹ 3,149.00",
       add:"add card",
       but:"Buy Now"
    },
    {
      id:"3",
      im:[im3], 
      mydes:"My Protein Impact", 
      name:"Whey Protein", 
      price:"₹ 3,099.00",
      add:"add card",
      but:"Buy Now"
    },
    {
      id:"4",
      im:[im4], 
      mydes:"Labrada Nutrition", 
      name:"100% Whey Protein", 
      price:"₹ 2,699.00",
      add:"add card",
      but:"Buy Now"
    },
    {
      id:"5",
      im:[im5], 
      mydes:"ATOM Whey", 
      name:"Protein", 
      price:"₹ 2,165.00",
      add:"add card",
      but:"Buy Now"
    },
  ]


  


  return (
    <>
      <img src={im} alt="" height="100%" width="100%"/>
        <h1 style={{color: "red", fontSize: "40px", textAlign: "center", marginTop: "20px", fontWeight: "bold"}}>

          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}>
            Whey Proteins
          </ScrollFloat>
   
          </h1>
            <div style={{display:"flex"}}>
            <Child Mydata={Props}/>
          </div>
        <Creatines1/>
        <Pre_Workout1/>
        <Peanut1/>
        <Multivitamins1/>
        <MassGainer1/>
        
    </>
  )
}

export default Home