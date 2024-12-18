
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import UserRouter from './user/UserRouter';
import AdminRouter from './admin/AdminRouter';
function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
                <Routes>
                  <Route path='/*' element={ <UserRouter/> } />
                  <Route path="/admin*" element = { <AdminRouter/> } />
                </Routes>
            </Router>
            </CartProvider>
          </UserProvider>
    
  );
}

export default App;
