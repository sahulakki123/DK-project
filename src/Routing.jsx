import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import Offers from './Offers'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import Order from './Pages/Order'
import Creatines1 from './Creatines1'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='offers' element={<Offers/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='creatines' element={<Creatines1/>}/>
        <Route path="*" element={<h1>Error</h1>}/>

        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default Routing