import React from "react";
import styles from "./index.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Fitting Room</h1>
      <h3 className={styles.blurb}>Shop Certain. Wear Confident.</h3>
      <div className={styles.textContainer}>
        <p>
          Online fashion is booming, but behind the screen lies a costly,
          unsustainable problem: returns. In the U.S. alone, 2.6 million tonnes
          of returned clothing ended up in landfills in 2020, and returns
          created 16 million tonnes of CO₂ emissions—the equivalent of 3.5
          million cars on the road for a year.
        </p>
        <p>
          Why? Because online shopping doesn't let you try things on. Poor fit
          and size guesswork account for 70% of fashion returns, and that's not
          just frustrating—it's expensive. The fashion industry faces a $218
          billion return crisis, with 24.4% of apparel orders returned and $38
          billion lost in returns in the U.S. in 2023 alone.
        </p>
        <p className={styles.boldText}>Fitting Room exists to fix that.</p>
        <p>
          We give shoppers the ability to try on clothes virtually before
          purchasing—so they can buy with confidence, not uncertainty. Powered
          by advanced AI, our app lets users upload a photo, select garments,
          and see a realistic preview of how they'll look and fit on their
          unique body. No more guesswork. No more cart anxiety. No more
          avoidable returns.
        </p>
      </div>
      <div className={styles.Different}>
        <h3 className={styles.subHeader}>What Makes Fitting Room Different?</h3>
        <ul className={styles.differentList}>
          <li>
            ✅<span className={styles.boldText}>See Before You Spend</span> -
            Get a realistic preview of each garment on your body before buying.
          </li>
          <li>
            🔄
            <span className={styles.boldText}>
              Fewer Returns, More Confidence
            </span>{" "}
            - Eliminate sizing mistakes that lead to costly returns.
          </li>
          <li>
            🔒<span className={styles.boldText}>Privacy-First Tech</span> -
            Uploaded images are processed securely and deleted immediately after
            your session.
          </li>
          <li>
            🌱<span className={styles.boldText}>Better for the Planet</span> -
            Fewer returns mean fewer emissions, less waste, and a more
            sustainable fashion ecosystem.
          </li>
        </ul>
        <p>
          What makes it special? It's powered by high-performance NVIDIA GPUs,
          the same technology used in the most advanced graphics and deep
          learning systems today.
        </p>
        <p>
          This means every image is processed quickly and precisely, giving you
          a seamless, real-time experience with no lag, no waiting, and no
          guesswork. Just smart, instant results that help you shop smarter and
          feel more confident about what you wear.
        </p>
      </div>
      <div className={styles.Mission}>
        <h3 className={styles.subHeader}>Our Mission</h3>
        <p>
          Fitting Room is here to transform the way people shop online. We
          believe that everyone should have the tools to shop smarter, feel good
          in what they wear, and contribute to a more responsible fashion
          future. By giving users confidence in fit and style, we help brands
          reduce losses, shoppers reduce stress, and the planet breathes a
          little easier.
        </p>
      </div>
      <div className={styles.Future}>
        <h3 className={styles.subHeader}>The Future of Fashion Starts Here</h3>
        <p>
          Join a growing movement of shoppers and brands using Fitting Room to
          bring trust, precision, and sustainability to e-commerce. Whether
          you're browsing your next favorite outfit or launching a fashion
          label, one thing is certain:
        </p>
        <p className={styles.boldText}>Shop Certain. Wear Confident.</p>
      </div>
    </div>
  );
};

export default About;
