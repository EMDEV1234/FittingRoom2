import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./ExampleProfile.module.css";
import chrisPic from "../../assets/images/profile_pics/chrisProf.JPG";
import thomasPic from "../../assets/images/profile_pics/thomasProf.jpg";
import stephPic from "../../assets/images/profile_pics/stephProf.JPG";
import sharifPic from "../../assets/images/profile_pics/sharifPic.jpg";
import chris1 from "../../assets/images/profile_pics/chris1.png";
import chris2 from "../../assets/images/profile_pics/chris2.png";
import chris3 from "../../assets/images/profile_pics/chris3.png";
import chris4 from "../../assets/images/profile_pics/chris4.png";
import chris5 from "../../assets/images/profile_pics/chris5.png";
import chris6 from "../../assets/images/profile_pics/chris6.png";

import chris7 from "../../assets/images/profile_pics/chris7.png";

import thomas1 from "../../assets/images/profile_pics/thomas1.png";
import thomas2 from "../../assets/images/profile_pics/thomas2.png";
import thomas3 from "../../assets/images/profile_pics/thomas3.png";
import thomas4 from "../../assets/images/profile_pics/thomas4.png";
import thomas5 from "../../assets/images/profile_pics/thomas5.png";

import thomas6 from "../../assets/images/profile_pics/thomas6.png";

import steph1 from "../../assets/images/profile_pics/steph1.png";
import steph2 from "../../assets/images/profile_pics/steph2.png";
import steph3 from "../../assets/images/profile_pics/steph3.png";
import steph4 from "../../assets/images/profile_pics/steph4.png";

import steph5 from "../../assets/images/profile_pics/steph5.png";
import sharif1 from "../../assets/images/profile_pics/sharif1.png";
import sharif2 from "../../assets/images/profile_pics/sharif2.png";
import sharif3 from "../../assets/images/profile_pics/sharif3.png";
import sharif4 from "../../assets/images/profile_pics/sharif4.png";

import sharif5 from "../../assets/images/profile_pics/sharif5.png";
import sharif6 from "../../assets/images/profile_pics/sharif6.png";

const profiles: Record<
  string,
  {
    name: string;
    bio: string;
    userName: string;
    favoriteFit: string;
    image: string;
    brands: string;
    gallery: string[];
    follower: number;
    following: number;
  }
> = {
  chris: {
    name: "Chris Stride",
    bio: "Co-Founder",
    userName: "sincerelyc.s",
    favoriteFit: "Velvet tuxedo, shiny black shoes",
    image: chrisPic,
    brands: "Tom Ford, Hermes, Burberry, Rolex, Hugo Boss",
    gallery: [chris4, chris2, chris3, chris1, chris5, chris6, chris7],
    follower: 1897,
    following: 78,
  },
  thomas: {
    name: "Thomas Goldie",
    bio: "Co-Founder",
    userName: "goldie",
    favoriteFit: "Sweater, camo-pants, matching sneakers",
    image: thomasPic,
    brands: "Balenciaga, Off-White, Zara, J.Crew",
    gallery: [thomas1, thomas2, thomas3, thomas4, thomas5, thomas6],
    follower: 352,
    following: 1286,
  },
  steph: {
    name: "Stephanie Kim",
    bio: "Lead Software Engineer",
    userName: "steph_kimmy",
    favoriteFit: "White t-shirt, baggy jeans, colorful sneakers",
    image: stephPic,
    brands: "Free People, Abercromie, Urban Outfitters",
    gallery: [steph4, steph1, steph2, steph3, steph5],
    following: 112,
    follower: 129,
  },
  sharif: {
    name: "Sharif Hasson",
    bio: "Lead DevOps",
    userName: "sharifhasson",
    favoriteFit: "Collared shirt, khakis, slip-ons",
    image: sharifPic,
    brands: "Nike, H&M, Banana Republic",
    gallery: [sharif1, sharif2, sharif3, sharif4, sharif5, sharif6],
    following: 100,
    follower: 100,
  },
};

const ExampleProfile: React.FC = () => {
  const { profilename } = useParams();
  const profile = profilename ? profiles[profilename] : null;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  if (!profile) {
    return (
      <div className={styles.profilePage}>
        <h1>User not found</h1>
        <Link to="/friends" className={styles.backLink}>
          ← Back to Friends
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.profilePage}>
      <div className={styles.headerBox}>
        <div className={styles.profileCard}>
          <img
            src={profile.image}
            alt={profile.name}
            className={styles.profileImage}
          />
        </div>
      </div>

      <div className={styles.profileContent}>
        <h1 className={styles.title}>{profile.name}</h1>
        <h2 className={styles.userName}>@{profile.userName}</h2>

        <div className={styles.followingContainer}>
          <div className={styles.followingNumber}>
            <p>{profile.follower.toLocaleString()}</p>
            <p className={styles.follwingtext}>Followers</p>
          </div>
          <div className={styles.followingNumber}>
            <p>{profile.following.toLocaleString()}</p>
            <p className={styles.follwingtext}>Following</p>
          </div>
        </div>

        <p className={styles.bio}>Bio: {profile.bio}</p>

        <h2 className={styles.galleryText}>My Fits</h2>
        <div className={styles.galleryWrapper}>
          {profile.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`fit-${i}`}
              className={styles.galleryImage}
            />
          ))}
        </div>

        <h2 className={styles.sectionTitle}>More about my style:</h2>
        <div className={styles.aboutUser}>
          <div className={styles.infoCard}>
            <strong>Find me in:</strong>
            <p>{profile.favoriteFit}</p>
          </div>
          <div className={styles.infoCard}>
            <strong>Wearing:</strong>
            <p>{profile.brands}</p>
          </div>
        </div>

        <Link to="/shopping" className={styles.backLink}>
          ← Back to Shopping
        </Link>
      </div>
    </div>
  );
};
export default ExampleProfile;
