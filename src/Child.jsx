import React from 'react'
import './Child.css'

const Child = ({ im, mydes, name, price }) => {
  return (
    <>
            <div className="card">
                <img src={im} alt="product" />
                <h2>{mydes}</h2>
                <h3>{name}</h3>
                <p className="price">{price}</p>
            </div>
    </>
  )
}

export default Child
