import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError("Xatolik bor !");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">⏳ Yuklanmoqda...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        📦 Mahsulotlar
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {product.title}
            </h2>
            <p className="text-gray-600 text-lg font-medium mt-2">${product.price}</p>
            <button className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-blue-700">
              🛒 Buy It Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
