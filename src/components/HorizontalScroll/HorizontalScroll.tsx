import React from "react";
import styles from "./HorizontalScroll.module.css";

type ImageItem = {
  id: string;
  image: string;
};

type HorizontalScrollProps = {
  images: ImageItem[];
  speed?: number;
};

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  images,
  speed = 20000,
}) => {
  const speedStyle = { "--speed": `${speed}ms` } as React.CSSProperties;

  return (
    <div className={styles.inner}>
      <div className={styles.wrapper}>
        {[0, 1, 2].map((i) => (
          <section key={i} style={speedStyle} className={styles.section}>
            {images.map(({ id, image }) => (
              <div className={styles.imageBox} key={`${i}-${id}`}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export { HorizontalScroll };
