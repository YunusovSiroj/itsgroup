import { Route, Routes } from 'react-router-dom'
import React from "react";
import Layouts from '../Layouts/layouts'
import Coomponent from '../components/coomponent/coomponent'
import Home from '../components/homeComponent/Home'
import Menu from '../components/menu/menu'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path="/component" element={<Coomponent />} />
                {/* <Route path="/menu" element={<Menu />} /> */}
            </Route>
        </Routes>
                
    )
}

export default Router
