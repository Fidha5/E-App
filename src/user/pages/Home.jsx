import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useUser } from '../../context/UserContext';
import { getAllProducts } from '../../api/productApi';

const Home = () => {
  const [products, setProducts] = useState([]);
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const { user } = useUser();
    const [error,setError]=useState("")
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await getAllProducts();
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching product details:', error);
          setError("Eroor fetching product details")
        } 
      }
      fetchProducts();
    },[]);   
  
    const formatPrice = (price) => {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(Math.round(price));
    };
  
    const handleAddToCart = (product, e) => {
      e.stopPropagation();
      if (!user) {
        alert('Please login or signup to add products to the cart.');
        navigate('/Login');
        return;
      }
      addToCart(product);
   };
  return (
    <div className="container mx-auto p-4 w-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">       
         {products.slice(0, 10).map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition duration-200 hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img src={product.image} alt={product.name} className="w-full object-cover rounded-md" />
                <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{formatPrice(product.price)}</p>
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-gray-400 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
   
  )
}

export default Home

//   const [products, setProducts] = useState([]);
//   const { addToCart } = useCart();
//   const navigate = useNavigate();
//   const { user } = useUser();
//   const [error,setError]=useState("")

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await getAllProducts();
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//         setError("Eroor fetching product details")
//       } 
//     }
//     fetchProducts();
//   },[]);   

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0,
//     }).format(Math.round(price));
//   };

//   const handleAddToCart = (product, e) => {
//     e.stopPropagation();
//     if (!user) {
//       alert('Please login or signup to add products to the cart.');
//       navigate('/Login');
//       return;
//     }
//     addToCart(product);
//   };

//   return (
//     <div className="container mx-auto p-4 w-screen">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {products.slice(0, 10).map((product) => (
//           <div
//             key={product.id}
//             className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition duration-200 hover:scale-105 cursor-pointer"
//             onClick={() => navigate(`/product/${product.id}`)}
//           >
//             <img src={product.image} alt={product.name} className="w-full object-cover rounded-md" />
//             <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">{formatPrice(product.price)}</p>
//             <button
//               onClick={(e) => handleAddToCart(product, e)}
//               className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-gray-400 transition duration-200"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

