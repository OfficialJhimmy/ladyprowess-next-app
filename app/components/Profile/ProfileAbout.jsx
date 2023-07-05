import React from "react";
import styles from "./profileabout.module.css";
import Image from "next/image";
import { BiMailSend } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import lady3 from '../../../public/lady3.jpg'
import lady1 from '../../../public/lady1.jpg'

const ProfileAbout = () => {
  return (
    <div className={styles.profileabout__container}>
      <div className={styles.profile__container__top}>
        <div className={styles.profile__container__top__image}>
        <Image src={lady3} alt="Lady Prowess"/>
        </div>
        <div className={styles.profile__container__top__text}>
          <h2>About Me</h2>
          <p>
            My name is Okafor, Peace Ngozi a Technical and Crypto Writer with
            love for Web3 and Blockchain. I am learning how to write more
            meaningful code & building web applications. I am passionate about
            crafting compelling and engaging stories. My writing experience
            spans a range of industries, from tech and finance to lifestyle and
            travel. I am also familiar with creating documentations, web copy,
            memos, reports, and whitepapers. I love Tech and I am interested in
            exploring the tech and web3 industry.
          </p>

          <div className={styles.profile__resume}>
            <div className={styles.profile__resume__socials}>
              <a href="mailto:admin@ladyprowess.com.ng">
                <BiMailSend size={25} fill="#507B80" />
              </a>
              <a
                href="https://www.linkedin.com/in/peace-ngozi-okafor-7548b2144/"
                target="_blank"
                rel="oopener noreferrer"
              >
                <BsLinkedin size={25} fill="#507B80" />
              </a>
              <a
                href="https://twitter.com/ladyprowess"
                target="_blank"
                rel="oopener noreferrer"
              >
                <BsTwitter size={25} fill="#507B80" />
              </a>
              <a
                href="https://www.instagram.com/ladyprowess/"
                target="_blank"
                rel="oopener noreferrer"
              >
                <BsInstagram size={25} fill="#507B80" />
              </a>
              <a
                href="https://github.com/Ladyprowess"
                target="_blank"
                rel="oopener noreferrer"
              >
                <BsGithub size={25} fill="#507B80" />
              </a>
            </div>
            <div className={styles.profile__resume__cv}>
              <a
                href="https://docs.google.com/presentation/d/1lwMAbsPkRhlgkSdhHYYM5km7zNd6bN2kM49rUV8xeCw/edit#slide=id.gc6f80d1ff_0_0"
                target="_blank"
                rel="oopener noreferrer"
              >
                <AiOutlineDownload size={20} fill="#507B80" />
                My Résumé
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profile__container__bottom}>
        <div className={styles.profile__container__bottom__text}>
          <h2>Professional Records</h2>
          <p>
            Whether you need blog posts, articles, whitepapers, or technical
            article, website content, I have the skills and experience to bring
            your vision to life. My writing process is thorough, and I work
            closely with clients to ensure that their content accurately
            reflects their brand and messaging. Also, I have much experience
            writing product descriptions, SaaS, and B2B articles. With a keen
            eye for detail and a knack for researching complex topics, I have
            developed a reputation for delivering high-quality, well-researched
            content that informs, educates, and captivates audiences. My writing
            style is adaptable, and I take pride in my ability to craft content
            that speaks to my client’s target audience.
          </p>
        </div>
        <div className={styles.profile__container__bottom__image}>
        <Image src={lady1} alt="Brand Ambassadors" />
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
