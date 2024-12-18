import Footer from "../components/Footer"
import Home from "../user/pages/Home"
import { Routes, Route } from 'react-router-dom';
import Cart from "../user/pages/Cart";
import Order from "../user/pages/Order";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import ProductDetails from "../user/pages/ProductDetails";
import Checkout from "../user/pages/Checkout";
import Navbar from "../components/Navbar";

const UserRouter =() =>{
    return (
       
            // <Router>
              <div className=" flex flex-col min-h-screen">
                <Navbar/>
                  <div className="flex-grow">
                    <Routes>
                      <Route path='/' element={ <Home/> } />
                      <Route path='/cart' element={ <Cart/>} />
                      <Route path='/order' element={<Order/>} />
                      <Route path='/Login' element={<Login/>}/>
                      <Route path='/SignUp' element={<SignUp/>}/>
                      <Route path="/product/:id" element={<ProductDetails />} />
                      <Route path='/checkout' element={ <Checkout/>} />
                    </Routes>
                </div>
                <Footer/>
              </div>
            // </Router>
    
      );
}
export default UserRouter;