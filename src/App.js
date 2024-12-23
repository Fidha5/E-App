import { Routes,Route, useLocation} from 'react-router-dom';
import UserRouter from './user/Routes/UserRouter';
import AdminRouter from './admin/Routes/AdminRouter';
import Home from './user/pages/Home';
import Login from './Auth/pages/Login';
import Signup from './Auth/pages/SignUp';
import ProductDetails from './user/pages/ProductDetails';
import UserProtectedRoutes from './user/Routes/UserProtectedRoutes';
import AdminProtectedRoutes from './admin/Routes/AdminProtectedRoutes';
import Navbar from './components/Navbar';
import { Notfound } from './components/Notfound';
import Footer from './components/Footer';
import AdminNavbar from './admin/pages/AdminNavbar';

function App() {
  const location = useLocation();
  const isAdmin = AdminRouter.some(route=>location.pathname.startsWith(route.path));
  return (
    <div className="flex flex-col min-h-screen">
      {isAdmin ? <AdminNavbar/> : <Navbar/>}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element = { <Home/> } />
          <Route path="/Login" element = { <Login/> } />
          <Route path="/Signup" element = { <Signup/> } />
          <Route path="/product-details/:id" element = { <ProductDetails/> } />
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
  );
}

export default App;