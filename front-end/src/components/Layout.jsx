import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const XYZ = (props) => {
  return (
    <>
     <Navbar/>
    {props.children}
   
    <Footer/>
    </>
  )
}

export default XYZ