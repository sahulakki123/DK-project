import React from "react";
import "./Order.css";
import im1 from '../assets/Mnt.webp'
import im2 from '../assets/mnt2.webp'
import im3 from '../assets/mnt3.webp'
import im4 from '../assets/mnt4.webp'
import im5 from '../assets/mnt5.webp'
const ProductPage = () => {
  return (
    <div className="product-page">
      {/* LEFT IMAGE SECTION */}
      <div className="left-section">
        <div className="main-image">
          <img
            src={im1} height="450px" width="50px"
            alt="product"
          />
        </div>

        <div className="thumbnail-row">
          <img src={im1} alt="" />
          <img src={im2} alt="" />
          <img src={im3} alt="" />
          <img src={im4} alt="" />
          <img src={im5} alt="" />
        </div>
      </div>

      {/* RIGHT DETAILS SECTION */}
      <div className="right-section">
        <h1 className="title">
         Muscle Tech Nitro-Tech Whey Protein, 1.81kg (4lbs), Milk Chocolate,
         30g Protein, 3g creatine monohydrate, 6.7g BCAA, ultimate muscle building
         formula, increase strength & performance
        </h1>


        <div className="rating">
          ⭐ 4.6 <span>(1.7k Ratings)</span>
        </div>

        <div className="price-box">
          <span className="price">₹2,899.00</span>
          <span className="old">₹3,350.00</span>
          <span className="off">30% off</span>
        </div>

        <p className="tax">Inclusive all Taxes</p>

       


        <div className="btn-row">
          <button className="cart-btn">ADD TO CART</button>
          <button className="buy-btn">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
