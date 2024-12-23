import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productApi";
import { getAllOrders, getAllUsers } from "../../api/adminApi";

const Dasboard = () => {
  const [totalUsers,setTotalUsers]  =useState(0)
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    getAllProducts().then((res) => setTotalProducts(res.data.length));
    getAllOrders().then((res) => setTotalOrders(res.data.length));
    getAllUsers().then((res) => setTotalUsers(res.data.length));
    }, []);

    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </header>

      <main className="flex-1 flex flex-col p-6 ">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
            <p className="text-4xl font-bold text-gray-900 mt-4">{totalUsers}</p>
            <p className="text-sm text-gray-500 mt-2">+25 this week</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-700">Total Products</h2>
            <p className="text-4xl font-bold text-gray-900 mt-4">{totalProducts}</p>
            <p className="text-sm text-gray-500 mt-2">+142 this week</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
            <p className="text-4xl font-bold text-gray-900 mt-4">{totalOrders}</p>
            <p className="text-sm text-gray-500 mt-2">+39 this week</p>
          </div>
         </div>

         {/* Recent Activities and Charts
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          Recent Activities
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Recent Activities
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="text-gray-600">New user registration</span>
                <span className="text-sm text-gray-500">5 mins ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-600">New order placed</span>
                <span className="text-sm text-gray-500">12 mins ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-600">Product added to inventory</span>
                <span className="text-sm text-gray-500">1 hour ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-600">Report generated</span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </li>
            </ul>
          </div>

          Statistics Overview
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Statistics</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Order Fulfillment</p>
                <div className="relative w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">85% completed</p>
              </div>
              <div>
                <p className="text-gray-600">User Engagement</p>
                <div className="relative w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
                    style={{ width: "68%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">68% engagement</p>
              </div>
              <div>
                <p className="text-gray-600">Inventory Restock</p>
                <div className="relative w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="absolute top-0 left-0 h-4 bg-yellow-500 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">92% stocked</p>
              </div>
            </div>
          </div>
        </div> */} 
      </main>
    </div>
  );
};
export default Dasboard;