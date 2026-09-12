// import React from 'react'

 function Button({ text, className = "bg-white text-blue-800 rounded-2xl hover:bg-blue-500 hover:text-white" }) {
  return (
   
      <button className={`  px-4  m-5    py-1 ${className}`}>
        {text}
      </button>
  
  )
}
export default Button;