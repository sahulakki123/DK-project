import React, { useState } from 'react'

const Bookingform = () => {

    let [form, setform] = useState({
        username:"",
        number:"",
        productName:"",
        quantity:"",
        deliveryAddress:""

    })

    let handlchange=(e)=>{
        setform({ ...formData, [e.target.name]: e.target.value })
    }
  return (
    <>
        <form action="">
            Enter Name <input type="text"  name='username' value={form.username} onChange={handlchange}/>
            Enter Number <input type="text" name='number' value={form.number} onChange={handlchange} />
            Enter product Name <input type="text" name='productName' value={form.productName} onChange={handlchange} />
            Enter quantity <input type="text" name='quantity' value={form.quantity} onChange={handlchange} />
            Enter deliveryAddress <input type="text" name='deliveryAddress' value={form.deliveryAddress} onChange={handlchange} />
        </form>

    </>
  )
}

export default Bookingform