import React from 'react';
import './product.css'
const Product = ({ product }) => {
    const {image} = product;
 console.log(product);

  return (
    <div className='card phone'>
         <img src={image} alt="" /> 
      <h4>{product.name}</h4>
      <p>Price: ${product.price}</p>
    </div>
  )
}

export default Product;
