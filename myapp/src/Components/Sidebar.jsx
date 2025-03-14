import React from 'react'
import './Sidebar.css'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
function Sidebar({ role }) {
  const roleList = {
    admin: [
      {
        label: 'Dashboard',
        url: '/admin'
      },
      {
        label: 'Employee Details',
        url: '/adminEmployee'
      },
      {
        label: 'Analysis',
        url: '/analysis'
      },
      {
        label: 'Logout',
        url: '/login'
      }
    ],
    manager: [
      { label: 'Dashboard', url: '/manager' },
      { label: 'Reports', url: '/reports' },
      { label: 'Team', url: '/team' },
      { label: 'Logout', url: '/login' }
    ],
    employee: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Shop',
        url: '/shop'
      },
      {
        label: 'Cart',
        url: '/cart'
      },
      {
        label: 'Logout',
        url: '/login'
      }
    ]
  }
  const navigate = useNavigate();

  const location = useLocation();
  const handleNavigate = (nav) => {

    navigate(nav);
  }
  return (
    <div className='SideBarContainer'>
      <div className='SideBarContent'>
        {roleList[role]?.map((nav) => (
          <div
            key={nav.url}
            onClick={() => handleNavigate(nav.url)}
            className={location.pathname === nav.url ? 'active' : ''}
          >
            {nav.label}
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Sidebar