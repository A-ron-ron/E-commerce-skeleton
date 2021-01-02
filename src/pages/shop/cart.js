import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { CartSty } from '../../component'



function Cart(props) {

const { allProducts, cartItems, setCartItems } = useContext(Context)
const [cartObjects, setCartObjects] = useState([])

const RemoveFromCart = (removed) => {
  setCartItems(prevItems => prevItems.filter(item => item.id !== removed._id));
  setCartObjects(prevItems => prevItems.filter(item => item._id !== removed._id));
}






const QtyChange = (id, Qty) => {

cartItems.map(item => {
  if (item._id === id){
    item.qty = Qty
  setCartItems(prevItems => prevItems.filter(prevItem => prevItem._id !== id));
  setCartItems(item);
  setCartObjects(prevItems => prevItems.filter(prevItem => prevItem._id !== id));
  setCartObjects(item);
}
})
}

console.log(cartObjects, cartItems)




useEffect(() => {
  cartItems.map(item => {
    allProducts.map(product => {
    if(item.id === product._id) {
      product.qty = item.qty;
      setCartObjects( prevItems => [...prevItems, product])
    }
  })})
}, []);



  return <CartSty.Container>
  <CartSty.ListContainer>
    <CartSty.List>
      <CartSty.LI>
        <CartSty.Text>
          Shopping Cart
        </CartSty.Text>
        <CartSty.Text>
          Price
        </CartSty.Text>
      </CartSty.LI>
      {
        cartObjects.length === 0 ?
          <CartSty.Text>
            Cart is empty
        </CartSty.Text>
          :
          cartObjects.map(item =>
            <CartSty.LI key={Math.random()}>
              <CartSty.ImageCont>
                <CartSty.Image src={item.image} alt="product" />
              </CartSty.ImageCont>
              <CartSty.Name>
                <div>
                  <Link to={"/product/" + item._id}>
                    {item.name}
                  </Link>
                </div>
                <div>
                  Qty:
                <select value={ item.qty } onChange={(Qty) => QtyChange(item._id, Qty)}>
                    {[...Array(item.countInStock).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                  </select>
                  <CartSty.Button type="button" className="button" onClick={() => RemoveFromCart(item)} >
                    Delete
                  </CartSty.Button>
                </div>
              </CartSty.Name>
              <CartSty.Price>
                ${item.price * item.qty}
              </CartSty.Price>
            </CartSty.LI>
          )
      }
    </CartSty.List>

  </CartSty.ListContainer>
  <CartSty.Action>
    {/* <CartSty.Text>
      Subtotal ( {cartObjects.reduce((a, b) => ({qty: a.qty + b.qty}))} items)
      :
       $ {cartObjects.reduce((a, c) => ({Price: a.price + (c.price * c.qty)}))}
    </CartSty.Text> */}
    <CartSty.Button disabled={cartObjects.length === 0}>
      Proceed to Checkout
    </CartSty.Button>

  </CartSty.Action>

</CartSty.Container>
}

export default Cart;