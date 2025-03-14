import React from 'react';
import Sidebar from '../../Components/Sidebar';
import './dashboard.css';

function ManagerPage() {
    return (
        <div className="dashboard-container">
            <Sidebar role="manager" />
            <div className="dashboard-content manager-dashboard">
                <h2>Manager Dashboard</h2>
                <div className="dashboard-card">
                    <h3>Team Overview</h3>
                    <p>- 5 employees working on Project X</p>
                    <p>- Deadline: March 25</p>
                </div>
                <div className="dashboard-card">
                    <h3>Performance Insights</h3>
                    <p>📈 Productivity increased by 12% this month.</p>
                </div>
            </div>
        </div>
    );
}

export default ManagerPage;
