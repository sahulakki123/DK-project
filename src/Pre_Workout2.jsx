import React from 'react'
import './Child.css'

const Pre_Workout2 = ({Mydata}) => {
  return (
    <>
    {
    Mydata.map((e)=>(

      <div className="card">
                <img src={e.im} alt="product" />
                <h2>{e.mydes}</h2>
                <h3>{e.name}</h3>
                <p className="price">{e.price}</p>
                <div className="btn-area">
                  <button className="btn1">{e.add}</button>
                  <button className="btn2">{e.but}</button>
              </div>
            </div>
      ))}  
    </>
  )
}


export default Pre_Workout2