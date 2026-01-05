import React, { useState } from "react";
import "./Log.css";
import { useNavigate } from "react-router-dom";
import ElectricBorder from './ElectricBorder'



const Rform = () => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

    const navigate=useNavigate()


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
           
       
  }


  const submitform = (e) => {

  if(localStorage.getItem("email")==formData.email && localStorage.getItem("pass")==formData.pass){

    e.preventDefault();
        navigate("/home");
  }
  else{
       alert("invalid")
       e.preventDefault()
  }
    
  }


  


  return (

<>

<div className="form-container">
<ElectricBorder
  color="#f80a0aff"
  speed={1}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 16 }}
>
  <div>
    <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
 



      <form className="rform" onSubmit={submitform}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="pass" value={formData.pass} onChange={handleChange} placeholder="Enter your password" required />
        </div>

        <button type="submit">Submit</button>
      </form>
          </p>
  </div>
</ElectricBorder>
    </div>
    </>
  )
}

export default Rform;
