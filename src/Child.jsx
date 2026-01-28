import React from 'react'
import './Child.css'
import { useNavigate } from 'react-router-dom'

const Child = ({Mydata}) => {

  const navigate = useNavigate();

  const NextPage = () => {
    navigate("/bookingform");
  };

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
                  <button className="btn2"onClick={NextPage}>{e.but}</button>
              </div>
        </div>
      ))}
    </>
  )
}

export default Child
