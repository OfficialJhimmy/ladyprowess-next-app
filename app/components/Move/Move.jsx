import React from "react";
import styles from "./move.module.css";
import Image from "next/image";
import counselor from '../../../public/Counselor.png'
import popular from '../../../public/Popular Man.png'
import moneybox from '../../../public/Money Box.png'

const Move = () => {
  return (
    <div className={styles.move__container}>
      <div className={styles.move__text}>
        <h2>Words that Move Us</h2>
        <p>
          We are always trying to improve our high standards so that you see us
          as the best in the business. We are creative, original, & unique!
        </p>
      </div>
      <div className={styles.move__slides}>
        <div className={styles.move__slides__child}>
          <Image src={counselor} alt="Brand icons" />
          <p>Free Consultation</p>
        </div>
        <div className={styles.move__slides__child}>
          <Image src={popular} alt="Brand Icons" />
          <p> Brilliant Client Service</p>
        </div>
        <div className={styles.move__slides__child}>
          <Image src={moneybox} alt="Brand Icons" />
          <p> Affordable Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Move;
