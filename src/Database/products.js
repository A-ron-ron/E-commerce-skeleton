import d1 from "../images/soap/d1.jpg"
import d2 from "../images/soap/d2.jpg"
import d3 from "../images/soap/d3.jpg"
import d4 from "../images/soap/d4.jpg"
import d5 from "../images/soap/d5.jpg"
import d6 from "../images/soap/d6.jpg"

const ProductsDB =[
    {
        _id: '1',
        name: 'Pink Soap',
        category: 'Bar',
        countInStock: 43,
        image: d1,
        price: 60,
        rating: 4.5,
        numReviews: 0,
        description:"It's Soap!"
      },
      {
        _id: '2',
        name: 'Blue Soap',
        category: 'Hand',
        countInStock: 43,
        image: d2,
        price: 50,
        rating: 4.2,
        numReviews: 0,
        description:"It's Soap!",
        reviews: []
      },
      {
        _id: '3',
        name: 'White Soap',
        category: 'Face',
        countInStock: 43,
        image: d3,
        price: 70,
        rating: 4.5,
        numReviews: 0,
        description:"It's Soap!",
        reviews: []
      }, 
      {
        _id: '4',
        name: 'Black Soap',
        category: 'Bar',
        countInStock: 43,
        image: d4,
        price: 70,
        rating: 4.5,
        numReviews: 0,
        description:"It's Soap!",
        reviews: []
      },
      {
        _id: '5',
        name: 'Orange Soap',
        category: 'Face',
        countInStock: 43,
        image: d5,
        price: 70,
        rating: 4.5,
        numReviews: 0,
        description:"It's Soap!",
        reviews: []
      },
      {
        _id: '6',
        name: 'Yellow Soap',
        category: 'Hand',
        countInStock: 43,
        image: d6,
        price: 70,
        rating: 4.5,
        numReviews: 0,
        description:"It's Soap!",
        reviews: []
      },
]

export default ProductsDB
