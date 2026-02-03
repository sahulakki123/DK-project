import React from 'react'
import './C.css'
import { useNavigate } from 'react-router-dom'

const Multivitamins2 = ({Mydata}) => {

   const navigate = useNavigate();

  const NextPage = (product) => {
    const isLoggedin = localStorage.getItem("isLoggedin") === "true";

    if (!isLoggedin) {
      alert("Please login or signup first");
      navigate("/signup");
    } else {
      navigate("/bookingform", {
        state: {
          productName: product.mydes,
          price: product.price
        }
      });
    }
  };
  return (
    <>
        {Mydata.map((e) => (
        <div className="card" key={e.id}>
          <img src={e.im} alt="product" />
          <h2>{e.mydes}</h2>
          <h3>{e.name}</h3>
          <p className="price">₹ {e.price}</p>
          <div className="btn-area">
                  <button className="btn1">{e.add}</button>
                  <button className="btn2" onClick={() => NextPage(e)}>{e.but}</button>
              </div>
        </div>
      ))}
    </>
  )
}

export default Multivitamins2