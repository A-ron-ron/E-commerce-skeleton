import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context';
import { HomeSty } from '../component';

export function Home(props) {

    const {allProducts} = useContext(Context)
    const Category = props.match.params.category

    return (
      <>
      {Category?
        <HomeSty.Container>
          {allProducts.map((product) => (
            product.category === Category?
            <HomeSty.LI key={product._id}>
              <HomeSty.Product>
                <Link to={'/product/' + product._id}>
                  <HomeSty.Image
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <HomeSty.Name>
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </HomeSty.Name>
                <HomeSty.Price>${product.price}</HomeSty.Price>
                <HomeSty.Rating>
                </HomeSty.Rating>
              </HomeSty.Product>
            </HomeSty.LI>
            :
            <></>
          ))}
        </HomeSty.Container>
      :
      <HomeSty.Container>
      {allProducts.map((product) => (
        <HomeSty.LI key={product._id}>
          <HomeSty.Product>
            <Link to={'/product/' + product._id}>
              <HomeSty.Image
                src={product.image}
                alt="product"
              />
            </Link>
            <HomeSty.Name>
              <Link to={'/product/' + product._id}>{product.name}</Link>
            </HomeSty.Name>
            <HomeSty.Price>${product.price}</HomeSty.Price>
            <HomeSty.Rating>
            </HomeSty.Rating>
          </HomeSty.Product>
        </HomeSty.LI>
      ))}
    </HomeSty.Container>}
    </>
    );
}

export default Home;