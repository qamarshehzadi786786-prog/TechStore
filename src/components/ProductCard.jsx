function ProductCard({ image, name, description, price }) {
  return (
    <div>
      <section className="w-60 border-2 rounded-xl mt-20 ml-10 overflow-hidden shadow-md hover:shadow-xl transition">

        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover"
        />

        <div className="p-4">

          <h2 className="text-xl font-bold text-gray-800">
            {name}
          </h2>

          <p className="text-sm text-gray-600 mt-2">
            {description}
          </p>

          <p className="text-lg font-bold text-blue-700 mt-3">
            {price}
          </p>

          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-800">
            Add to Cart
          </button>

        </div>

      </section>
    </div>
  );
}

export default ProductCard;