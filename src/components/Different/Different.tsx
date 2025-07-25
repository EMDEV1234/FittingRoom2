import React from "react";
import styles from "./Different.module.css";
import spend from "../../assets/images/spend.png";
import returns from "../../assets/images/returns.png";
import privacy from "../../assets/images/privacy.png";
import planet from "../../assets/images/planet.png";
import { useInView } from "react-intersection-observer";

const Different: React.FC = () => {
  const cards = [
    {
      refKey: "ref1",
      title: "See Before You Spend",
      text: (
        <>
          Get a <span className={styles.specialWord}>realistic</span> preview of
          each item on your body before buying.
        </>
      ),
      icon: spend,
      iconClass: styles.cardIconSpend,
    },
    {
      refKey: "ref2",
      title: "No returns,\nAbsolute Certainty",
      text: (
        <>
          <span className={styles.specialWord}>Eliminate</span> sizing mistakes
          that lead to costly returns.
        </>
      ),

      icon: returns,
      iconClass: styles.cardIconReturns,
    },
    {
      refKey: "ref3",
      title: "Privacy-First Tech",
      text: (
        <>
          Uploaded images are processed securely and{" "}
          <span className={styles.specialWord}>deleted</span> immediately after
          your session.
        </>
      ),
      icon: privacy,
      iconClass: styles.cardIconPrivacy,
    },
    {
      refKey: "ref4",
      title: "Better for the Planet",
      text: (
        <>
          Fewer returns mean fewer emissions, less waste, and a more{" "}
          <span className={styles.specialWord}>sustainable</span> fashion
          ecosystem.
        </>
      ),
      icon: planet,
      iconClass: styles.cardIconPlanet,
    },
  ];

  return (
    <div className={styles.differentContainer}>
      <h2 className={styles.differentHeader}>
        What Makes Fitting Room Different?
      </h2>

      <div className={styles.gridWrapper}>
        {cards.map((card, i) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.4,
          });

          return (
            <div
              key={i}
              ref={ref}
              className={`${styles.card} ${inView ? styles.cardVisible : ""}`}
            >
              <div className={styles.cardText}>
                {card.title.split("\n").map((line, idx) => (
                  <h2 key={idx}>
                    {line}
                    {idx === 0 && card.title.includes("\n") ? <br /> : null}
                  </h2>
                ))}
                <p>{card.text}</p>
              </div>
              <img src={card.icon} alt="Icon" className={card.iconClass} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Different;
