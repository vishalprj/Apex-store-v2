import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Link, useNavigate } from 'react-router-dom';
import "./header.css";

export const Navbar = ({ user, setUser }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <section className="header">
        <div className="humburger-menu">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            type="submit"
            id="btnHamburger"
            aria-label="menu-icon"
            className={`nav-toggle hide-for-desktop ${showSidebar ? 'open' : ''}`}
          >
            <Hamburger size={25} toggle={setOpen} />
          </button>
          <Link to="/">
            <h2 className="logo">Apex</h2>
          </Link>
        </div>
        <div className="nav-right">
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            {user === 'admin' && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>

          {!user ? (
            <Link to="/login" className="btn-login">
              Login
            </Link>
          ) : (
            <button
              aria-label="logout-icon"
              type="button"
              onClick={handleLogout}
              className="flex-al-center border-none logout-btn"
            >
              LOG OUT
            </button>
          )}
        </div>
      </section>
    </>
  );
};
