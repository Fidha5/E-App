import Cart from "../pages/Cart";
import Order from "../pages/Order";
import Checkout from "../pages/Checkout";
// const UserRouter =() =>{
//     return (
       
//             // <Router>
//               <div className=" flex flex-col min-h-screen">
//                 <Navbar/>
//                   <div className="flex-grow">
//                     <Routes>
//                       <Route path='/' element={ <Home/> } />
//                       <Route path='/cart' element={ <Cart/>} />
//                       <Route path='/order' element={<Order/>} />
//                       <Route path='/Login' element={<Login/>}/>
//                       <Route path='/SignUp' element={<SignUp/>}/>
//                       <Route path="/product/:id" element={<ProductDetails />} />
//                       <Route path='/checkout' element={ <Checkout/>} />
//                     </Routes>
//                 </div>
//                 <Footer/>
//               </div>
//             // </Router>
    
//       );
// }
const UserRouter =[
  {path:'/cart',element:<Cart/>},
  {path:'/checkout',element:<Checkout/>},
  {path:'/orders',element:<Order/>}
]
export default UserRouter;