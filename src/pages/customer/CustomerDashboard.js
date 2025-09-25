import React, { useState, useEffect } from "react";
import OrderForm from "../../components/Orders/OrderForm";
import { apiFetch } from "../../utils/api";

export default function CustomerDashboard() {
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const data = await apiFetch("/api/orders");
      if (data?.success) setOrders(data.orders);
      else alert("❌ Failed to fetch orders: " + (data?.error || "Unknown error"));
    } catch (err) {
      console.error("Error fetching orders:", err);
      alert("❌ Error fetching orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleOrderSaved = () => {
    fetchOrders();
    setShowForm(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-success mb-3">Customer Dashboard</h2>

      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowForm(true)}
      >
        + Create Order
      </button>

      {showForm && (
        <OrderForm onClose={handleFormClose} onSaved={handleOrderSaved} />
      )}

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-success">
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Specifications</th>
              <th>Delivery Instructions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, idx) => (
                <tr key={order._id || order.orderId || idx}>
                  <td>{order.customerName}</td>
                  <td>{order.customerEmail}</td>
                  <td>{order.contactNumber || "-"}</td>
                  <td>{order.product || (order.items && order.items[0]?.itemName) || "-"}</td>
                  <td>{
                    order.quantity != null
                      ? order.quantity
                      : (order.items && order.items[0]?.quantity) != null
                      ? order.items[0].quantity
                      : "-"
                  }</td>
                  <td>{order.productSpecs || "-"}</td>
                  <td>{order.deliveryInstructions || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No orders yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}