import React from 'react'
import Dasboard from '../pages/Dasboard';
import ManageProducts from '../pages/ManageProducts';
// import Reports from '../pages/Reports';
import ManageUsers from '../pages/ManageUsers';
import ManageOrders from '../pages/ManageOrders'
import {AddProducts} from '../pages/AddProducts'
import {EditProduct} from '../pages/EditProduct'

//  const AdminRouter = () => {
//   return (
//     <div className="admin-layout">
//         <AdminNavbar />
//           <div className="admin-content">
//             <Routes>
//                 <Route path="/" element = { <Dasboard/> } />
//                 <Route path="/manage-products" element = { <ManageProducts/> } />
//                 <Route path="/reports" element = { <Reports/> } />
//                 <Route path="/manage-users" element = { <ManageUsers/> } />
//                 <Route path="/manage-orders" element = { <ManageOrders/> } />
//             </Routes>
//           </div>
//     </div>
//   )
// }
const AdminRouter =[
  {path:'/admin', element:<Dasboard/>},
  {path:'/admin/manage-products', element:<ManageProducts/>},
  {path:'/admin/manage-orders', element:<ManageOrders/>},
  {path:'/admin/manage-users', element:<ManageUsers/>},
  // {path:'/admin/reports', element:<Reports/>},
  {path:'/admin/addproduct', element:<AddProducts/>},
  {path:'/admin/editproduct/:id', element:<EditProduct/>}
]
export default AdminRouter;