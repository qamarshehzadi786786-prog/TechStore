import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <div className="bg-blue-800 text-white flex items-center justify-between gap-10 h-12 px-8">

      {/* Logo */}
      <h1>💻 TechStore</h1>

      {/* Navigation */}
      <div className="flex items-center gap-10">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative ${
              isActive ? "after:w-full" : "after:w-0"
            } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-yellow-300 after:transition-all after:duration-300`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/product"
          className={({ isActive }) =>
            `relative ${
              isActive ? "after:w-full" : "after:w-0"
            } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-yellow-300 after:transition-all after:duration-300`
          }
        >
          Product
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative ${
              isActive ? "after:w-full" : "after:w-0"
            } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-yellow-300 after:transition-all after:duration-300`
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative ${
              isActive ? "after:w-full" : "after:w-0"
            } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-yellow-300 after:transition-all after:duration-300`
          }
        >
          Contact Us
        </NavLink>

      </div>

      {/* Cart + Button */}
      <div className="flex items-center gap-5">

        <div className="relative">
          <Link to="/cart">
            <FaShoppingCart size={30} />
          </Link>

          {cartCount > 0 && (
            <span className="absolute rounded-full bg-white text-blue-800 w-5 h-5 bottom-4 left-8 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>

        <Button text="Shop Now" />

      </div>

    </div>
  );
}

export default Header;