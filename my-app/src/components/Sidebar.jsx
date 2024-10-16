import React, { useState } from 'react';
import '../Menu.css'
import {Link, useNavigate} from 'react-router-dom'
import { GoSidebarExpand } from "react-icons/go";
const MenuBar = () => {
  // State to control whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);
  const {userId} = localStorage.getItem('userId')
  const navigate= useNavigate()
  // Toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu Button or Icon */}
      <button className="menu-btn" onClick={toggleMenu}>
        <i><GoSidebarExpand/></i>
      </button>

      {/* Menu with smooth sliding transition */}
      <nav className={`menu-bar main-content ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className='cursor-pointer' onClick={()=>{navigate(`/mydashboard`)}}>My Dashboard</li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBar;
