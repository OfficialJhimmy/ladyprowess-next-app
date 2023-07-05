import React from "react";
import styles from "./banner.module.css";
import Topmenu from "../Topmenu/Topmenu";

const ProfileBanner = () => {
  return (
    <div className={styles.profilebanner__container}>
      <Topmenu />
      <div className={styles.banner__container__description}>
        <h1>Profile</h1>
      </div>
    </div>
  );
};

export default ProfileBanner;
