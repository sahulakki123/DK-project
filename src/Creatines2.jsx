import React from 'react'
import './Child.css'

const Creatines2 = ({Mydata}) => {
  return (
    <>
    {
    Mydata.map((e)=>(

      <div className="card">
                <img src={e.im} alt="product" />
                <h2>{e.mydes}</h2>
                <h3>{e.name}</h3>
                <p className="price">{e.price}</p>
            </div>
      ))}


      
    </>
  )
}

export default Creatines2