import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";
import { getAllProducts } from "../api/productApi";

function Navbar() {
  const { handleLogout } = useUser();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const useName = localStorage.getItem("userName");
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchTerm.trim() === "") {
        setProducts([]);
        setShowModal(false);
        return;
      }
      try {
        const res = await getAllProducts();
        const searchProducts = res.data.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(searchProducts);
        setShowModal(true);
      } catch (error) {
        console.error("Error while searching Products", error);
      }
    };

    const delaySearch = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  const handleProductClick = (productId) => {
    setShowModal(false);
    setSearchTerm("");
    navigate(`/product-details/${productId}`);
    setMenuOpen(false); // Close menu after product selection
  };

  return (
    <nav className="flex w-full p-4 shadow-lg bg-blue-500 items-center justify-between top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3737/3737151.png"
          alt="logo"
          className="w-10 h-10"
        />
        <p className="font-bold text-blue-300 text-lg">MOB-BUDDY</p>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-white text-lg font-medium items-center">
        <NavLink to="/" className="hover:text-blue-300">
          Home
        </NavLink>
        <NavLink to="/cart" className="hover:text-blue-300">
          Cart <span className="rounded-full bg-blue-300 px-2"> {cart?.length || 0}</span>
        </NavLink>
        <NavLink to="/orders" className="hover:text-blue-300">
          Orders
        </NavLink>

        <div className="relative">
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                type="search"
                placeholder="Search here..."
                className="w-full p-2 outline-none border-gray-700 border-b-2 bg-transparent text-white placeholder-white"
              />
              {showModal && products.length > 0 && (
                <div className="absolute top-6 left-0 mt-3 overflow-y-auto z-50 w-full max-h-60 bg-white border rounded-lg">
                  <ul className="divide-y divide-gray-300">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                      >
                        {product.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

        {/* Username and Logout Button */}
        {useName && (
          <div className="flex items-center space-x-4">
            <span className="font-medium text-white"> {useName}</span>
            <button
              className="bg-blue-300 text-black rounded-xl p-2 hover:bg-slate-300 font-medium"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
        {!useName && (
          <NavLink to="/Login">
            <button className="bg-blue-300 text-black rounded-xl p-2 hover:bg-slate-300 font-medium">
              Login
            </button>
          </NavLink>
        )}
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center relative">
        <button
          className="p-2 text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute top-full right-0 w-[250px] bg-blue-600 p-4 flex flex-col space-y-4 shadow-lg">
            <button
              className="text-white text-xl self-end"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
            {useName && (
              <div className="text-white text-center font-medium">
                Hello, {useName}
              </div>
            )}
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-blue-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-blue-300"
            >
              Cart <span className="rounded-full bg-blue-300 px-2">{cart.length || 0}</span>
            </NavLink>
            <NavLink
              to="/orders"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-blue-300"
            >
              Orders
            </NavLink>

            {/* Search in Hamburger Menu */}
            <div className="relative">
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                type="search"
                placeholder="Search here..."
                className="w-full p-2 outline-none border-gray-700 border-b-2 bg-transparent text-white placeholder-white"
              />
              {showModal && products.length > 0 && (
                <div className="absolute top-6 left-0 mt-3 overflow-y-auto z-50 w-full max-h-60 bg-white border rounded-lg">
                  <ul className="divide-y divide-gray-300">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                      >
                        {product.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {useName ? (
              <button
                onClick={handleLogout}
                className="text-white bg-blue-300 p-2 rounded hover:bg-slate-400"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/Login"
                onClick={() => setMenuOpen(false)}
                className="text-white bg-blue-300 p-2 rounded hover:bg-slate-400 text-center"
              >
                Login
              </NavLink>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
