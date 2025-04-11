import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Navbar2 from '../components/Navbar/Navbar2'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'

function Layouts() {
    const pathname = window.location.pathname
    console.log(pathname)

  return (
    <div>
        {pathname === '/' ? 
        <Navbar2/> : <Navbar/>
        }
        
      <Outlet/>
      
      <Footer/> 
    </div>
  )
}

export default Layouts
