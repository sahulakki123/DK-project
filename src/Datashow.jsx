import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Antigravity from './Library/Antigravity';

const Datashow = () => {

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

    let [data, setdata]= useState([])
    let [editid, seteditid]= useState(null)

    let FetchData = ()=>{
        let api = 'http://localhost:3000/protein'

        axios.get(api).then( (res)=>{
          console.log(res.data);
          let data = res.data
          let finaldata = data.filter((e)=>{
            return e.loggedinuser == localStorage.getItem("useremail")
          })
          setdata(finaldata)
          
        }).catch( (err)=>{
            console.log(err);
            
        })

    }

    useEffect(()=>{
       FetchData()
    }, [])

    let Deletedata=(id)=>{
        let api = `http://localhost:3000/protein/${id}`
        axios.delete(api).then(()=>{
            FetchData()
            alert("Data Delete")
        })

    }

    let showform=(e)=>{

      seteditid(e.id)
      setform({
            username:e.username,
            number:e.number,
            productName:e.productName,
            quantity:e.quantity,
            deliveryAddress:e.deliveryAddress

      })
    }
    let handlesubmit=(e)=>{
    e.preventDefault()
    let loggedemail = localStorage.getItem("useremail")
     let api=`http://localhost:3000/protein/${editid}`
     axios.put(api, {...form, loggedinuser:loggedemail}).then((e)=>{
      FetchData()
      seteditid(null)
      alert("Data Updated")
     })
    }
  return (
    <>
<div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center cursor-pointer">My Order List</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-lg rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 border">User Name</th>
              <th className="p-3 border">Mobile</th>
              <th className="p-3 border">Product</th>
              <th className="p-3 border">Qty</th>
              <th className="p-3 border">City</th>
              <th className="p-3 border">Edit</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map((e) => (
                <tr key={e.id} className="text-center hover:bg-gray-100 transition">     
                  <td className="p-2 border">{e.username}</td>
                  <td className="p-2 border">{e.number}</td>
                  <td className="p-2 border">{e.productName}</td>
                  <td className="p-2 border">{e.quantity}</td>
                  <td className="p-2 border">{e.deliveryAddress}</td>
                  <td className="p-2 border"><button onClick={()=>{showform(e)}} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer">Edit</button></td>
                  <td className="p-2 border"><button onClick={() => Deletedata(e.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer">Delete</button> </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
            { editid && (
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

        <h2 className="text-2xl font-bold text-center text-white">🛒 Update Form</h2>

        <input type="text" name="username" placeholder="Enter Name" required value={form.username} onChange={handlchange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"/>

        <input type="text" name="number" placeholder="Enter Mobile Number" value={form.number} onChange={handlchange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-white "/>

        <input type="text" name="productName" placeholder="Enter Product Name" value={form.productName} onChange={handlchange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"/>

        <input type="number" name="quantity" placeholder="Enter Quantity" value={form.quantity} onChange={handlchange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-white "/>

        <textarea name="deliveryAddress" placeholder="Enter Delivery Address" value={form.deliveryAddress} onChange={handlchange} className="w-full p-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 text-white" />

        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition duration-300" >
        Update Now
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
            )}
    </>
  )
}

export default Datashow