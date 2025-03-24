import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
    <div>
       <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">📦 Mahsulotlar</h1>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-white">
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-bold mt-3">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button>Buy it now </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Products
