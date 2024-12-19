import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <h2>Cart page</h2>
      <Link to={`/`}>Products</Link>
    </div>
  )
}

export default Cart
