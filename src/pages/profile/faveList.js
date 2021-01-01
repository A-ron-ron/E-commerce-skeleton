import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';



function FaveList(props) {

const { allProducts, faveItems } = useContext(Context)
const [faveObjects, setFaveObjects] = useState([])

useEffect(() => {
  faveItems.map(item => {
    allProducts.map(product => {
    if(item === product._id) {
      setFaveObjects( prevItems => [...prevItems, product])
    }
  })})
}, []);

  return <div className="cart">
    {faveObjects.map((product) => (
      <ul key={Math.random()}>
      <h2>{product.name}</h2>
      <img src={product.image} alt="product" />
      <p>${product.price}</p>
      </ul>
    ))}
  </div>
}

export default FaveList;