import styles from "./Friends.module.css";
import { Link } from "react-router-dom";
import steph from "../../assets/images/profile_pics/stephProf.JPG";
import chris from "../../assets/images/profile_pics/chrisProf.JPG";
import thomas from "../../assets/images/profile_pics/thomasProf.jpg";
import sharif from "../../assets/images/profile_pics/sharifPic.jpg";
const Friends: React.FC = () => {
  const fakeProfiles = [
    { initials: "CS", path: "/profile/chris", image: chris },
    { initials: "TG", path: "/profile/thomas", image: thomas },
    { initials: "SK", path: "/profile/steph", image: steph },
    { initials: "SH", path: "/profile/sharif", image: sharif },
  ];
  return (
    <div className={styles.friendsContainer}>
      <div className={styles.profileWrapper}>
        <div className={styles.profileContainer}>
          {fakeProfiles.map((profile) => (
            <Link
              to={profile.path}
              key={profile.path}
              className={styles.profileLink}
            >
              <div className={styles.profileCard}>
                <button className={styles.userProfiles}>
                  <img
                    src={profile.image}
                    alt={profile.initials}
                    className={styles.profileImage}
                  />
                </button>
                <p className={styles.profileInitials}>{profile.initials}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Friends;
