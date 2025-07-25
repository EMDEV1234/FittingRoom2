import React from "react";
import styles from "./SideBar.module.css";
import {
  FaBookmark,
  FaHeart,
  FaShoppingBasket,
  FaTags,
  FaUserPlus,
} from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

const items = [
  { label: "Saved Fits", id: "saved", icon: <FaBookmark /> },
  { label: "My Favourites", id: "favourites", icon: <FaHeart /> },
  { label: "Favourite Brands", id: "brands", icon: <FaTags /> },
  {
    label: "Connect with Friends",
    id: "connectwithfriends",
    icon: <FaUserPlus />,
  },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {items.map(({ label, icon, id }) => (
        <a key={id} href={`#${id}`} className={styles.sidebarItem}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.label}>{label}</span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
