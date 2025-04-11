import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Navbar2 from '../components/Navbar/Navbar2'
import Footer from '../components/Footer/Footer'
import Home from '../components/homeComponent/Home'
import Coomponent from '../components/coomponent/coomponent'
import Menu from '../components/menu/menu'

function Layouts() {
    const { pathname } = useLocation()

    return (
        <div>
            {pathname === '/' ? <Navbar2/> : <Navbar/>}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/component" element={<Coomponent />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>

            <Footer/>
        </div>
    )
}

export default Layouts
