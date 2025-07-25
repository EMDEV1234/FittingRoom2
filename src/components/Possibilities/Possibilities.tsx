import React, { useEffect, useState } from "react";
import styles from "./Possibilities.module.css";

type Combo = {
  person: string;
  cloth: string;
  result: string;
};

type Props = {
  combos: Combo[];
};

const PossibilitiesEquation: React.FC<Props> = ({ combos }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % combos.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [combos.length]);

  return (
    <div className={styles.equationContainer}>
      <h2 className={styles.imageContainerHeader}>Possibilities are Endless</h2>
      <div className={styles.imageContainer}>
        <div className={styles.imageDemo}>
          <div className={styles.imageBlock}>
            <div className={styles.imageStack}>
              {combos.map((combo, i) => (
                <img
                  key={`person-${i}`}
                  src={combo.person}
                  alt="Person"
                  className={`${styles.image} ${
                    i === index ? styles.visible : ""
                  }`}
                />
              ))}
            </div>
            <span className={styles.imageLabel}>Person</span>
          </div>

          <p>+</p>

          <div className={styles.imageBlock}>
            <div className={styles.imageStack}>
              {combos.map((combo, i) => (
                <img
                  key={`cloth-${i}`}
                  src={combo.cloth}
                  alt="Cloth"
                  className={`${styles.image} ${
                    i === index ? styles.visible : ""
                  }`}
                />
              ))}
            </div>
            <span className={styles.imageLabel}>Garment</span>
          </div>

          <p>=</p>

          <div className={styles.imageBlock}>
            <div className={styles.imageStack}>
              {combos.map((combo, i) => (
                <img
                  key={`result-${i}`}
                  src={combo.result}
                  alt="Generated"
                  className={`${styles.image} ${
                    i === index ? styles.visible : ""
                  }`}
                />
              ))}
            </div>
            <span className={styles.imageLabel}>Generated</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PossibilitiesEquation;
