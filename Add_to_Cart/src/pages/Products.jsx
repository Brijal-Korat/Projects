import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {


  let obj = [
    {
      id: 1,
      name: "Shirt",
      price: 100
    },
    {
      id: 2,
      name: "Jacket",
      price: 150
    },
    {
      id: 3,
      name: "Formal",
      price: 200
    },
    {
      id: 4,
      name: "Casual",
      price: 250
    }
  ]

  return (
    <div align="center">
      <h2>Products page</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Quantity</th>
            <th>Cart</th>
          </tr>
        </thead>
        <tbody>
          {
            obj.map((pr, index) => {
              return (
                <tr key={pr.index}>
                  <td>{++index}</td>
                  <td>{pr.name}</td>
                  <td>{pr.price}</td>
                  <td><input type="number" defaultValue={1} /></td>
                  <td><button>Add to cart</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <Link to={`/cart`}>Cart</Link>
    </div>
  )
}

export default Products;
