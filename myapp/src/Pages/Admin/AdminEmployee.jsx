import React from 'react';
import Sidebar from '../../Components/Sidebar';
import './dashboard.css';

function AdminEmployee() {
    return (
        <div className="dashboard-container">
            <Sidebar role="admin" />
            <div className="dashboard-content admin-dashboard">
                <h2>Admin Panel</h2>
                <div className="dashboard-card">
                    <h3>User Management</h3>
                    <p>- Approve/Deny new user requests</p>
                    <p>- Reset user passwords</p>
                </div>
                <div className="dashboard-card">
                    <h3>System Updates</h3>
                    <p>⚙️ Server maintenance scheduled for Sunday night.</p>
                </div>
            </div>
        </div>
    );
}

export default AdminEmployee;
