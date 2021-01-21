import React from 'react'
import {useParams , NavLink} from 'react-router-dom'

// import {useParams} from 'react-router-dom'
export default function Product(props){
    // const {slug} =useParams();
    return (
        <NavLink to={'/product/'+props.product.fields.slug} exact className="homea" >
        {/* <a  href={'/product/'+props.product.fields.slug}> */}
        <div className="gridItem"    >
            
        <img src={props.product.fields.productImage.fields.file.url}  alt={props.product.fields.productImage.fields.description} className="gridImg"/>
        <h2 className="gridTitle">{props.product.fields.title}</h2>
        <h1 className="gridPrice"><sup className="rupee">₹</sup> {props.product.fields.price}</h1>
    </div>
    {/* </a> */}
        </NavLink>

    )
}