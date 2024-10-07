import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import axios from "axios";

function Orders() {
   const [orders, setOrders] = useState([]);
   const [selectedOrder, setSelectedOrder] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   useEffect(() => {
      fetchOrders();
   }, []); 

   const fetchOrders = () => {
      axios.get('http://localhost:5000/api/order', { withCredentials: true })
         .then(res => {
            setOrders(res.data.Orders);
         })
         .catch(err => console.error(err));
   };

   const handleStatusChange = (orderId, newStatus) => {
      axios.put(`http://localhost:5000/api/order/${orderId}/status`, { status: newStatus }, { withCredentials: true })
         .then(() => {
            fetchOrders();
         })
         .catch(err => console.error(err));
   };

   const openModal = (order) => {
      setSelectedOrder(order);
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
      setSelectedOrder(null);
   };

   const statusOptions = ["Loaded", "Picked UP", "Canceled"];

   return (
      <motion.div
         className='rounded-lg p-8 mb-8 max-w-4xl mx-auto'
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
      >
         {orders.length > 0 ? (
            <div>
               <table className="table-fixed text-center w-full">
                  <thead className="mb-6">
                     <tr className="text-sm sm:text-[22px] font-bold py-5">
                        <th className="text-start">Order Id</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                     </tr>
                  </thead>
                  <tbody className="text-xs sm:text-lg font-medium ">
                     {orders.map((order) => (
                        <tr key={order._id} onClick={() => openModal(order)} className="cursor-pointer hover:bg-gray-100">
                           <td className="text-start py-5">#{order._id.substring(0,10)}</td>
                           <td className="py-5">{new Date(order.createdAt).toLocaleDateString()}</td>
                           <td className="py-5">${order.totalAmount}</td>
                           <td className="py-5">{order.number}</td>
                           <td className="py-5">{order.Address}</td>
                           <td className="py-5">
                              <select
                                 value={order.status}
                                 onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                 className={`py-2 px-2.5 rounded-md font-medium text-base ${getStatusClass(order.status)}`}
                                 onClick={(e) => e.stopPropagation()}
                              >
                                 {statusOptions.map((status) => (
                                    <option key={status} value={status}>{status}</option>
                                 ))}
                              </select>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         ) : null}

         {isModalOpen && selectedOrder && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
               <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
                  <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                  <p><strong>Order ID:</strong> {selectedOrder._id}</p>
                  <p><strong>Date:</strong> {new Date(selectedOrder.createdAt).toLocaleString()}</p>
                  <p><strong>Total Amount:</strong> ${selectedOrder.totalAmount}</p>
                  <p><strong>Phone:</strong> {selectedOrder.number}</p>
                  <p><strong>Address:</strong> {selectedOrder.Address}</p>
                  <p><strong>Status:</strong> {selectedOrder.status}</p>
                  <h3 className="text-xl font-bold mt-4 mb-2">Products:</h3>
                  <ul>
                     {selectedOrder.products.map((product, index) => (
                        <li key={index}>
                           Product ID: {product.product}, Quantity: {product.quantity}, Size: {product.size}
                        </li>
                     ))}
                  </ul>
                  <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
               </div>
            </div>
         )}
      </motion.div>
   );
}

const getStatusClass = (status) => {
   switch (status) {
      case "Picked UP":
         return "text-blue-600 bg-blue-600 bg-opacity-10";
      case "Canceled":
         return "text-red-600 bg-red-600 bg-opacity-10";
      case "Loaded":
         return "text-green-600 bg-green-600 bg-opacity-10";
      default:
         return "text-gray-600 bg-gray-600 bg-opacity-10";
   }
}

export default Orders;
