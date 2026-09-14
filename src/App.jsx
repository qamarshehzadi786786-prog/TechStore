import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function Practice() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

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
    </div>
  );
}

export default Practice;