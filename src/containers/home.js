import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import { Home } from '../component';

export function HomeContainer() {

    const {allProducts} = useContext(Context)

    return (
        <Home.Container>
          {allProducts.map((product) => (
            <Home.LI key={product._id}>
              <Home.Product>
                <Link to={'/product/' + product._id}>
                  <Home.Image
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <Home.Name>
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </Home.Name>
                <Home.Price>${product.price}</Home.Price>
                <Home.Rating>
                </Home.Rating>
              </Home.Product>
            </Home.LI>
          ))}
        </Home.Container>
    );
}