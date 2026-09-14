// import React from 'react'
import Button from "./Button";
// import { useState } from "react";
import {FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";

 function Header({cartCount}) {
  // const [cartCount,setCartCount]=useState(0)
  return (
    <div className="bg-blue-800 text-white flex items-center  justify-between gap-10 h-12 align-center  ">
      <h1 className="ml-8">💻 TechStore</h1>
     <div className="flex items-center gap-10">
    <a href="/">Home</a>
    <a href="#">Product</a>
    <a href="#">About Us</a>
    <a href="#">Contact Us</a>
  </div>
     
    
  <div className="flex items-center gap-5 ">
    <div className="relative">
    <Link to="/cart">
  <FaShoppingCart size={30}/>
</Link>
   {cartCount > 0 && (
   <span className="absolute rounded-full bg-white text-blue-800 w-5 h-5 bottom-4 left-8 flex items-center justify-center">{cartCount}</span>
)}
    </div>
  <Button text="Shop Now"/>
  
</div>
       
      
    </div>
    
  )
}
export default Header;
