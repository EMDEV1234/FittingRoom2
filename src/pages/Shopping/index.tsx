import React from "react";
import styles from "./index.module.css";
import SavedFitsSection from "../../components/SavedFits/SavedFitsSection";
import AddFav from "../../components/Favourites/Favourites";
import Brands from "../../components/Brands/Brands";
import Friends from "../../components/Friends/Friends";
import Sidebar from "../../components/SideBar/SideBar";
import SectionSlider from "../../components/SectionSlider/SectionSlider";

const sections = [
  { id: "saved", label: "Saved fits", component: <SavedFitsSection /> },
  { id: "favourites", label: "My Favourites", component: <AddFav /> },
  { id: "brands", label: "Favourite Brands", component: <Brands /> },
  {
    id: "connectwithfriends",
    label: "My Friends (beta)",
    component: <Friends />,
  },
];

const Shopping: React.FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>
        {sections.map((s, i) => (
          <SectionSlider key={s.id} i={i} id={s.id}>
            <div className={styles.sectionWrapper}>
              <h2 className={styles.sectionHeader}>{s.label}</h2>
              {s.component}
            </div>
          </SectionSlider>
        ))}
      </main>
    </div>
  );
};

export default Shopping;
