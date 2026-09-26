import React from 'react'
import { useState } from 'react';
import macbook from "../assets/macbook.jfif";


function Product() {

  const [selectedCategory, setSelectedCategory] = useState("Laptops");

  return (

    <div>

      <section>

        <h1 className='text-center text-4xl pt-5'>
          Explore Our Technology
        </h1>

        <p className='text-center pt-2'>
          Discover powerful laptops, smartphones, audio devices,
          and smart technology designed for your everyday life.
        </p>


        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10'>

          {/* Laptops */}
          <div
            onClick={() => setSelectedCategory("Laptops")}
            className="border rounded-2xl p-6 text-center hover:bg-blue-800 hover:text-white cursor-pointer"
          >
            <div className="text-4xl">💻</div>

            <h3 className="font-semibold text-xl mt-4">
              Laptops
            </h3>

            <p className="text-gray-500 mt-2 hover:text-white">
              Powerful devices for work.
            </p>
          </div>


          {/* Phones */}
          <div
            onClick={() => setSelectedCategory("Phones")}
            className="border rounded-2xl p-6 text-center hover:bg-blue-800 hover:text-white cursor-pointer"
          >
            <div className="text-4xl">📱</div>

            <h3 className="font-semibold text-xl mt-4">
              Phones
            </h3>

            <p className="text-gray-500 mt-2">
              Smart technology on the go.
            </p>
          </div>


          {/* Audio */}
          <div
            onClick={() => setSelectedCategory("Audio")}
            className="border rounded-2xl p-6 text-center hover:bg-blue-800 hover:text-white cursor-pointer"
          >
            <div className="text-4xl">🎧</div>

            <h3 className="font-semibold text-xl mt-4">
              Audio
            </h3>

            <p className="text-gray-500 mt-2">
              Immersive sound everywhere.
            </p>
          </div>


          {/* Wearables */}
          <div
            onClick={() => setSelectedCategory("Wearables")}
            className="border rounded-2xl p-6 text-center hover:bg-blue-800 hover:text-white cursor-pointer"
          >
            <div className="text-4xl">⌚</div>

            <h3 className="font-semibold text-xl mt-4">
              Wearables
            </h3>

            <p className="text-gray-500 mt-2 hover:text-white">
              Smart technology for you.
            </p>
          </div>

        </div>

      </section>


      {/* Products Section */}

      <section className="py-16 px-6">

        <h2 className="text-3xl font-bold text-center">
          Explore Our Products
        </h2>

        <p className="text-gray-600 text-center mt-3">
          Choose from our latest technology and find the perfect product for you.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">


          {/* Product 1 */}

          <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="h-52 flex items-center justify-center bg-gray-50">

              <img
                src={macbook}
                alt="MacBook Air M2"
                className="max-h-44 object-contain"
              />

            </div>


            <div className="p-5">

              <h3 className="text-xl font-semibold">
                MacBook Air M2
              </h3>

              <p className="text-gray-500 mt-2">
                Powerful laptop for work and study.
              </p>

              <p className="text-blue-600 font-bold text-lg mt-4">
                $999
              </p>

            </div>

          </div>


          {/* Product 2 */}

          <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="h-52 flex items-center justify-center bg-gray-50">

              <img
                src={macbook}
                alt="Dell XPS 13"
                className="max-h-44 object-contain"
              />

            </div>


            <div className="p-5">

              <h3 className="text-xl font-semibold">
                Dell XPS 13
              </h3>

              <p className="text-gray-500 mt-2">
                Premium performance for professionals.
              </p>

              <p className="text-blue-600 font-bold text-lg mt-4">
                $1199
              </p>

            </div>

          </div>


          {/* Product 3 */}

          <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="h-52 flex items-center justify-center bg-gray-50">

              <img
                src={macbook}
                alt="HP Spectre"
                className="max-h-44 object-contain"
              />

            </div>


            <div className="p-5">

              <h3 className="text-xl font-semibold">
                HP Spectre
              </h3>

              <p className="text-gray-500 mt-2">
                Elegant design with powerful performance.
              </p>

              <p className="text-blue-600 font-bold text-lg mt-4">
                $1099
              </p>

            </div>

          </div>


          {/* Product 4 */}

          <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="h-52 flex items-center justify-center bg-gray-50">

              <img
                src={macbook}
                alt="Lenovo ThinkPad"
                className="max-h-44 object-contain"
              />

            </div>


            <div className="p-5">

              <h3 className="text-xl font-semibold">
                Lenovo ThinkPad
              </h3>

              <p className="text-gray-500 mt-2">
                Reliable technology for everyday work.
              </p>

              <p className="text-blue-600 font-bold text-lg mt-4">
                $899
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  )
}

export default Product;