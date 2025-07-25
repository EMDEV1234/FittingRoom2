// components/ImageRevealSlider.tsx
import React, { useState, useRef } from "react";
import styles from "./ImageRevealSlider.module.css";

type Props = {
  baseImage: string;
  overlayImage: string;
};

const ImageRevealSlider: React.FC<Props> = ({ baseImage, overlayImage }) => {
  const [frac, setFrac] = useState(1.0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slide = (clientX: number) => {
    const bounds = containerRef.current!.getBoundingClientRect();
    if (clientX <= bounds.left) return setFrac(0);
    if (clientX >= bounds.right) return setFrac(1);
    setFrac((clientX - bounds.left) / bounds.width);
  };

  const startDrag = (downEvent: React.MouseEvent | React.TouchEvent) => {
    downEvent.preventDefault();
    const move = (e: MouseEvent | TouchEvent) =>
      slide("touches" in e ? e.touches[0].clientX : e.clientX);
    const stop = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
  };

  return (
    <div ref={containerRef} className={styles.sliderContainer}>
      <img src={baseImage} alt="base" className={styles.baseImage} />
      <img
        src={overlayImage}
        alt="overlay"
        className={styles.overlayImage}
        style={{
          clipPath: `polygon(0 0, ${frac * 100}% 0, ${
            frac * 100
          }% 100%, 0 100%)`,
        }}
      />
      <div
        className={styles.sliderLine}
        style={{ left: `${frac * 100}%` }}
      ></div>
      <div
        className={styles.sliderHandle}
        style={{ left: `calc(${frac * 100}% - 10px)` }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      ></div>
    </div>
  );
};

export default ImageRevealSlider;
