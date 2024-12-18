import React, { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";

// Create CartContext
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// CartProvider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const { user } = useUser();


   // Fetch cart items from the database on component mount or when email changes
   useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/cart?user=${user}`)
        .then((res) => res.json())
        .then((data) => setCart(data || []))
        .catch((err) => console.error("Error fetching cart data:", err));
    } else {
      setCart([]);
    }
  }, [user]);
  const addToCart = (product) => {
    if (!user) {
      console.error("User not logged in");
      return;
    }
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If product exists, update quantity
      fetch(`http://localhost:5000/cart/${existingProduct.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: existingProduct.quantity + 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          );
        })
        .catch((err) => console.error("Error updating cart:", err));
    } else {

    fetch(`http://localhost:5000/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...product, user }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      })
      .catch((err) => console.error("Error adding to cart:", err));
  };
}

  const removeFromCart = (productId) => {
    if (!user) {
      console.error("User not logged in");
      return;
    }

    fetch(`http://localhost:5000/cart/${productId}?user=${user}`, {
      method: "DELETE",
    })
      .then(() => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      })
      .catch((err) => console.error("Error removing from cart:", err));
  };

  const clearCart = () => {
    if (!user) {
      console.error("User not logged in");
      return;
    }

    fetch(`http://localhost:5000/cart/clear?user=${user}`, {
      method: "DELETE",
    })
      .then(() => setCart([]))
      .catch((err) => console.error("Error clearing cart:", err));
  };

  const updateQuantity = (productId, amount) => {
    if (!user) {
      console.error("User not logged in");
      return;
    }

    fetch(`http://localhost:5000/cart/${productId}?user=${user}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: amount }),
    })
      .then(() => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + amount }
              : item
          )
        );
      })
      .catch((err) => console.error("Error updating quantity:", err));
  };


  const placeOrder = (orderDetails) => {
    setOrders((prevOrders) => [...prevOrders, orderDetails]);
    setCart([]); // Clear cart after placing order
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        orders,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
  }
