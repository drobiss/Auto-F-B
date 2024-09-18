import { NavLink } from "react-router-dom";
import "../components/Navbar.css";
import CtaButton from "./CtaButton";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header>
      <nav className={`navbar ${visible ? '' : 'nav-hidden'}`}>
        <h3>Auto F&B</h3>

        <div className="nav-links-container">
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
        </div>

        <CtaButton />
      </nav>
    </header>
  );
};

export default Navbar;