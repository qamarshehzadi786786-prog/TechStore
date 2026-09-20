import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

function Practice() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  const saveCart = localStorage.getItem("cart");

  useEffect(() => {
    if (saveCart) {
      setCart(JSON.parse(saveCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Header cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCartCount={setCartCount}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default Practice;