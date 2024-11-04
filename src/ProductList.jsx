import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(filter.toLowerCase()) ||
      product.price.toString().includes(filter)
  );

  return (
    <div className=" mx-auto p-4 w-fit ">
      <h1 className="text-3xl font-bold mb-4 text-center">Product List</h1>
      <Link
        to="/cart"
        className="text-blue-500 underline mb-4 block text-center"
      >
        View Cart
      </Link>

      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 rounded px-3 py-1 mb-4 w-full"
      />

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 ">No Items Found</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 w-full">
          {filteredProducts.map((product) => (
            <li key={product.id} className="border p-2 rounded shadow h-auto">
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-half w-full object-cover rounded"
              />
              <h2 className="font-semibold text-sm mt-2">{product.title}</h2>
              <p className="text-gray-600 text-sm">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white text-sm px-2 py-1 mt-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
