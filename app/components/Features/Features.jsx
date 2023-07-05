import React from "react";
import Image from "next/image";
import styles from "./features.module.css";
import money from '../../../public/Stack of Money.png'
import bestseller from '../../../public/Best Seller.png'
import support from '../../../public/Technical Support.png'

const Features = () => {
  return (
    <div className={styles.banner__container__box}>
      <div className={styles.banner__container__box__child}>
        <div className={styles.banner__icon_box}>
          <Image
            src={money}
            alt="an icon that talks about the features of ladyprowess"
            
          />

        </div>
        <h2>Affordable</h2>
        <p>
          Get quality content with prices that you do not need to break the
          bank. We are budget friendly
        </p>
      </div>
      <div className={styles.banner__container__box__child}>
        <div className={styles.banner__icon_box}>
          <Image
            src={bestseller}
            alt="an icon that talks about the features of ladyprowess"
            
          />
        </div>
        <h2>Best Service</h2>
        <p>
          Get quality content with prices that you do not need to break the
          bank. We are budget friendly
        </p>
      </div>
      <div className={styles.banner__container__box__child}>
        <div className={styles.banner__icon_box}>
          <Image
            src={support}
            alt="an icon that talks about the features of ladyprowess"
            
          />
        </div>
        <h2>Constant Support</h2>
        <p>
          Get quality content with prices that you do not need to break the
          bank. We are budget friendly
        </p>
      </div>
    </div>
  );
};

export default Features;
