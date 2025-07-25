import styles from "./BehindTheCurtain.module.css";
import React from "react";
import person from "../../assets/images/person_devin.JPEG";
import cloth from "../../assets/images/cloth_devin.jpg";
import result from "../../assets/images/demo_devin.png";
import btcIcon from "../../assets/images/btcIcon.png";
import aiIcon from "../../assets/images/aiIcon.png";
import rightLongVector from "../../assets/images/rightLongVector.png";
import leftShortVector from "../../assets/images/leftShortVector.png";

const BehindTheCurtain = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.btcHeader}>Behind the Curtain</h2>
        <img src={btcIcon} alt="icon" className={styles.headerIcon} />
      </div>

      <div className={styles.row}>
        <img src={person} alt="Person" className={styles.image} />

        <div className={styles.textGroup}>
          <img src={leftShortVector} alt="arrow" className={styles.arrowTop} />
          <div className={styles.textBox}>
            <p>
              When you upload a photo of yourself and a clothing item, the model
              processes both images through a deep neural network that
              understands human body structure, clothing semantics, and spatial
              context.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className={styles.row2}>
        <div className={styles.textBox2}>
          <p>
            Our platform uses the IDM-VTON API, a cutting-edge diffusion-based
            virtual try-on system, to generate highly realistic outfit
            visualizations. Your data is never stored—everything runs
            server-side and is processed temporarily for your privacy.
          </p>
          <img src={aiIcon} alt="AI Icon" className={styles.cornerIcon} />
        </div>

        <img src={rightLongVector} alt="arrow" className={styles.arrowRight} />

        <div className={styles.imageGroup}>
          <img src={cloth} alt="Cloth" className={styles.image} />
          <img src={result} alt="Result" className={styles.image} />
        </div>
      </div>
      <div className={styles.text3}>
        <p>
          Our strict privacy policy ensures that your data is never saved within
          our servers; using our third party privacy partners, we retain zero
          access to consumer data ensuring you can browse your fits safely.
          Everything runs server-side through our API integration—your photos
          are processed temporarily and never stored.
        </p>
      </div>
    </div>
  );
};

export default BehindTheCurtain;
