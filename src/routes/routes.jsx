import { Route, Routes } from 'react-router-dom'
import React from "react";
import Layouts from '../Layouts/layouts'
import Coomponent from '../components/coomponent/coomponent'
import Home from '../components/homeComponent/Home'
import Metals from '../components/metals/metals'
import Base from '../components/base/base'
import Slabs from '../components/slabs/slabs'
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layouts />}>
                <Route index element={<Home />} />
                <Route path="/component" element={<Coomponent />} />
                <Route path="/metals" element={<Metals />} />
                <Route path="/base" element={<Base />} />
                <Route path="/slabs" element={<Slabs />} />
            </Route>
        </Routes>
                
    )
}

export default Router
