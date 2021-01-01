import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../Context';



function Cart(props) {

const { allProducts, cartItems } = useContext(Context)
const [cartObjects, setCartObjects] = useState([])

useEffect(() => {
  cartItems.map(item => {
    allProducts.map(product => {
    if(item === product._id) {
      setCartObjects( prevItems => [...prevItems, product])
    }
  })})
}, []);

  return <div className="cart">
    {cartObjects.map((product) => (
      <ul key={Math.random()}>
      <h2>{product.name}</h2>
      <img src={product.image} alt="product" />
      <p>${product.price}</p>
      </ul>
    ))}
  </div>
}

export default Cart;