import React from 'react'
import Routes from './Routes'
import { useEffect, useState } from 'react'

export default function Produccts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
        fetchProducts();
  },[]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
        <h2>This is Products Components</h2>
        <Routes></Routes> <br />
        <h2>Fetch API Using Use Effect </h2>
       
       {products && products.map(data => {
             <div>
                 <p>{data.id}</p>
                 <p>{data.title}</p>
                 <p>{data.description}</p>
             </div>
       })}
       


    </div>
  )
}
