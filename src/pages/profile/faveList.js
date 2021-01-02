import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { CartSty } from '../../component'



function FaveList(props) {

const { allProducts, faveItems, setFaveItems } = useContext(Context)
const [faveObjects, setFaveObjects] = useState([])

const RemoveFromList = (removed) => {
  setFaveItems(prevItems => prevItems.filter(item => item !== removed._id));
  setFaveObjects(prevItems => prevItems.filter(item => item._id !== removed._id));
}


useEffect(() => {
  faveItems.map(item => {
    allProducts.map(product => {
    if(item === product._id) {
      setFaveObjects( prevItems => [...prevItems, product])
    }
  })})
}, []);


  return <CartSty.Container>
  <CartSty.ListContainer>
    <CartSty.List>
      <CartSty.LI>
        <CartSty.Text>
          Favourites List
        </CartSty.Text>
        <CartSty.Text>
          Price
        </CartSty.Text>
      </CartSty.LI>
      {
        faveObjects.length === 0 ?
          <CartSty.Text>
            You have no favourites
        </CartSty.Text>
          :
          faveObjects.map(item =>
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
                  <CartSty.Button type="button" className="button" onClick={() => RemoveFromList(item)} >
                    Delete
                  </CartSty.Button>
                </div>
              </CartSty.Name>
              <CartSty.Price>
                ${item.price}
              </CartSty.Price>
            </CartSty.LI>
          )
      }
    </CartSty.List>

  </CartSty.ListContainer>
</CartSty.Container>
}

export default FaveList;