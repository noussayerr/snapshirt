import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import axios from "axios";

function Profile() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []); 

  // Fetch all user orders
  const fetchOrders = () => {
    axios.get('http://localhost:5000/api/order/user-orders', { withCredentials: true })
      .then(res => {
        setOrders(res.data.orders);
      })
      .catch(err => console.error(err));
  };

  // Delete order function
  const handleDeleteOrder = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      axios.delete(`http://localhost:5000/api/order/${orderId}`, { withCredentials: true })
        .then(res => {
          alert(res.data.message); // Display success message
          fetchOrders(); // Refresh orders after deletion
        })
        .catch(err => {
          alert(err.response?.data?.message || "Error deleting order.");
        });
    }
  };

  // Open modal for order details
  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <motion.div
      className="bg-[#FAFAFA] shadow-xl rounded-lg p-8 mb-8 max-w-xl mx-auto"
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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-lg font-medium ">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-100">
                  <td className="text-start py-5 cursor-pointer" onClick={() => openModal(order)}>
                    #{order._id.substring(0, 8)}
                  </td>
                  <td className="py-5">{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td className="py-5">${order.totalAmount}</td>
                  <td className="py-5">{order.number}</td>
                  <td className="py-5">{order.Address}</td>
                  <td className="py-5 px-7">
                    <MdDelete 
                      size={25} 
                      className="text-red-500 cursor-pointer hover:scale-110 transition"
                      onClick={() => handleDeleteOrder(order._id)} 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No orders found.</p>
      )}

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
            <button 
              onClick={closeModal} 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Profile;
