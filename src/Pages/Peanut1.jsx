import React from 'react'
import Peanut2 from './Peanut2'

import im1 from '../assets/wcpeanut.avif'
import im2 from '../assets/mc peanut.avif' 
import im3 from '../assets/cc Peanut.avif'
import im4 from '../assets/o p peanut.webp'
import im5 from '../assets/os peanut.webp'

const Peanut1 = () => {

  let Props=[
    {
      id:"1",
      im:[im1], 
      mydes:"White Chocolate ", 
      name:"Crispy Peanut Butter", 
      price:"₹ 330.00"
    },
    {
       id:"2",
       im:[im2], 
       mydes:"Mango Creamy", 
       name:"Peanut Butter Flavour",
       price:"₹ 330.00"
    },
    {
      id:"3",
      im:[im3], 
      mydes:"Chocolate Crunchy", 
      name:"Peanut Butter", 
      price:"₹ 313.00"
    },
    {
      id:"4",
      im:[im4], 
      mydes:"Oats pre", 
      name:"workout 1 kg", 
      price:"₹ 630.00"
    },
    {
      id:"5",
      im:[im5], 
      mydes:"OATS SHAHI", 
      name:"RABDI", 
      price:"₹ 616.00"
    },
  ]


  


  return (
    <>
        <h1 style={{color: "red", fontSize: "40px", textAlign: "center", marginTop: "20px", fontWeight: "bold"}}>Peanut Butter</h1>

        <div style={{display:"flex"}}>
            <Peanut2 Mydata={Props}/>
        </div>
    </>
  )
}
export default Peanut1