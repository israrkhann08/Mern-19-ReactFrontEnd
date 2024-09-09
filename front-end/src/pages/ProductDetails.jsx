import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const x = useParams();
    console.log(x.id);
    
  return (
    <div>ProductDetails: {x.id}</div>
  )
}

export default ProductDetails