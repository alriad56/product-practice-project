
import { use } from 'react';
import Product from '../Product';

const Products = ({productPromise}) => {
    const products = use(productPromise);
    console.log(products)

    return (
        <div>
            <h3>Products : {products.length}</h3>
            {
                products.map(product => (
                    <Product key={product.id} product={product} />
                  ))
                  
        }   
        </div>
                
 )

}

export default Products;