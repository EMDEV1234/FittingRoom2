import React from "react";
import styles from "./index.module.css";

import demoImage from "../../assets/images/person_00_cloth_00.png";
import clothImage from "../../assets/images/cloth_00.png";
import personImage from "../../assets/images/person_00.jpg";
import personImage2 from "../../assets/images/person_02.png";
import personImage3 from "../../assets/images/person_03.png";
import demoImage2 from "../../assets/images/demo_02.png";
import demoImage3 from "../../assets/images/demo_03.png";

import devinPerson from "../../assets/images/person_devin.JPEG";
import devinCloth from "../../assets/images/cloth_devin.jpg";
import devinDemo from "../../assets/images/demo_devin.png";

import ClickIcon from "../../components/ClickIcon/ClickIcon";
import RotatingText from "../Home/RotatingText";
import Different from "../../components/Different/Different";
import BehindTheCurtain from "../../components/BehindTheCurtain/BehindTheCurtain";
import FutureFashion from "../../components/FutureFashion/FutureFashion";
import WhyFT from "../../components/WhyFT/WhyFT";
import { useInView } from "react-intersection-observer";

import HorizontalText from "../../components/HorizontalText/HorizontalText";
import PossibilitiesEquation from "../../components/Possibilities/Possibilities";

const Info: React.FC = () => {
  const sentences = [
    // "Shop Certain. Wear Confident.",
    "No Guessing. Just Dressing.",
    "Click It. Fit it. Rock it.",
    "Fits Made Certain.",
    // "Confidence in Every Click",
    "Confidence Looks Good on You",
  ];

  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.45 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.45 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.45 });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Confidence in Every Click</h1>
        <div className={styles.clickIcon}>
          <ClickIcon />
        </div>
        <div className={styles.RotatingTextContainer}>
          <RotatingText
            sentences={sentences}
            typingSpeed={50}
            delayBetweenSentences={1000}
          />
        </div>
      </div>

      <div className={styles.introSection}>
        <div className={styles.introText}>
          <h2>Our Mission</h2>
        </div>
        <div className={styles.ourMissionContainer}>
          <div className={`${styles.missionBox} ${styles.missionOne}`}>
            <p>Fitting Room is here to transform the way people shop online.</p>
          </div>
          <div className={`${styles.missionBox} ${styles.missionTwo}`}>
            <p>
              We believe that everyone should have the tools to shop smarter,
              feel good in what they wear, and contribute to a more responsible
              fashion future.
            </p>
          </div>
          <div className={`${styles.missionBox} ${styles.missionThree}`}>
            <p>
              By giving users confidence in fit and style, we help brands reduce
              losses, shoppers reduce stress, and the planet breathes a little
              easier.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.whyFittingRoom}>
        <WhyFT />
      </div>
      <div className={styles.Possibilities}>
        <PossibilitiesEquation
          combos={[
            {
              person: personImage,
              cloth: clothImage,
              result: demoImage,
            },
            {
              person: personImage2,
              cloth: clothImage,
              result: demoImage2,
            },
            {
              person: personImage3,
              cloth: clothImage,
              result: demoImage3,
            },
          ]}
        />
      </div>

      <div className={styles.aboutContainer}>
        <Different />
      </div>
      <div className={styles.behindTheCurtainContainer}>
        <BehindTheCurtain />
      </div>

      <div className={styles.closingContainer}>
        <FutureFashion />
        <HorizontalText />
      </div>
    </div>
  );
};

export default Info;
