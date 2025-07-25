import styles from "./WhyFT.module.css";
const WhyFT: React.FC = () => {
  return (
    <div className={styles.whyFTContainer}>
      <div className={styles.whyFTHeader}>
        <h2 className={styles.topHeader}>Why Fitting Room?</h2>
        <h3 className={styles.subHeader}>
          Online fashion is booming, but behind the screen lies a costly,
          unsustainable problem:{" "}
          <span className={styles.bubbleText}>returns</span>
        </h3>
      </div>
    </div>
  );
};
export default WhyFT;
