import React from 'react'
import Topmenu from '../Topmenu/Topmenu'
import styles from './banner.module.css'


const ServicesBanner = ({heading}) => {
  return (
    <div className={styles.profilebanner__container}>
    <Topmenu />
    <div className={styles.banner__container__description}>
      <h1>{heading}</h1>
    </div>
  </div>
  )
}

export default ServicesBanner