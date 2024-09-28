import React, { useState } from 'react';
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { BsCartDash, BsPerson } from 'react-icons/bs';
import { Squash as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import "./header.css"
export const Navbar = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="header">
        <div className="humburger-menu">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            type="submit"
            id="btnHamburger"
            // href="#"
            aria-label="menu-icon"
            className={`nav-toggle hide-for-desktop ${
              showSidebar ? 'open' : ''
            }`}
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
          </ul>

            <button
              aria-label="logout-icon"
              type="button"
            //   onClick={() => {
            //     logOutUser(setUser, setCart, setWishlist, setLogin, navigate);
            //   }}
              className="flex-al-center border-none logout-btn"
            >
              LOG OUT
            </button>
        </div>
      </section>
    </>
  );
};
