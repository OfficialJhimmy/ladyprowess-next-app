import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";
import lady2 from '../../../public/lady2.jpg'

const About = () => {
  return (
    <div className={styles.about__container}>

      <div className={styles.about__container__imagebox}>
        <Image
          // fill={true}
          src={lady2}
          alt="A Woman holidng a laptop inside Ladyprowess logo"
          // height={500}
        />
      </div>

      <div className={styles.about__container__description}>
        <h2>About Us</h2>
        <p>
          We are a content writing brand that provides high quality written
          materials for businesses and individuals. With a team of experienced
          and skilled writers, we strive to create engaging, informative, and
          effective content in conveying your message to your target audience.
          Whether it’s a website, blog post, product description, or any other
          content, we take the time to understand your goals and objectives and
          craft custom content that accurately reflects your brand voice and
          appeals to your target audience.
        </p>
        <Link href='/' className={styles.about__button__wrapper}>
        <button>
          Get Started
        </button>
      </Link>
      </div>
    </div>
  );
};

export default About;
