import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Product(){
    return (
        <>
        <nav>
        <img src="cake.jpg" alt="" className="logo" />
        <h1 className="name">Party Toast</h1>
        <NavLink to="/product/1" exact>
        Product
        </NavLink>
        <NavLink to="/" exact>
        Home
        </NavLink>
        </nav>
        </>
    )
}