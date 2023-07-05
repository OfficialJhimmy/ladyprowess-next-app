import React from 'react'
import Topmenu from '../Topmenu/Topmenu'
import styles from './banner.module.css'


const AboutBanner = () => {
  return (
    <div className={styles.aboutbanner__container}>
      <Topmenu/>
        <div className={styles.banner__container__description}>
        <h1>
          About Us
        </h1>
        <p>
        We at Lady Prowess want to demonstrate that putting the success of your audience first can be scaled.
        </p>
        </div>
    </div>
  )
}

export default AboutBanner