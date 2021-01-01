import React, {useState, useContext, useEffect} from 'react';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import { ProductComp } from '../../component'


function Product(props) {

  const [product, setProduct] = useState('')
  const { allProducts, setCartItems, setFaveItems } = useContext(Context)
  const ID = props.match.params.id

  useEffect(() => {
    allProducts.map(item => {
      if(item._id === ID) {
        setProduct(item)
      }
    })
  }, []);


  const AddToFave = () => {
    setFaveItems( prevItems => [...prevItems, ID] )
  }

  const handleAddToCart = () => {
    setCartItems( prevItems => [...prevItems, ID] )
  }


  return (
    <div>
    <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
        <ProductComp.Container>
          <ProductComp.ImageCont>
            <ProductComp.Image src={process.env.PUBLIC_URL + product.image} alt="product" />
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
                Qty:{' '}
                <select
                  value={product.qty}
                  // onChange={(e) => {1
                  //   setQty(e.target.value);
                  // }}
                >
                  {/* {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))} */}
                </select>
              </ProductComp.Li>
              <ProductComp.Li>
                  <ProductComp.ButtonP onClick={() => AddToFave()}>
                    Add to Fave
                  </ProductComp.ButtonP>
              </ProductComp.Li>
              <ProductComp.Li>
                {product.countInStock > 0 && (
                  <ProductComp.ButtonP onClick={() => handleAddToCart()}>
                    Add to Cart
                  </ProductComp.ButtonP>
                )}
              </ProductComp.Li>
            </ProductComp.List>
          </ProductComp.Action>
        </ProductComp.Container>
  </div>
)
}

export default Product;