import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import UserRouter from './user/Routes/UserRouter';
import AdminRouter from './admin/Routes/AdminRouter';
import UserProtectedRoutes from './user/Routes/UserProtectedRoutes';
import AdminProtectedRoutes from './admin/Routes/AdminProtectedRoutes';
import Navbar from './components/Navbar';
import Login from './Auth/pages/Login';
import SignUp from './Auth/pages/SignUp';
import ProductDetails from './user/pages/ProductDetails';
import { Notfound } from './components/Notfound';
import Home from './user/pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <UserProvider>
          <CartProvider>
                  <div className='flex flex-col min-h-screen'>
                    <Navbar/>
                      <div className='flex-grow'>
                            <Routes>
                              <Route path='/' element={ <Home/>} />
                              <Route path='/Login' element={ <Login/> } />
                              <Route path="/Signup" element = { <SignUp/> } />
                              <Route path='/product/:id' element={<ProductDetails />} />
                              <Route element={<UserProtectedRoutes/>}>
                                  {UserRouter.map(({path,element},index)=>(
                                    <Route key={index} path={path} element={element}/>
                                  ))}
                              </Route>
                              <Route element={<AdminProtectedRoutes/>}>
                                  {AdminRouter.map(({path,element},index)=>(
                                    <Route key={index} path={path} element={element}/>
                                  ))}
                              </Route>
                              <Route path='*' element={<Notfound/>} />
                            </Routes>
                      </div>
                        <Footer/>
                  </div>    
                </CartProvider>
              </UserProvider>
          </Router>
    
  );
}

export default App;
