function Cart({ cart, setCart, setCartCount }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8 mt-10">
        My Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">
          No item added to cart yet.
        </p>
      ) : (
        <>
          <p className="text-center text-gray-600 mb-8">
            Products you added to your cart.
          </p>

          <div className="flex gap-10 justify-center flex-wrap">
            {cart.map((item) => (
              <section
                key={item.id}
                className="w-60 border-2 rounded-xl mt-10 overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">

                  <h2 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-600 mt-2">
                    {item.description}
                  </p>

                  <p className="text-lg font-bold text-blue-700 mt-3">
                    {item.price}
                  </p>

                  <button
                    onClick={() => {
                      setCart(
                        cart.filter((product) => product.id !== item.id)
                      );

                      setCartCount((prev) => prev - 1);
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg mt-3 hover:bg-red-600"
                  >
                    Remove
                  </button>

                </div>
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;