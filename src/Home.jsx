import React from 'react'
import im from './assets/Eveay.jpg'
import Child from './Child'

import im1 from './assets/Mnt.webp'
import im2 from './assets/mnt1.webp' 
import im3 from './assets/my p.webp'
import im4 from './assets/Ln.webp'

const Home = () => {
  return (
    <>
    <img src={im} alt="" height="100%" width="100%"/>
    <h1>Whey Proteins</h1>
    <div style={{display:"flex"}}>
      
      <Child im={im1} mydes="MuscleTech Nitro" name="Tech Whey Protein" price="₹ 2,899.00" />
      <Child im={im2} mydes="MuscleTech Nitro Tech" name="Ripped Whey Protein" price="₹ 3,149.00" />
      <Child im={im3} mydes="My Protein Impact" name="Whey Protein" price="₹ 3,099.00" />
      <Child im={im4} mydes="Labrada Nutrition" name="100% Whey Protein" price="₹ 2,699.00" />
      <Child im={im4} mydes="Labrada Nutrition" name="100% Whey Protein" price="₹ 2,699.00" />
    </div>
    </>
  )
}

export default Home