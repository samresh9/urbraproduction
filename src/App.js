import React from 'react'
import {HomePage, About, Map, Contact} from './View'
import Layout from './Layout/Layout'
import  { Route , Routes } from 'react-router-dom'


const App = () => {
    return (
        <div>

                <Routes>
                <Route  exact path="/" element={<Layout ><HomePage /> </Layout>} />
                <Route exact path="/about" element={<Layout ><About /></Layout>}  />
                <Route exact path="/map" element={<Layout ><Map /></Layout>}  />
                <Route exact path="/contact" element={<Layout ><Contact /></Layout>}  />

                </Routes>
        </div>
    )
}

export default App
