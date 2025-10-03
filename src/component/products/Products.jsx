
import { use } from 'react';
import Product from '../Product';
import '../products.css'
const Products = ({productPromise}) => {
    const products = use(productPromise);
    console.log(products)

    return (
        <div>
            <h3>Products : {products.length}</h3>
           <div className='products-container'>
           {
                products.map(product => (
                    <Product key={product.id} product={product} />
                  ))
                  
        }  
            </div> 
        </div>
                
 )

}

export default Products;