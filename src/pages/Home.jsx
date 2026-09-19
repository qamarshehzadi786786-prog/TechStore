import Hero from '../components/Hero.jsx'
import ProductCard from '../components/ProductCard.jsx';
import image from "../assets/macbook.jfif"
import smartphone from "../assets/smartphone.jpg"
import earbuds from "../assets/earbuds.jfif"
import watch from "../assets/watch.jfif"
import { FaBoxOpen, FaTags, FaHeadset } from "react-icons/fa";
import { useEffect, useState } from 'react';
import TechFinder from "../components/TechFinder.jsx";
// import { useState } from 'react';
import techVideo from "../assets/1.mp4";
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
 const [products, setProducts] = useState(0);
const [brands, setBrands] = useState(0);

useEffect(() => {
  if (products >= 10000) return;

  const timer = setTimeout(() => {
    setProducts((prev) => prev + 100);
  }, 10);

  return () => clearTimeout(timer);
}, [products]);

useEffect(() => {
  if (brands >= 50) return;

  const timer = setTimeout(() => {
    setBrands((prev) => prev + 1);
  }, 30);

  return () => clearTimeout(timer);
}, [brands]);
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


{/* choose */}
<div className="text-center mt-10">
  <h1 className="text-4xl">WHY CHOOSE TECHSTORE?</h1>
<p className="">We make technology simple, reliable, and accessible for everyone.</p>
<div className="bg-blue-800 w-full h-70 mt-10 flex align-center justify-center items-center  gap-90 text-white">
 <div className="text-center flex flex-col items-center ">
  <FaBoxOpen size={30} />
    <h1>{products}+</h1>
    <p>Products Available</p>
  </div>
  
   <div className="text-center flex flex-col items-center ">
    <FaTags size={30} />
    <h1>{brands}+</h1>
    <p>Trusted Brands</p>
  </div>

  <div className="text-center flex flex-col items-center ">
    <FaHeadset size={30} />
    <h1>24/7</h1>
    <p>Customer Support</p>
  </div>

</div>
</div>

<TechFinder />
      


<section className="w-full py-12 bg-gray-50 text-center">

  <h2 className="text-3xl font-bold text-blue-800 mb-8">
    Explore the World of Technology
  </h2>

<div className="w-full">
  <video
    className="w-full h-[500px] object-cover "
    src={techVideo}
    autoPlay
    muted
    loop
    controls
  ></video>
</div>

</section>



    </div>
  )
}
export default Home;