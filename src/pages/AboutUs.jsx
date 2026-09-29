import React from "react";
import heroo from "../assets/heroo.jfif";

function AboutUs() {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}

 {/* ================= HERO ================= */}

<section
  className="relative  min-h-[600px] bg-slate-950 text-white px-6 overflow-hidden"
  style={{
    backgroundImage: `url(${heroo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-slate-950/60"></div>

  <div className="relative max-w-6xl mx-auto pt-24">

    <div className="max-w-2xl text-left">

      <p className="text-blue-200 uppercase tracking-[4px] text-sm font-semibold">
        About TechStore
      </p>

      <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
        Technology That Fits Your Life
      </h1>

      <p className="text-blue-100 text-lg leading-8 mt-6">
        We make it easier to discover modern technology,
        explore trusted products, and find devices that match
        the way you work, learn, create, and connect.
      </p>

    </div>

  </div>

</section>


      {/* ================= OUR STORY ================= */}

      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>

            <p className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold">
              Our Story
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Built Around Better Technology Choices
            </h2>

            <p className="text-gray-600 leading-7 mt-6">
              TechStore was created with a simple idea: finding the
              right technology should not be complicated.
            </p>

            <p className="text-gray-600 leading-7 mt-4">
              From powerful laptops and smartphones to audio devices
              and smart wearables, our platform brings different
              technology categories together in one place.
            </p>

            <p className="text-gray-600 leading-7 mt-4">
              Our goal is to provide a simple shopping experience
              where customers can explore products and make informed
              choices.
            </p>

          </div>


          <div className="bg-blue-50 rounded-3xl p-10">

            <div className="text-7xl text-center">
              💻
            </div>

            <h3 className="text-2xl font-bold text-center mt-6">
              Technology. Simpler.
            </h3>

            <p className="text-gray-600 text-center leading-7 mt-4">
              Discover, explore, and choose technology designed
              for modern everyday needs.
            </p>

          </div>

        </div>

      </section>


      {/* ================= MISSION & VISION ================= */}

      <section className="bg-gray-50 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold">
              What Drives Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Our Mission & Vision
            </h2>

          </div>


          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission */}

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                🎯
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                To make modern technology easier to discover by
                providing a simple, organized, and user-friendly
                shopping experience.
              </p>

            </div>


            {/* Vision */}

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                🚀
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                To create a technology platform where people can
                easily explore products and discover solutions that
                support their everyday digital lives.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= OUR VALUES ================= */}

      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold">
              Our Values
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              What We Believe In
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              These principles guide the way we build our platform
              and present technology to our customers.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


            {/* Value 1 */}

            <div className="border border-gray-200 rounded-2xl p-7 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">

              <div className="text-4xl">
                💡
              </div>

              <h3 className="text-xl font-bold mt-5">
                Innovation
              </h3>

              <p className="text-gray-500 leading-6 mt-3">
                We stay connected with modern technology and new ideas.
              </p>

            </div>


            {/* Value 2 */}

            <div className="border border-gray-200 rounded-2xl p-7 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">

              <div className="text-4xl">
                🤝
              </div>

              <h3 className="text-xl font-bold mt-5">
                Trust
              </h3>

              <p className="text-gray-500 leading-6 mt-3">
                We focus on creating a clear and reliable shopping experience.
              </p>

            </div>


            {/* Value 3 */}

            <div className="border border-gray-200 rounded-2xl p-7 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">

              <div className="text-4xl">
                ✨
              </div>

              <h3 className="text-xl font-bold mt-5">
                Simplicity
              </h3>

              <p className="text-gray-500 leading-6 mt-3">
                We believe technology shopping should feel simple and easy.
              </p>

            </div>


            {/* Value 4 */}

            <div className="border border-gray-200 rounded-2xl p-7 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">

              <div className="text-4xl">
                ❤️
              </div>

              <h3 className="text-xl font-bold mt-5">
                Customer Focus
              </h3>

              <p className="text-gray-500 leading-6 mt-3">
                We design our experience around the needs of our customers.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY TECHSTORE ================= */}

      <section className="bg-blue-800 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-200 uppercase tracking-[3px] text-sm font-semibold">
              Why TechStore
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              More Than Just a Technology Store
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-8">


            <div className="text-center">

              <div className="text-5xl">
                🔎
              </div>

              <h3 className="text-xl font-bold mt-5">
                Easy Discovery
              </h3>

              <p className="text-blue-100 leading-7 mt-3">
                Explore different technology categories from one place.
              </p>

            </div>


            <div className="text-center">

              <div className="text-5xl">
                📦
              </div>

              <h3 className="text-xl font-bold mt-5">
                Diverse Products
              </h3>

              <p className="text-blue-100 leading-7 mt-3">
                Discover laptops, phones, audio devices, and wearables.
              </p>

            </div>


            <div className="text-center">

              <div className="text-5xl">
                ⚡
              </div>

              <h3 className="text-xl font-bold mt-5">
                Simple Experience
              </h3>

              <p className="text-blue-100 leading-7 mt-3">
                Browse products and add your favorite technology to your cart.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-20 px-6 text-center">

        <div className="max-w-3xl mx-auto">

          <p className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold">
            Explore TechStore
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Find Technology Made for You
          </h2>

          <p className="text-gray-600 leading-7 mt-5">
            Explore our product collection and discover technology
            for work, entertainment, creativity, and everyday life.
          </p>

          <a
            href="/product"
            className="inline-block mt-7 bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Explore Products
          </a>

        </div>

      </section>

    </div>
  );
}

export default AboutUs;