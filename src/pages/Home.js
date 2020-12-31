import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function Home(props) {
 
  const {allProducts} = useContext(Context)

  return (
    <>
      <ul className="filter">
        <li>
          <form>
            <input
              name="searchKeyword"
            />
            <button type="submit">Search</button>
          </form>
        </li>
        <li>
          Sort By{' '}
          <select name="sortOrder">
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
      </ul>
        <ul className="products">
          {allProducts.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                </div>
              </div>
            </li>
          ))}
        </ul>
      )
    </>
  );
}
export default Home;
