import React from 'react'
import './Child.css'
import { useNavigate } from 'react-router-dom'

const Child = ({Mydata}) => {

  let usenavi = useNavigate()
  
  let okk=()=>{
    usenavi('/products')
  }
  return (
    <>
    {
    Mydata.map((e)=>(

      <div className="card" onClick={okk}>
                <img src={e.im} alt="product" />
                <h2>{e.mydes}</h2>
                <h3>{e.name}</h3>
                <p className="price">{e.price}</p>
            </div>
      ))}


      
    </>
  )
}

export default Child
