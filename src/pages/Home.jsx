import Hero from '../components/Hero.jsx'
import ProductCard from '../components/ProductCard.jsx';
import image from "../assets/macbook.jfif"
import smartphone from "../assets/smartphone.jpg"
import earbuds from "../assets/earbuds.jfif"


 function Home() {
  return (
    <div>
      <Hero/>
      <h1 className="text-3xl font-bold text-center mb-8 mt-10">
  Featured Products
</h1>
<p className="text-center text-gray-600 mb-8">
  Explore our latest tech products designed to make your everyday life smarter and easier.
</p>
      <div className="flex gap-35 justify-center flex-wrap">
 
  <ProductCard
  image={image}
  name="MacBook Air M2"
  description="Lightweight laptop with powerful performance for work, study, and everyday use."
  price="$999"
/>

<ProductCard
  image={smartphone}
  name="iPhone 15"
  description="Modern smartphone with powerful performance, great camera, and smooth display."
  price="$799"
/>

<ProductCard
  image={earbuds}
  name="Sony Earbuds"
  description="Premium wireless headphones with clear sound and comfortable all-day listening."
  price="$349"
/>
      </div>
      
    </div>
  )
}
export default Home;