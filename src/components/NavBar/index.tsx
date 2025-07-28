import React, { useState } from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

const logo = "/FTLogo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.navContainer}>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoContent}>
            <img src={logo} alt="logo" className={styles.logoImage} />
            Fitting Room
          </span>
        </NavLink>

        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
          <li>
            <NavLink
              to="/tryon"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? styles.activeTryOn : styles.navButton
              }
            >
              Try On
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/info"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? styles.activeInfo : styles.navButton
              }
            >
              Info
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shopping"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? styles.activeShopping : styles.navButton
              }
            >
              Shopping
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/partners"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? styles.activePartners : styles.navButton
              }
            >
              Partners
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? styles.activeContact : styles.navButton
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
