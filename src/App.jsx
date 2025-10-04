import { Suspense } from 'react';
import './App.css'
import Products from './component/products/Products'

const productPromise = fetch('products.json').then(res => res.json());

function App() {


  return (
    <>
     
     <h3>Buy Awesome Product</h3>
      <Suspense fallback={<h3>Phones are coming...</h3>}>
        <Products productPromise={productPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
