import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import Dasboard from './pages/Dasboard';
import ManageProducts from './pages/ManageProducts';
import Reports from './pages/Reports';
import ManageUsers from './pages/ManageUsers';
import ManageOrders from './pages/ManageOrders'


 const AdminRouter = () => {
  return (
    <div className="admin-layout">
        <AdminNavbar />
          <div className="admin-content">
            <Routes>
                <Route path="/" element = { <Dasboard/> } />
                <Route path="/manage-products" element = { <ManageProducts/> } />
                <Route path="/reports" element = { <Reports/> } />
                <Route path="/manage-users" element = { <ManageUsers/> } />
                <Route path="/manage-orders" element = { <ManageOrders/> } />
            </Routes>
          </div>
    </div>
  )
}

export default AdminRouter;