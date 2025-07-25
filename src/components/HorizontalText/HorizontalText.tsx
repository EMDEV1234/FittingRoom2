import React from "react";
import Marquee, { MarqueeProps } from "react-fast-marquee";
import styles from "./HorizontalText.module.css";
const HorizontalText: React.FC = () => {
  const marqueeProps: MarqueeProps = {
    speed: 40,
    gradient: false,
    pauseOnHover: false,
  };

  return (
    <Marquee {...marqueeProps}>
      <div className={styles.marqueeText}>
        {" "}
        Fitting Room. Shop Certain. Wear Confident.™ Fitting Room. Shop Certain.
        Wear Confident.™ Fitting Room. Shop Certain. Wear Confident.™ Fitting
        Room. Shop Certain. Wear Confident.™ Fitting Room. Shop Certain. Wear
        Confident.™ Fitting Room. Shop Certain. Wear Confident.™ Fitting Room.
        Shop Certain. Wear Confident.™
      </div>
    </Marquee>
  );
};

export default HorizontalText;
