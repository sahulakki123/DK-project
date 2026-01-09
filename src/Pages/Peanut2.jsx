import React from 'react'
import './C.css'

const Peanut2 = ({ Mydata }) => {
  return (
    <>
      {Mydata.map((e) => (
        <div className="card" key={e.id}>
          <img src={e.im} alt="product" />
          <h2>{e.mydes}</h2>
          <h3>{e.name}</h3>
          <p className="price">{e.price}</p>
        </div>
      ))}
    </>
  )
}

export default Peanut2
