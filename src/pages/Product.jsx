import React from 'react'
import { useState } from 'react';

import macbook from "../assets/macbook.jfif";
import product3 from "../assets/product3.jfif";
import product2 from "../assets/product2.jfif";
import product1 from "../assets/product1.jpg";

import M1 from "../assets/M1.jfif";
import M2 from "../assets/M2.jfif";
import M3 from "../assets/M3.jfif";
import M4 from "../assets/M4.jfif";

import A1 from "../assets/A1.jfif";
import A2 from "../assets/A2.jfif";
import A3 from "../assets/A3.jfif";
import A4 from "../assets/A4.jfif";

import W1 from "../assets/W1.jfif"
import W2 from "../assets/W2.jfif"
import W3 from "../assets/W3.jfif"
import W4 from "../assets/W4.jfif"


function Product({ setCart }) {

  const [selectedCategory, setSelectedCategory] = useState("");

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


          {/* ================= Laptops ================= */}

          {selectedCategory === "Laptops" && (

            <>

              {/* Laptop 1 */}

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

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "MacBook Air M2",
                          price: "$999",
                          image: macbook,
                          description: "Powerful laptop for work and study."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>


              {/* Laptop 2 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={product3}
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

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "Dell XPS 13",
                          price: "$1199",
                          image: product3,
                          description: "Premium performance for professionals."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>


              {/* Laptop 3 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={product2}
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

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "HP Spectre",
                          price: "$1099",
                          image: product2,
                          description: "Elegant design with powerful performance."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>


              {/* Laptop 4 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={product1}
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

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "Lenovo ThinkPad",
                          price: "$899",
                          image: product1,
                          description: "Reliable technology for everyday work."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </>

          )}


          {/* ================= Phones ================= */}

          {selectedCategory === "Phones" && (

            <>

              {/* Phone 1 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={M1}
                    alt="iPhone 15"
                    className="max-h-44 object-contain"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-semibold">
                    iPhone 15
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Powerful performance with an advanced camera and premium design.
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-4">
                    $799
                  </p>

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "iPhone 15",
                          price: "$799",
                          image: M1,
                          description:
                            "Powerful performance with an advanced camera and premium design."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>


              {/* Phone 2 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={M2}
                    alt="Samsung Galaxy S24"
                    className="max-h-44 object-contain"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-semibold">
                    Samsung Galaxy S24
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Premium Android smartphone with powerful performance and display.
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-4">
                    $899
                  </p>

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "Samsung Galaxy S24",
                          price: "$899",
                          image: M2,
                          description:
                            "Premium Android smartphone with powerful performance and display."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>


              {/* Phone 3 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={M3}
                    alt="Google Pixel 9"
                    className="max-h-44 object-contain"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-semibold">
                    Google Pixel 9
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Smart AI-powered smartphone with an excellent camera experience.
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-4">
                    $799
                  </p>

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "Google Pixel 9",
                          price: "$799",
                          image: M3,
                          description:
                            "Smart AI-powered smartphone with an excellent camera experience."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>


              {/* Phone 4 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={M4}
                    alt="OnePlus 12"
                    className="max-h-44 object-contain"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-semibold">
                    OnePlus 12
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Fast and powerful smartphone with a smooth display and modern design.
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-4">
                    $749
                  </p>

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "OnePlus 12",
                          price: "$749",
                          image: M4,
                          description:
                            "Fast and powerful smartphone with a smooth display and modern design."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </>

          )}


          {/* ================= Audio ================= */}

          {selectedCategory === "Audio" && (

            <>

              {/* Audio 1 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={A1}
                    alt="Sony WH-1000XM5"
                    className="max-h-44 object-contain"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-semibold">
                    Sony WH-1000XM5
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Premium wireless headphones with immersive sound and noise cancellation.
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-4">
                    $399
                  </p>

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "Sony WH-1000XM5",
                          price: "$399",
                          image: A1,
                          description:
                            "Premium wireless headphones with immersive sound and noise cancellation."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>


              {/* Audio 2 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={A2}
                    alt="Apple AirPods Pro"
                    className="max-h-44 object-contain"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-semibold">
                    Apple AirPods Pro
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Compact wireless earbuds with clear sound and active noise cancellation.
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-4">
                    $249
                  </p>

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "Apple AirPods Pro",
                          price: "$249",
                          image: A2,
                          description:
                            "Compact wireless earbuds with clear sound and active noise cancellation."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>


              {/* Audio 3 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={A3}
                    alt="JBL Flip 6"
                    className="max-h-44 object-contain"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-semibold">
                    JBL Flip 6
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Portable Bluetooth speaker with powerful sound for everyday listening.
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-4">
                    $129
                  </p>

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "JBL Flip 6",
                          price: "$129",
                          image: A3,
                          description:
                            "Portable Bluetooth speaker with powerful sound for everyday listening."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>


              {/* Audio 4 */}

              <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <div className="h-52 flex items-center justify-center bg-gray-50">

                  <img
                    src={A4}
                    alt="Anker Soundcore Motion+"
                    className="max-h-44 object-contain"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-semibold">
                    Anker Soundcore Motion+
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Powerful portable speaker with rich sound and a modern design.
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-4">
                    $99
                  </p>

                  <button
                    onClick={() =>
                      setCart((prev) => [
                        ...prev,
                        {
                          name: "Anker Soundcore Motion+",
                          price: "$99",
                          image: A4,
                          description:
                            "Powerful portable speaker with rich sound and a modern design."
                        }
                      ])
                    }
                    className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </>

          )}


          {/* ================= Wearables ================= */}

{selectedCategory === "Wearables" && (

  <>

    {/* Wearable 1 */}

    <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <div className="h-52 flex items-center justify-center bg-gray-50">

        <img
          src={W1}
          alt="Apple Watch Series 10"
          className="max-h-44 object-contain"
        />

      </div>

      <div className="p-5">

        <h3 className="text-xl font-semibold">
          Apple Watch Series 10
        </h3>

        <p className="text-gray-500 mt-2">
          Stylish smartwatch with advanced health and fitness features.
        </p>

        <p className="text-blue-600 font-bold text-lg mt-4">
          $399
        </p>

        <button
          onClick={() =>
            setCart((prev) => [
              ...prev,
              {
                name: "Apple Watch Series 10",
                price: "$399",
                image: W1,
                description:
                  "Stylish smartwatch with advanced health and fitness features."
              }
            ])
          }
          className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>

      </div>

    </div>


    {/* Wearable 2 */}

    <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <div className="h-52 flex items-center justify-center bg-gray-50">

        <img
          src={W2}
          alt="Samsung Galaxy Watch 7"
          className="max-h-44 object-contain"
        />

      </div>

      <div className="p-5">

        <h3 className="text-xl font-semibold">
          Samsung Galaxy Watch 7
        </h3>

        <p className="text-gray-500 mt-2">
          Smartwatch with health tracking, fitness tools, and a bright display.
        </p>

        <p className="text-blue-600 font-bold text-lg mt-4">
          $299
        </p>

        <button
          onClick={() =>
            setCart((prev) => [
              ...prev,
              {
                name: "Samsung Galaxy Watch 7",
                price: "$299",
                image: W2,
                description:
                  "Smartwatch with health tracking, fitness tools, and a bright display."
              }
            ])
          }
          className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>

      </div>

    </div>


    {/* Wearable 3 */}

    <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <div className="h-52 flex items-center justify-center bg-gray-50">

        <img
          src={W3}
          alt="Google Pixel Watch 3"
          className="max-h-44 object-contain"
        />

      </div>

      <div className="p-5">

        <h3 className="text-xl font-semibold">
          Google Pixel Watch 3
        </h3>

        <p className="text-gray-500 mt-2">
          Modern smartwatch designed for fitness, health, and everyday use.
        </p>

        <p className="text-blue-600 font-bold text-lg mt-4">
          $349
        </p>

        <button
          onClick={() =>
            setCart((prev) => [
              ...prev,
              {
                name: "Google Pixel Watch 3",
                price: "$349",
                image: W3,
                description:
                  "Modern smartwatch designed for fitness, health, and everyday use."
              }
            ])
          }
          className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>

      </div>

    </div>


    {/* Wearable 4 */}

    <div className="border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <div className="h-52 flex items-center justify-center bg-gray-50">

        <img
          src={W4}
          alt="Fitbit Charge 6"
          className="max-h-44 object-contain"
        />

      </div>

      <div className="p-5">

        <h3 className="text-xl font-semibold">
          Fitbit Charge 6
        </h3>

        <p className="text-gray-500 mt-2">
          Fitness tracker with health monitoring and activity tracking features.
        </p>

        <p className="text-blue-600 font-bold text-lg mt-4">
          $159
        </p>

        <button
          onClick={() =>
            setCart((prev) => [
              ...prev,
              {
                name: "Fitbit Charge 6",
                price: "$159",
                image: W4,
                description:
                  "Fitness tracker with health monitoring and activity tracking features."
              }
            ])
          }
          className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>

      </div>

    </div>

  </>

)}

        </div>

      </section>

    </div>

  )
}

export default Product;