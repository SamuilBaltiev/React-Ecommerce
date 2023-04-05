import React from 'react'

import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Home from '../Home'
import Details from '../details/Details';




const pages = () => {
  return (
    <Router>
        <Header />
        <Routes >
            
            <Route exact path='/' element={<Home />} />
              

            <Route exact path='/cart/:id' element={<Details/>} />
             

        </Routes >
        <Footer />
    </Router>
  )
}

export default pages
