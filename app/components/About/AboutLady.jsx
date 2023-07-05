import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import rect7 from '../../../public/Rectangle 7.png'
import rect38 from '../../../public/Rectangle 38.png'
import rect37 from '../../../public/Rectangle 37.png'
import rect39 from '../../../public/Rectangle 39.png'

const AboutLady = () => {
  return (
    <div className={styles.aboutlady__container}>
      <div className={styles.aboutlady__container__image}>
        <div className={styles.aboutlady__image__right}>
          
          <Image
            src={rect7}
            alt="Brand ambassador of Ladyprowess"
            
          />
          <Image
            src={rect38}
            alt="Brand ambassador of Ladyprowess2"
          
          />
        </div>
        <div className={styles.aboutlady__image__left}>
          <Image
            src={rect37}
            alt="Brand ambassador of Ladyprowess3"
           
          />
          <Image
            src={rect39}
            alt="Brand ambassador of Ladyprowess4"
        
          />
        </div>
      </div>
      <div className={styles.aboutlady__container__text}>
        <h2>About the Company</h2>
        <p>
          Welcome to Lady Prowess, your go-to destination for exceptional
          content writing services! At Lady Prowess, we take pride in our
          ability to deliver outstanding content that meets and exceeds your
          expectations. Our team of skilled writers possesses the expertise and
          creativity to provide you with compelling and engaging written
          materials across various domains. At Lady Prowess, we are passionate
          about delivering exceptional content that helps you achieve your
          goals. Our commitment to quality, creativity, and customer
          satisfaction sets us apart. Contact us today, and let us elevate your
          brand's presence with our premium content writing services.
        </p>
      </div>
    </div>
  );
};

export default AboutLady;
