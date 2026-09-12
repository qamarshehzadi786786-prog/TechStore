// import React from 'react'
import Button from "./Button";

 function Header() {
  return (
    <div className="bg-blue-800 text-white flex items-center  justify-between gap-10 h-12 align-center  ">
      <h1 className="ml-8">💻 TechStore</h1>
     <div className="flex items-center gap-10">
    <a href="/">Home</a>
    <a href="#">Product</a>
    <a href="#">About Us</a>
    <a href="#">Contact Us</a>
  </div>
     
      <Button text="Shop Now"/>
      
      
    </div>
    
  )
}
export default Header;
