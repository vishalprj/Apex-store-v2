import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./header.css";

type NavbarProps = {
  user: string | null;
  setUser: (user: string | null) => void;
}

const Navbar = ({ user, setUser }: NavbarProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    ...(user === 'admin' ? [{ to: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <section className="header">
      <div className="hamburger-menu">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          type="button"
          id="btnHamburger"
          aria-label="Menu"
          className={`nav-toggle hide-for-desktop ${showSidebar ? 'open' : ''}`}
        >
          <Hamburger size={25} />
        </button>
        <NavLink to="/">
          <h2 className="logo">Apex</h2>
        </NavLink>
      </div>
      <div className="nav-right">
        <ul className="navbar">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        {!user ? (
          <NavLink to="/login" className="btn-login">
            Login
          </NavLink>
        ) : (
          <button
            aria-label="Logout"
            type="button"
            onClick={handleLogout}
            className="flex-al-center border-none logout-btn"
          >
            LOG OUT
          </button>
        )}
      </div>
    </section>
  );
};

export default Navbar
