import React from 'react'
import {useParams} from 'react-router-dom'
export default function Product(){
    const {slug} =useParams();
    return (
        <div className="gridItem">
        <img src="cake.jpg" alt="" className="gridImg"/>
        <h2 className="gridTitle">Glittery Birthday suprise {slug}</h2>
        <h1 className="gridPrice"><sup className="rupee">₹</sup> 100</h1>
    </div>
    )
}