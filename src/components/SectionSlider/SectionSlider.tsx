import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import styles from "./SectionSlider.module.css";

interface SectionSliderProps {
  children: ReactNode;
  i: number;
  id: string;
}

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};

export default function SectionSlider({ children, i, id }: SectionSliderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (isMobile) {
    return (
      <div className={styles.cardWrapper} id={id}>
        <div className={styles.cardContainer}>{children}</div>
      </div>
    );
  }

  return (
    <motion.div
      className={styles.cardWrapper}
      id={id}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.3, once: false }}
    >
      <motion.div
        className={styles.cardContainer}
        variants={cardVariants}
        custom={i}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
