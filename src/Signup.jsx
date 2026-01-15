import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Log.css"
import ElectricBorder from './ElectricBorder'

const Rform = () => {

    let [formData, setformdata] = useState({
        name: "",
        num: "",
        email: "",
        pass: "",
        cpass: "",
      });

    let handlchange = (e) => {
        setformdata({ ...formData, [e.target.name]: e.target.value });
      };

    let submitform = (e) => {
        e.preventDefault();

    if(formData.name==""){
        alert("name empty")
        e.preventDefault();
      }

    else if(formData.num==""){
        alert("number empty")
        e.preventDefault();
      }

    else if(formData.email==""){
        alert("email empty")
        e.preventDefault();
      }

    else if(formData.pass==""){
        alert("pass empty")
        e.preventDefault();
      }

    else if(formData.cpass==""){
        alert("cpass empty")
        e.preventDefault();
      }

    else{
        localStorage.setItem("Name",formData.name)
        localStorage.setItem("num",formData.num)
        localStorage.setItem("email",formData.email)
        localStorage.setItem("pass",formData.pass)
        localStorage.setItem("cpass",formData.cpass)

        navigate("/Login");
      }}

      const navigate=useNavigate()
  




  return (
    <>
 <div className="form-container">
<ElectricBorder
  color="#f80a0aff"
  speed={1}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 16 }}>
  <div>
    <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
      

        <form className="modern-form" onSubmit={submitform}>
          <h2>Signup</h2>

          <label>Enter Name</label>
          <input type="text" name="name" value={formData.name} onChange={handlchange} />

          <label>Enter Number</label>
          <input type="text" name="num" value={formData.num} onChange={handlchange} />

          <label>Enter Email</label>
          <input type="text" name="email" value={formData.email} onChange={handlchange} />

          <label>Enter Password</label>
          <input type="password" name="pass" value={formData.pass} onChange={handlchange} />

          <label>Enter Confirm Password</label>
          <input type="password" name="cpass" value={formData.cpass} onChange={handlchange} />

          <button type="submit">Submit</button>
        </form>
    </p>
  </div>
</ElectricBorder>
      </div>
    </>
  );
};

export default Rform;
