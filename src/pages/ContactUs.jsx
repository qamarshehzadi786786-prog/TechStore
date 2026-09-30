import React from "react";

function ContactUs() {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}

      <section className="relative  bg-slate-950 text-white py-40 px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto">

          <div className="max-w-2xl">

            <p className="text-blue-300 uppercase tracking-[4px] text-sm font-semibold">
              Contact TechStore
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
              Let’s Talk
              <span className="block text-blue-300 mt-2">
                Technology
              </span>
            </h1>

            <p className="text-blue-100 text-lg leading-8 mt-6">
              Have a question about our products or need help
              finding the right device? Our team is here to help.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT AREA ================= */}

      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">


          {/* ================= LEFT SIDE ================= */}

          <div>

            <p className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              We’d Love to Hear From You
            </h2>

            <p className="text-gray-600 leading-7 mt-5 max-w-lg">
              Whether you have a question about a product,
              need help with your order, or simply want to
              learn more about TechStore, feel free to contact us.
            </p>


            {/* CONTACT CARDS */}

            <div className="space-y-5 mt-10">


              {/* EMAIL */}

              <div className="flex items-center gap-5 p-5 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition">

                <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                  📧
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <h3 className="font-bold text-lg mt-1">
                    support@techstore.com
                  </h3>
                </div>

              </div>


              {/* PHONE */}

              <div className="flex items-center gap-5 p-5 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition">

                <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>

                  <h3 className="font-bold text-lg mt-1">
                    +92 300 1234567
                  </h3>
                </div>

              </div>


              {/* LOCATION */}

              <div className="flex items-center gap-5 p-5 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition">

                <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <h3 className="font-bold text-lg mt-1">
                    Pakistan
                  </h3>
                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT FORM ================= */}

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7 md:p-10 shadow-sm">

            <div className="mb-8">

              <p className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold">
                Send Message
              </p>

              <h2 className="text-3xl font-bold mt-3">
                How Can We Help?
              </h2>

            </div>


            <form className="space-y-5">


              {/* NAME */}

              <div>

                <label className="block text-sm font-semibold mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

              </div>


              {/* EMAIL */}

              <div>

                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

              </div>


              {/* SUBJECT */}

              <div>

                <label className="block text-sm font-semibold mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is your message about?"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

              </div>


              {/* MESSAGE */}

              <div>

                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                ></textarea>

              </div>


              {/* BUTTON */}

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300 shadow-md"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}

      <section className="bg-blue-800 text-white py-16 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-blue-200 uppercase tracking-[3px] text-sm font-semibold">
            Need Technology?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Find the Right Product for You
          </h2>

          <p className="text-blue-100 leading-7 mt-4 max-w-2xl mx-auto">
            Explore our collection of laptops, phones, audio
            devices, and wearables.
          </p>

          <a
            href="/product"
            className="inline-block mt-7 bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Products
          </a>

        </div>

      </section>




      {/* ================= QUICK HELP ================= */}

<section className="bg-gray-50 py-16 px-6">

  <div className="max-w-6xl mx-auto text-center">

    <p className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold">
      Quick Help
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mt-3">
      Have Questions About Our Products?
    </h2>

    <p className="text-gray-600 leading-7 mt-4 max-w-2xl mx-auto">
      Explore our product categories and discover devices
      designed for work, entertainment, creativity, and everyday life.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

      <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition">
        <div className="text-3xl">💻</div>
        <h3 className="font-bold text-lg mt-4">Laptops</h3>
        <p className="text-gray-500 text-sm mt-2">
          Powerful devices for work and study.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition">
        <div className="text-3xl">📱</div>
        <h3 className="font-bold text-lg mt-4">Phones</h3>
        <p className="text-gray-500 text-sm mt-2">
          Modern smartphones for everyday use.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition">
        <div className="text-3xl">🎧</div>
        <h3 className="font-bold text-lg mt-4">Audio</h3>
        <p className="text-gray-500 text-sm mt-2">
          Audio products for music and entertainment.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition">
        <div className="text-3xl">⌚</div>
        <h3 className="font-bold text-lg mt-4">Wearables</h3>
        <p className="text-gray-500 text-sm mt-2">
          Smart devices for your connected lifestyle.
        </p>
      </div>

    </div>

  </div>

</section>

    </div>
  );
}

export default ContactUs;