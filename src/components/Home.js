
import Product from './Product'
import { client } from '../../src/client'
import React, { useState ,useEffect} from 'react';
import { prettyDOM } from '@testing-library/react';
export default function Home(){
    const [products,setProducts]=useState([]);

    useEffect(()=>{
      client.getEntries({
        'content_type': 'product'
      })
      .then((response)=>{
        setProducts(response.items)
        console.log(response.items)
        
      })
      
      .catch(console.error)
    },[])

    return (
        <div className="grid">
            <div className="gridContainer">
            {products.map((product)=>{

           return(<Product product={product} key={product.fields.slug}   ></Product>)
            })}
           {/* <Product></Product>
           <Product></Product>
           <Product></Product>
           <Product></Product>
           <Product></Product>
           <Product></Product> */}

        </div>
        </div>
    )
}