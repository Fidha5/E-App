import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getAllProducts } from "../../api/productApi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products: ", error);
        setError("Error fetching product details");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white bg-opacity-90 rounded-lg shadow-lg p-4 relative transform transition duration-300 hover:shadow-xl hover:scale-105"
              >
                {product.image ? (
                  <Link
                    to={`/product-details/${product.id}`}
                    className="block"
                    aria-label={`View details of ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-t-lg w-full h-48 object-contain"
                    />
                  </Link>
                ) : (
                  <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <span className="text-gray-600 text-sm">No Image</span>
                  </div>
                )}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-500">₹{product.price}</p>
                  <button
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition focus:outline-none focus:ring focus:ring-blue-300"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 py-8">
              No products available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
