import React from "react";
import clothBag from "../../assets/images/clothBag.png";
import clothHand from "../../assets/images/clothHand.png";
import styles from "./FutureFashion.module.css";
const FutureFashion: React.FC = () => {
  return (
    <div className={styles.futureContainer}>
      <h2 className={styles.futureHeader}>
        The Future of Fashion
        <br />
        Starts Here
      </h2>
      <div className={styles.futureRow}>
        <img src={clothBag} alt="cloth bag" className={styles.image} />
        <div className={styles.futureTextContainer}>
          <p className={styles.futureText}>
            Join a growing movement of shoppers and brands using Fitting Room to
            bring trust, precision, and sustainability to e-commerce.
          </p>
        </div>
        <img src={clothHand} alt="cloth bag" className={styles.image2} />
      </div>
    </div>
  );
};

export default FutureFashion;
