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

const Home = () => {


  let Props=[
    {
      id:"1",
      im:[im1], 
      mydes:"MuscleTech Nitro", 
      name:"Tech Whey Protein", 
      price:"₹ 2,899.00"
    },
    {
       id:"2",
       im:[im2], 
       mydes:"MuscleTech Nitro Tech", 
       name:"Ripped Whey Protein",
       price:"₹ 3,149.00"
    },
    {
      id:"3",
      im:[im3], 
      mydes:"My Protein Impact", 
      name:"Whey Protein", 
      price:"₹ 3,099.00"
    },
    {
      id:"4",
      im:[im4], 
      mydes:"Labrada Nutrition", 
      name:"100% Whey Protein", 
      price:"₹ 2,699.00"
    },
    {
      id:"5",
      im:[im5], 
      mydes:"ATOM Whey", 
      name:"Protein", 
      price:"₹ 2,165.00"
    },
  ]


  


  return (
    <>
      <img src={im} alt="" height="100%" width="100%"/>
        <h1 style={{color: "red", fontSize: "40px", textAlign: "center", marginTop: "20px", fontWeight: "bold"}}>Whey Proteins</h1>


        <div style={{display:"flex"}}>
          <Child Mydata={Props}/>
        </div>
        <Creatines1/>
        <Pre_Workout1/>
        <Peanut1/>
        
    </>
  )
}

export default Home