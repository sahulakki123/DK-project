import axios from 'axios'
import React, { useState } from 'react'
import Antigravity from './Library/Antigravity';

const Bookingform = () => {

    let [form, setform] = useState({
        username:"",
        number:"",
        productName:"",
        quantity:"",
        deliveryAddress:""

    })

    let handlchange=(e)=>{
        setform({ ...form, [e.target.name]: e.target.value })
    }

    let handlesubmit=(e)=>{
        e.preventDefault()
        let valid = true
        
        if(form.username.trim()==""){
            alert("Name Cannot be empty")
            valid=false
        }
        if(valid){
            let api="http://localhost:3000/protein"
            let loggedemail = localStorage.getItem("useremail")
            axios.post(api, {...form, loggedinuser:loggedemail}).then((e)=>{
                alert("Booking Confirmed")
            })
        }
    }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center  from-amber-100 to-orange-200 ml-100%" style={{ width: '100%', height: '400px', position: 'relative', backgroundColor:"black" }}>
        <Antigravity
    count={300}
    magnetRadius={6}
    ringRadius={7}
    waveSpeed={0.4}
    waveAmplitude={1}
    particleSize={1.5}
    lerpSpeed={0.05}
    color="#5227FF"
    autoAnimate
    particleVariance={1}
    rotationSpeed={0}
    depthFactor={1}
    pulseSpeed={3}
    particleShape="capsule"
    fieldStrength={10}
/>

      
      <form onSubmit={handlesubmit} className="bg-black p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4">

        <h2 className="text-2xl font-bold text-center text-white">🛒 Product Booking</h2>

        <input type="text" name="username" placeholder="Enter Name" required value={form.username} onChange={handlchange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"/>

        <input type="text" name="number" placeholder="Enter Mobile Number" value={form.number} onChange={handlchange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-white "/>

        <input type="text" name="productName" placeholder="Enter Product Name" value={form.productName} onChange={handlchange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"/>

        <input type="number" name="quantity" placeholder="Enter Quantity" value={form.quantity} onChange={handlchange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-white "/>

        <textarea name="deliveryAddress" placeholder="Enter Delivery Address" value={form.deliveryAddress} onChange={handlchange} className="w-full p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 text-white" />

        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition duration-300" >
          🚀 Book Now
        </button>
      </form>
              <Antigravity
    count={300}
    magnetRadius={6}
    ringRadius={7}
    waveSpeed={0.4}
    waveAmplitude={1}
    particleSize={1.5}
    lerpSpeed={0.05}
    color="#5227FF"
    autoAnimate
    particleVariance={1}
    rotationSpeed={0}
    depthFactor={1}
    pulseSpeed={3}
    particleShape="capsule"
    fieldStrength={10}
/>
    </div>
    </>
  )
}

export default Bookingform