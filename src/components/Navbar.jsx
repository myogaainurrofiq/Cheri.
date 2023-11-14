// Navbar.js
import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import '../css/Navbar.css';
import { useAuth } from './AuthContext'; // Update the path to AuthContext

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Redirect to login page after logout
    return <Navigate to="/Login" />;
  };

  return (
    <div className='body2'>
      <header>
        <nav>
          <ul>
            <div className='teks1'>
              <li>
                Chèri
              </li>
            </div>
            <div className='teks2'>
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/About" className={location.pathname === '/About' ? 'active' : ''}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/Information" className={location.pathname === '/Information' ? 'active' : ''}>
                  INFORMATION
                </Link>
              </li>
              <li>
                <Link to="/Gacha" className={location.pathname === '/Gacha' ? 'active' : ''}>
                  GACHA
                </Link>
              </li>
              {/* Use Link for Logout button to prevent errors */}
              {isAuthenticated && (
                <li>
                  <Link to="/" onClick={handleLogout} className="logout-link">
                    LOGOUT
                  </Link>
                </li>
              )}
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
