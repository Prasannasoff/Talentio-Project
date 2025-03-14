import React from 'react';
import Sidebar from '../../Components/Sidebar';
import { Search, MoreHorizontal, Mail, DollarSign, Users, CheckSquare, ChevronUp, ChevronDown, HelpCircle } from 'lucide-react';
import './dashboard.css';

function Home() {
  return (
    <div className="home-container">
      <Sidebar role={'employee'} />
      <div className="main-content">
        <header className="header">
          <div className="search-container">
            <Search className="search-icon" size={18} />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <div className="user-profile">
            <span className="user-name">Theresa Rosmer</span>
            <div className="avatar">
              <img src="/placeholder.svg?height=32&width=32" alt="User avatar" />
            </div>
            <button className="notification-btn">
              <div className="notification-dot"></div>
            </button>
          </div>
        </header>

        <div className="dashboard">
          <div className="section-header">
            <h2>Overview</h2>
            <div className="period-selector">
              <span>Last 30 days</span>
              <ChevronDown size={16} />
            </div>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-header">
                <div className="metric-icon" style={{ backgroundColor: '#e6f7ff' }}>
                  <Mail size={20} color="#0080ff" />
                </div>
                <button className="more-btn">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="metric-value">238</div>
              <div className="metric-label">Requests</div>
              <div className="metric-change positive">
                <ChevronUp size={14} />
                <span>4.7%</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <div className="metric-icon" style={{ backgroundColor: '#ffebf0' }}>
                  <DollarSign size={20} color="#ff4d6d" />
                </div>
                <button className="more-btn">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="metric-value">$5,436</div>
              <div className="metric-label">Spendings</div>
              <div className="metric-change positive">
                <ChevronUp size={14} />
                <span>2.3%</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <div className="metric-icon" style={{ backgroundColor: '#e6fff0' }}>
                  <Users size={20} color="#00cc66" />
                </div>
                <button className="more-btn">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="metric-value">176</div>
              <div className="metric-label">Team members</div>
              <div className="metric-change neutral">
                <span>—</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <div className="metric-icon" style={{ backgroundColor: '#f0e6ff' }}>
                  <CheckSquare size={20} color="#8c52ff" />
                </div>
                <button className="more-btn">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="metric-value">112</div>
              <div className="metric-label">Tasks</div>
              <div className="metric-change negative">
                <ChevronDown size={14} />
                <span>4.1%</span>
              </div>
            </div>
          </div>

          <div className="charts-grid">
            <div className="chart-card">
              <div className="chart-header">
                <h3>Requests status</h3>
                <button className="more-btn">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="pie-chart">
                <div className="donut-chart">
                  <div className="donut-hole"></div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#4a3aff' }}></span>
                    <span className="legend-label">Approved</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#6b5efc' }}></span>
                    <span className="legend-label">Pending</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#38b6ff' }}></span>
                    <span className="legend-label">Postponed</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#e6e8ec' }}></span>
                    <span className="legend-label">Denied</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-card">
              <div className="chart-header">
                <h3>Compare periods</h3>
                <button className="more-btn">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <div className="line-chart">
                <div className="chart-value">
                  <span className="value">$870</span>
                  <ChevronUp size={12} color="#4a3aff" />
                </div>
                <div className="chart-area">
                  <div className="chart-line pink"></div>
                  <div className="chart-line purple"></div>
                </div>
                <div className="chart-dates">
                  <span>09/01</span>
                  <span>09/07</span>
                  <span>09/14</span>
                  <span>09/21</span>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#4a3aff' }}></span>
                    <span className="legend-label">This month</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#ff4d6d' }}></span>
                    <span className="legend-label">Last month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="promo-card">
              <button className="help-btn">
                <HelpCircle size={16} color="#fff" />
              </button>
              <div className="promo-content">
                <h3>Improve management.</h3>
                <p>Make a role structure</p>
                <button className="improve-btn">Improve</button>
              </div>
              <div className="promo-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
