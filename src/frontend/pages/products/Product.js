import React, {useState, useContext, useEffect} from 'react';
import { Context } from '../../context';
import { Link } from 'react-router-dom';
import { ProductComp } from '../../component'


function Product(props) {

  const [product, setProduct] = useState('');
  const [listed, setListed] = useState(false)
  const [Qty, setQty] = useState(1)
  const { allProducts, setCartItems, setFaveItems, faveItems, userData } = useContext(Context)
  const ID = props.match.params.id

  useEffect(() => {
    allProducts.map(item => {
      if(item._id === ID) {
        setProduct(item)
      }
    })
    faveItems.map(item =>
      {if(item === ID){
        setListed(true)
      }})
  }, []);

  const AddToFave = (id) => {
   setListed(true)
   setFaveItems(prevItems => [...prevItems, id]);
      }

  const RemoveFave = (id) => {
    setFaveItems(prevItems => prevItems.filter(item => item !== id));
    setListed(false)
        }

  const handleAddToCart = () => {
    const cartObj = {
      id: ID,
      qty: Qty
    };
    setCartItems( prevItems => [...prevItems, cartObj] )
  }


  return (
    <div>
    <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
    {product?
        <ProductComp.Container>
          <ProductComp.ImageCont>
            <ProductComp.Image src={product.image} alt="product" />
            <h2>{product.image}</h2>
          </ProductComp.ImageCont>
          <ProductComp.Details>
            <ProductComp.List>
              <ProductComp.Li>
                <ProductComp.Name>{product.name}</ProductComp.Name>
              </ProductComp.Li>
              <ProductComp.Li>
                <a href="#reviews">
                  reviews
                </a>
              </ProductComp.Li>
              <ProductComp.Li>
                Price: <b>${product.price}</b>
              </ProductComp.Li>
              <ProductComp.Li>
                Description:
                <div>{product.description}</div>
              </ProductComp.Li>
            </ProductComp.List>
          </ProductComp.Details>
          <ProductComp.Action>
            <ProductComp.List>
              <ProductComp.Li>Price: ${product.price}</ProductComp.Li>
              <ProductComp.Li>
                Status:
                {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
              </ProductComp.Li>
              <ProductComp.Li>
                Qty:
                <select
                  value={Qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </ProductComp.Li>

              {userData?
              <>
              <ProductComp.Li>
                {listed?
                  <ProductComp.ButtonP onClick={() => RemoveFave(product._id)}>
                    Remove From Fave List
                  </ProductComp.ButtonP> :
                  <ProductComp.ButtonP onClick={() => AddToFave(product._id)}>
                    Add to Fave
                  </ProductComp.ButtonP>
                  }
              </ProductComp.Li>
              <ProductComp.Li>
                {product.countInStock > 0 && (
                  <ProductComp.ButtonP onClick={() => handleAddToCart()}>
                    Add to Cart
                  </ProductComp.ButtonP>
                )}
              </ProductComp.Li>
              </>
              :
              <p>To make a purchase please <Link to="/signin/">sign In</Link> or <Link to="/register/">Register</Link></p>

}
            </ProductComp.List>
          </ProductComp.Action>
        </ProductComp.Container>
        :
        <h2>Product Not Found</h2>}
  </div>
)
}

export default Product;