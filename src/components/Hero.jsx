import image from "../assets/image.png"
import Button from "./Button";

 function Hero() {
  return (
    <div>
     <section className="w-full h-172 relative">
         <img className="absolute w-full h-full object-cover" src={image} alt="" />
         <div className="absolute">
            <h1 className=" mt-40 ml-10 text-5xl"> Your World of Technology</h1>
            <p className="ml-12 mt-2 max-w-xl">Discover the latest technology in one place. Shop premium laptops, smartphones, smart gadgets, accessories, and more, carefully selected to make your digital life smarter, easier, and more connected.</p>
            <Button text="Shop Products" className="bg-blue-800 text-white ml-12 hover:bg-white hover:text-blue-800"/>
                        <Button text="View Collection" className="bg-blue-800 text-white mr-120 hover:bg-white hover:text-blue-800"/>
         </div>
     </section>
    </div>
  )
}
export default Hero;