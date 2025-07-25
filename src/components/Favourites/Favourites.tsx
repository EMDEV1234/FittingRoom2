import React, { useEffect, useState } from "react";
import styles from "./Favourites.module.css";

const AddFav: React.FC = () => {
  const [addFav, setAddFav] = useState<string[]>([]);

  useEffect(() => {
    const faved = JSON.parse(localStorage.getItem("addFav") || "[]");
    setAddFav(faved);
  }, []);

  const handleRemoveItem = (index: number) => {
    const updated = [...addFav];
    updated.splice(index, 1);
    setAddFav(updated);
    localStorage.setItem("addFav", JSON.stringify(updated));
  };
  const clearFavourites = () => {
    localStorage.removeItem("addFav");
    setAddFav([]);
  };
  if (addFav.length === 0) {
    return (
      <p className={styles.emptyMessage}>
        Generate images to find your favourite clothing items!
      </p>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {addFav.map((url, idx) => (
          <div key={idx} className={styles.imageWrapper}>
            <img src={url} alt={`Favourites ${idx}`} className={styles.image} />
            <button
              className={styles.removeBtn}
              onClick={() => handleRemoveItem(idx)}
              title="Remove"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button className={styles.clearButton} onClick={clearFavourites}>
        Clear Favourite Items
      </button>
    </div>
  );
};

export default AddFav;
