import { client } from '../../src/client'
import React, { useState ,useEffect} from 'react';
import {useParams , NavLink} from 'react-router-dom'
import marked from 'marked';
export default function ProductDetails(){
    const {slug} =useParams();
    const [ProductDetails,setProductsDetails]=useState([]);
    const [ProductDetailsUrl,setProductsDetailsUrl]=useState('');
    const [desc,Setdesc]=useState('');
    
    useEffect(()=>{
        // console.log(slug)
        client.getEntries({
          'content_type': 'product',
          'slug':{slug},

        })
        .then((response)=>{
          setProductsDetails(response.items[0].fields)
            setProductsDetailsUrl(response.items[0].fields.productImage.fields.file.url);
            console.log(ProductDetails.description);
            Setdesc(marked(response.items[0].fields.description));
      
        
        })
      
        .catch(console.error)
      },[])
// console.log(ProductDetails.description);
    return (
        <div className="productContainer">
<div className="productImg">
   
        
    <NavLink to="/" exact>
    <h5 className="productpglink">Home{" > "}{slug} </h5>
        
        </NavLink>
       
    <img src={ProductDetailsUrl} alt="" className="prodImg" />
</div>


<div className="productContent">

    <h2 className="productTitle">{ProductDetails.title}</h2>
    <h1 className="productPrice"><sup className="rupee">₹</sup> {ProductDetails.price}</h1>
    <h4 className="productTitle"> Inclusive of all taxes</h4>
        <hr></hr>

    <section className="productDesc" dangerouslySetInnerHTML={{ __html:desc}} />
      
 

</div>

</div>
    )
}