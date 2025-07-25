import React from "react";
import styles from "./index.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Fitting Room. All rights reserved.</p>
        <div className={styles.links}>
          <a href="/privacy">Privacy</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
