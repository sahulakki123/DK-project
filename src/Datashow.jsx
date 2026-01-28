import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Datashow = () => {

    let [data, setdata]= useState([])

    let FetchData = ()=>{
        let api = 'http://localhost:3000/protein'

        axios.get(api).then( (res)=>{
          console.log(res.data);
          let data = res.data
          let finaldata = data.filter((e)=>{
            return e.loggedinuser == localStorage.getItem("useremail")
          })
          setdata(finaldata)
          
        })

        axios.get(api).then( (res)=>{
            console.log(res.data);
            setdata(res.data)
            
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
                  <td className="p-2 border"><button onClick={() => Deletedata(e.id)}className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer">
                      Delete
                    </button> </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>

    </>
  )
}

export default Datashow