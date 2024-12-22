import React from 'react'
import Dasboard from '../pages/Dasboard';
import ManageProducts from '../pages/ManageProducts';
import Reports from '../pages/Reports';
import ManageUsers from '../pages/ManageUsers';
import ManageOrders from '../pages/ManageOrders'


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
  {path:'/', element:<Dasboard/>},
  {path:'/manage-products', element:<ManageProducts/>},
  {path:'/manage-orders', element:<ManageOrders/>},
  {path:'/manage-users', element:<ManageUsers/>},
  {path:'/reports', element:<Reports/>}
]
export default AdminRouter;