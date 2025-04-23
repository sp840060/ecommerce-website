// src/components/AdminDashboard.js
import React from 'react';

function AdminDashboard() {
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <button className="btn btn-warning">Manage Products</button>
      <button className="btn btn-danger">Manage Orders</button>
    </div>
  );
}

export default AdminDashboard;
