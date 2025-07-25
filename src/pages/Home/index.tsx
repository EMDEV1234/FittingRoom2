import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import RotatingText from "./RotatingText";
import revealImage from "../../assets/images/reveal_images/reveal_img1.png";
import resultImage from "../../assets/images/reveal_images/result_img1.jpg";
import revealImage2 from "../../assets/images/reveal_images/reveal_img2.png";
import resultImage2 from "../../assets/images/reveal_images/result_img2.png";
import revealImage3 from "../../assets/images/reveal_images/reveal_img3.png";
import resultImage3 from "../../assets/images/reveal_images/result_img3.png";
import revealImage4 from "../../assets/images/reveal_images/reveal_img4.png";
import resultImage4 from "../../assets/images/reveal_images/result_img4.png";
// import ImageRevealSlider from "../../components/ImageReveal/ImageRevealSlider";
import DemoVideo from "../../assets/videos/FittingRoomDemo.mp4";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  // const [frac, setFrac] = useState<number>(0.5);
  const containerRef = useRef<HTMLDivElement>(null);

  const combos = [
    { before: revealImage, after: resultImage },
    { before: revealImage2, after: resultImage2 },
    { before: revealImage3, after: resultImage3 },
    { before: revealImage4, after: resultImage4 },
  ];
  const [visibility, setVisibility] = useState(
    Array(combos.length).fill(false)
  );

  const [index, setIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibility((prev) => prev.map((v) => !v));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h3 className={styles.titleSub}>Welcome to</h3>
          <h1 className={styles.titleMain}>Fitting Room</h1>
          <p className={styles.slogan}>Shop Certain. Wear Confident.</p>
          <Link to="/tryon" className={styles.tryOnButton}>
            Try It Yourself
          </Link>
        </div>
        <div className={styles.embeddedVideo}>
          <video
            className={styles.videoBackground}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src={DemoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.sliderGallery}>
          {combos.map((combo, i) => (
            <div className={styles.fadeSwitcher} key={i}>
              <img
                src={combo.before}
                alt={`before-${i}`}
                className={`${styles.fadeImage} ${
                  !visibility[i] ? styles.visible : styles.hidden
                }`}
              />
              <img
                src={combo.after}
                alt={`after-${i}`}
                className={`${styles.fadeImage} ${
                  visibility[i] ? styles.visible : styles.hidden
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
