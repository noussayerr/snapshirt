import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import axios from "axios";

function AnalyticsTab() {
  const [orders, setOrders] = useState([]);

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

  const processOrderData = () => {
    let totalAmount = 0;
    const ordersByDate = orders.reduce((acc, order) => {
      const date = new Date(order.createdAt).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = { date, totalAmount: 0, orderCount: 0 };
      }
      acc[date].totalAmount += order.totalAmount;
      acc[date].orderCount += 1;
      totalAmount += order.totalAmount;
      return acc;
    }, {});
  
    return {
      chartData: Object.values(ordersByDate).sort((a, b) => new Date(a.date) - new Date(b.date)),
      totalAmount: totalAmount
    };
  };

  const { chartData, totalAmount } = processOrderData();

  return (
    <div>
      <div className="p-4 text-xl  mb-4 shadow-lg rounded-lg w-48 h-24">
        <h2>Total Revenue:</h2>
        <h2 >${totalAmount.toFixed(2)}</h2>
      </div>
      <AreaChart
        width={800}
        height={400}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Area type="monotone" dataKey="totalAmount" stroke="#8884d8" fill="#8884d8" yAxisId="left" />
      </AreaChart>
    </div>
  );
}

export default AnalyticsTab;
