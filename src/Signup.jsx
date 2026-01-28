import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Log.css"
import ElectricBorder from './Library/ElectricBorder'
import Galaxy from './Library/Galaxy';
const Rform = () => {

    let [form, setformdata] = useState({
        name: "",
        num: "",
        email: "",
        pass: "",
        cpass: "",
      });

    let handlchange = (e) => {
        setformdata({ ...form, [e.target.name]: e.target.value });
      };

    let submitform = (e) => {
        e.preventDefault();
        let valid=true

    if(form.name.trim()==""){
        alert("Please enter name")
        valid=false
      }

    else if( isNaN(form.num)){
        alert("Please enter number only")
        valid=false
      }
      if(valid){
        let users = JSON.parse( localStorage.getItem('users')) || []
        let alredyuser = users.find( (e)=>{
          return e.email == form.email
        })
        if(alredyuser){
          alert("Alredy a user")
          return
        }
        users.push(form)
        localStorage.setItem('users', JSON.stringify(users))
        alert("Sinup succesfull")
        navigate('/login')
      }
    }

       const navigate=useNavigate()
  
            const NextPage = () => {
      navigate("/Login");

    };




  return (
    <>
     <div className="form-container" style={{ width: '100%', height: '800px', position: 'relative', backgroundColor: "black" }}>

<Galaxy 
    mouseRepulsion
    mouseInteraction
    density={1}
    glowIntensity={0.3}
    saturation={0}
    hueShift={140}
    twinkleIntensity={0.3}
    rotationSpeed={0.1}
    repulsionStrength={2}
    autoCenterRepulsion={0}
    starSpeed={0.5}
    speed={1}
/>
    <ElectricBorder
        color="#f80a0aff"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}>
      <div>
        <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
      

        <form className="modern-form" onSubmit={submitform}>
          <h1 className="font-bold text-white font-serif flex text-2xl ml-22">Sign up Form</h1>

          <label>Enter Name</label>
          <input type="text" name="name" value={form.name} onChange={handlchange} />

          <label>Enter Number</label>
          <input type="text" name="num" value={form.num} onChange={handlchange} />

          <label>Enter Email</label>
          <input type="text" name="email" value={form.email} onChange={handlchange} />

          <label>Enter Password</label>
          <input type="password" name="pass" value={form.pass} onChange={handlchange} />

          <label>Enter Confirm Password</label>
          <input type="password" name="cpass" value={form.cpass} onChange={handlchange} />

          <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white">Submit</button>
          <h2>Already have an account <h2 onClick={NextPage} className="cursor-pointer text-black">Log In</h2></h2>
          
        </form>
    </p>
  </div>
</ElectricBorder>
<Galaxy 
    mouseRepulsion
    mouseInteraction
    density={1}
    glowIntensity={0.3}
    saturation={0}
    hueShift={140}
    twinkleIntensity={0.3}
    rotationSpeed={0.1}
    repulsionStrength={2}
    autoCenterRepulsion={0}
    starSpeed={0.5}
    speed={1}
/>
      </div>
    </>
  );
};

export default Rform;
