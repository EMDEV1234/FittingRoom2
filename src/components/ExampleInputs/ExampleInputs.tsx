import React, { useState } from "react";
import styles from "./ExampleInputs.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type ExampleCarouselProps = {
  images: string[];
  label: string;
};

const ExampleInputs: React.FC<ExampleCarouselProps> = ({ images, label }) => {
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  return (
    <div className={styles.carouselContainer}>
      <p className={styles.label}>{label}</p>
      <div className={styles.carousel}>
        <button onClick={handlePrev} className={styles.arrow}>
          <FaChevronLeft />
        </button>
        <img
          src={images[index]}
          alt={`${label} example ${index + 1}`}
          className={styles.image}
        />
        <button onClick={handleNext} className={styles.arrow}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
export default ExampleInputs;
