import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";

const Checkout = () => {
  const { cart , clearCart } = useCart();
  const { user } = useUser()
  const getTotalPrice = () =>  cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");

  const [address, setAddress] = useState({ street: "", city: "", state: "", zip: "", country: ""})


  const handleOrderConfirmation = async () => {
    if (!selectedPayment) {
      alert("Please select a payment method to proceed.");
      return;
    }
    if (!address.street || !address.city || !address.state || !address.zip || !address.country) { 
        alert("Please fill out all address fields."); 
        return; 
    }
    const orderDetails = {
      user, // Get from UserContext
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: getTotalPrice(),
      paymentMethod: selectedPayment,
      address: address,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:5001/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        alert(`Order placed successfully with ${selectedPayment}!`);
        clearCart(); // Clear the cart after placing the order
        navigate("/order");
      } else {
        alert("Failed to place the order. Please try again.");
      }
    } catch (error) {
      console.error("Order Error:", error);
      alert("An error occurred while placing the order.");
    }

  };
  const handleAddressChange = (e) => { 
    const { name, value } = e.target; 
    setAddress((prevAddress) => 
        ({ ...prevAddress, [name]: value, }));
    }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Checkout Page</h2>

      {cart.length > 0 ? (
        <>
          {/* Cart Summary Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Cart Summary:</h3>
            <div className="border p-4 rounded">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between mb-2 last:mb-0"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h4 className="font-semibold">{product.name}</h4>
                      <p>₹{product.price} x {product.quantity}</p>
                    </div>
                  </div>
                  <div className="text-lg font-semibold">
                    ₹{product.price * product.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total Amount Section */}
          <div className="mt-4 text-lg font-semibold">
            <p className="mb-2">Total Amount: ₹{getTotalPrice()}</p>
          </div>

          {/* Address Input Section */} 
          <div className="mt-4"> 
            <h3 className="text-lg font-semibold mb-2">Shipping Address:</h3> 
            <div className="space-y-2"> 
                <input type="text" name="street" placeholder="Street Address" value={address.street} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
                <input type="text" name="city" placeholder="City" value={address.city} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
                <input type="text" name="state" placeholder="State" value={address.state} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
                <input type="text" name="zip" placeholder="ZIP Code" value={address.zip} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
                <input type="text" name="country" placeholder="Country" value={address.country} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
            </div> 
            </div>

          {/* Payment Methods Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Select Payment Method:</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Credit Card"
                  checked={selectedPayment === "Credit Card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4"
                />
                <span>Credit Card</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Debit Card"
                  checked={selectedPayment === "Debit Card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4"
                />
                <span>Debit Card</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="PayPal"
                  checked={selectedPayment === "PayPal"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4"
                />
                <span>PayPal</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Cash on Delivery"
                  checked={selectedPayment === "Cash on Delivery"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="w-4 h-4"
                />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          {/* Confirm Order Button */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handleOrderConfirmation}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Confirm Order
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Back to Cart
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty. Add some items to checkout.</p>
      )}
    </div>
  );
};

export default Checkout;