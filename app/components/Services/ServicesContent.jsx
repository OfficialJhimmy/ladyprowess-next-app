import React from "react";
import styles from "./services.module.css";
import ServicesForm from "./ServicesForm";

const ServicesContent = ({ heading, description }) => {
  return (
    <div className={styles.servicescontent__container}>
      <div className={styles.servicescontent__topHeading}>
        <h2>Send Us an Email for Everything on {heading}</h2>
      </div>
      <div className={styles.services__content__children}>
        <div className={styles.services__content__child}>
          <h2 className={styles.services__content__heading}>{heading}</h2>
          <p className={styles.services__content__para}>{description}</p>
        </div>
        <div className={styles.services__content__child}>
          <ServicesForm />
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
