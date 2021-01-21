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
        console.log(slug,'slug')
        client.getEntries({
          'content_type': 'product',
        

        })
        .then((response)=>{
            var temp=response.items;
            var response=[]
            for(var i in temp){
                if(temp[i].fields.slug==slug){
                response=(temp[i])
                }
            }
            
          setProductsDetails(response.fields)
            setProductsDetailsUrl(response.fields.productImage.fields.file.url);
            // console.log(ProductDetails.description);
            Setdesc(marked(response.fields.description));
            // console.log(response);
        
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