import React from "react";
import styles from "./goals.module.css";
import Image from "next/image";
import goal from '../../../public/Goal.png'
import lens from '../../../public/Microsoft HoloLens.png'
import goals from '../../../public/goals.png'
import rect9 from '../../../public/Rectangle 9.png'

const Goals = () => {
  return (
    <div className={styles.goals__container}>
      <div className={styles.goals__container__text}>
        <div className={styles.goals__text__mission__container}>
          <div className={styles.goals__aims__text}>
            <Image src={goal} alt="Mission goals" />
            <h3>Mission</h3>
            <p>
              To create compelling and engaging content that informs, educates,
              and inspires our audience while meeting the needs of our clients.
            </p>
          </div>

         
        </div>
        <div className={styles.goals__text__vision__container}>
          <div className={styles.goals__aims__text}>
            <Image src={lens} alt="Vision goals" />
            <h3>Vision</h3>
            <p>
              To be the leading content writing brand known for producing
              high-quality, impactful content that drives results for our
              clients and creates a positive impact on society.
            </p>
          </div>
          
        </div>
      </div>
      <div className={styles.goals__container__image}>
        <Image src={goals} alt="A Ladyprowess ambassador" className={styles.show_on_laptop} />
        <Image src={rect9} alt="A Ladyprowess ambassador" className={styles.hide_on_laptop} />
      </div>
    </div>
  );
};

export default Goals;
