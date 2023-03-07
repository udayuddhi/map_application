import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="sidebar-container">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
      <nav className={sidebarOpen ? 'sidebar-nav open' : 'sidebar-nav'}>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/" className="sidebar-link" onClick={toggleSidebar}>
            <i class="fa-solid fa-house"></i> &nbsp;	&nbsp; Home 
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/contact-us" className="sidebar-link" onClick={toggleSidebar}>
            <i class="fa-solid fa-envelope"></i> &nbsp;	&nbsp;Contact Us
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/contact-us" className="sidebar-link" onClick={toggleSidebar}>
            <i class="fa-solid fa-users"></i> &nbsp;	&nbsp; About
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/contact-us" className="sidebar-link" onClick={toggleSidebar}>
              	<i class="fa-solid fa-address-card"></i>&nbsp;	&nbsp;Terms 
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/contact-us" className="sidebar-link" onClick={toggleSidebar}>
            <i class="fa-solid fa-shield-halved"></i> &nbsp;	&nbsp; Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
