import { HiOutlineCursorClick } from "react-icons/hi";
import styles from "./ClickIcon.module.css";

const ClickIcon = () => {
  return (
    <div className={styles.clickIconWrapper}>
      <HiOutlineCursorClick className={styles.clickIcon} />
    </div>
  );
};

export default ClickIcon;
