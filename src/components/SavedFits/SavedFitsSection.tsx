import React, { useEffect, useState } from "react";
import styles from "./SavedFitsSection.module.css";

const SavedFitsSection: React.FC = () => {
  const [savedFits, setSavedFits] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedFits") || "[]");
    setSavedFits(saved);
  }, []);

  const clearFits = () => {
    localStorage.removeItem("savedFits");
    setSavedFits([]);
  };

  if (savedFits.length === 0) {
    return (
      <p className={styles.emptyMessage}>
        Try on clothes and click save to see here!
      </p>
    );
  }
  const handleRemoveFit = (index: number) => {
    const updated = [...savedFits];
    updated.splice(index, 1);
    setSavedFits(updated);
    localStorage.setItem("savedFits", JSON.stringify(updated));
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {savedFits.map((url, idx) => (
          <div key={idx} className={styles.imageWrapper}>
            <img
              key={idx}
              src={url}
              alt={`Saved Fit ${idx}`}
              className={styles.image}
            />
            <button
              className={styles.removeBtn}
              onClick={() => handleRemoveFit(idx)}
              title="Remove"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button className={styles.clearButton} onClick={clearFits}>
        Clear Saved Fits
      </button>
    </div>
  );
};

export default SavedFitsSection;
