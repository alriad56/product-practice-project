
import { use } from 'react';
import Product from '../Product';
import { useState } from 'react';
import '../products.css'
const Products = ({productPromise}) => {
    const [cart,setCart] = useState([])
    const products = use(productPromise);

    const handleAddToCart = (product) => {
        const newCart = [...cart,product];
        setCart(newCart)
    }
    //console.log(products)

    return (
        <div>
            <h3>Products : {products.length}</h3>
            <p>Added to cart : {cart.length}</p>
           <div className='products-container'>
           {
                products.map(product => (
                    <Product key={product.id} handleAddToCart={handleAddToCart} product={product} />
                  ))
                  
        }  
            </div> 
        </div>
                
 )

}

export default Products;