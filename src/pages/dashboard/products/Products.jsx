import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => {
        setError("Xatolik bor !");
        setLoading(false);
      });
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (loading) return <p className="text-center mt-10">⏳ Yuklanmoqda...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        📦 Mahsulotlar
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105"
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
            <button
              onClick={() => openModal(product)}
              className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300 hover:from-blue-600 hover:to-blue-800"
            >
              🛒 Buy It Now
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
            <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
            <p className="text-gray-600 mt-2">${selectedProduct.price}</p>
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-red-500 text-white rounded-l"
              >
                -
              </button>
              <span className="px-6 py-2 border border-gray-300">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-green-500 text-white rounded-r"
              >
                +
              </button>
            </div>
            <p className="text-lg font-semibold mt-4">
              Umumiy narx: ${selectedProduct.price * quantity}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-gray-500 text-white px-6 py-2 rounded"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
