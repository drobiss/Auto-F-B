import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../components/Navbar.css";
import CtaButton from "./CtaButton";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`navbar ${visible ? '' : 'nav-hidden'} ${isOpen ? 'nav-open' : ''}`}>
        <Link to="/" className="logo-link"><h3>Auto F&B</h3></Link>

        <div className={`nav-links-container ${isOpen ? 'show' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : "nonactiveLink")}
          >
            Domů
          </NavLink>

          <NavLink
            to="/cenik"
            className={({ isActive }) => (isActive ? "activeLink" : "nonactiveLink")}
          >
            Ceník
          </NavLink>

          <NavLink
            to="/sluzby"
            className={({ isActive }) => (isActive ? "activeLink" : "nonactiveLink")}
          >
            Služby
          </NavLink>

          <NavLink
            to="/onas"
            className={({ isActive }) => (isActive ? "activeLink" : "nonactiveLink")}
          >
            O nás
          </NavLink>

          <CtaButton />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;