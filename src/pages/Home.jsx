import Hero from '../components/Hero.jsx'
import ProductCard from '../components/ProductCard.jsx';
import image from "../assets/macbook.jfif"
import smartphone from "../assets/smartphone.jpg"
import earbuds from "../assets/earbuds.jfif"
import watch from "../assets/watch.jfif"
// import { useState } from 'react';

const Products=[ {
    id: 1,
    image: image,
    name: "MacBook Air M2",
    description:
      "Lightweight laptop with powerful performance for work, study, and everyday use.",
    price: "$999",
  },

  {
    id: 2,
    image: smartphone,
    name: "iPhone 15",
    description:
      "Modern smartphone with powerful performance, great camera, and smooth display.",
    price: "$799",
  },

  {
    id: 3,
    image: earbuds,
    name: "Sony Earbuds",
    description:
      "Premium wireless earbuds with clear sound and comfortable all-day listening.",
    price: "$349",
  },

   {
    id: 4,
    image: watch,
    name: "Apple Watch",
    description: "Smart watch with fitness tracking, notifications, and everyday convenience.",
    price: "$399",
  },
]


 function Home({setCartCount,setCart}) {
  return (
    <div>
      <Hero/>
      <h1 className="text-3xl font-bold text-center mb-8 mt-10">
  Featured Products
</h1>
<p className="text-center text-gray-600 mb-8">
  Explore our latest tech products designed to make your everyday life smarter and easier.
</p>
      <div className="flex gap-25 justify-center ">

  {Products.map((product) => (
    <ProductCard
      key={product.id}
      image={product.image}
      name={product.name}
      description={product.description}
      price={product.price}
      setCartCount={setCartCount}
      setCart={setCart}
    />
  ))}

</div>
      
    </div>
  )
}
export default Home;