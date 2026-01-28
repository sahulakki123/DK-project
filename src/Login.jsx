import React, { useState } from "react";
import "./Log.css";
import { useNavigate } from "react-router-dom";
import ElectricBorder from './Library/ElectricBorder'
import Galaxy from './Library/Galaxy';

const Rform = () => {


      let navigate=useNavigate()

      let [email, setemail] = useState("")
      let [pass, setpass] = useState("")
   
   

      let submitform = (e) => {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem("users")) || []

        let existuser = users.find((e)=>{
          return e.email == email
        })
        if (!existuser){
          alert("Please signup first")
          return
        }
        if (pass !=existuser.pass ){
          alert("Invalid Password")
          return
        }
        localStorage.setItem("useremail", email)
        alert("Login Successfull")
        navigate("/home")
      }
      

  const NextPage = () => {
        navigate("/Signup");
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
 



      <form className="rform" onSubmit={submitform}>
        <h1 className="font-bold text-white font-serif flex text-2xl ml-30">Log In</h1>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="pass" value={pass} onChange={(e)=>{setpass(e.target.value)}} placeholder="Enter your password" required />
        </div>

        <button type="submit" className=" bg-amber-500 hover:bg-amber-600 text-white">Submit</button>
        <h2>Don't have an account? <h2 onClick={NextPage}>Signup</h2>  </h2>
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
  )
}

export default Rform;
