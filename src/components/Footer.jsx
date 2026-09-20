function Footer() {
  return (
    <footer className="bg-blue-800 text-white mt-16">

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            💻 TechStore
          </h2>

          <p className="text-blue-100 leading-6">
            Your trusted destination for the latest technology,
            gadgets and smart devices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-blue-100">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Categories
          </h3>

          <ul className="space-y-2 text-blue-100">
            <li className="hover:text-white cursor-pointer">Laptops</li>
            <li className="hover:text-white cursor-pointer">Smartphones</li>
            <li className="hover:text-white cursor-pointer">Earbuds</li>
            <li className="hover:text-white cursor-pointer">Smart Watches</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-blue-100">
            <li>📧 techstore@gmail.com</li>
            <li>📞 +92 300 1234567</li>
            <li>📍 Bahawalpur, Pakistan</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-blue-600">
        <div className="max-w-6xl mx-auto px-6 py-5 text-center text-blue-100">
          <p>
            © 2026 TechStore. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;