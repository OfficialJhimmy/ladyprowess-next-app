import styles from "./services.module.css";
import Image from "next/image";
import ServicesData from "../data/ServicesData";
import Link from "next/link";



const Services = () => {
  
  return (
    <div className={styles.services__container}>
      <div className={styles.services__container__top}>
        <h2>Services</h2>
        <p>
          Our content writing brand offers a wide range of services to help
          businesses <br />
          and individuals achieve their goals through the power of words.
        </p>
      </div>
      <div className={styles.services__container__bottom}>
        {ServicesData.map((service) => (
          <Link
            className={styles.services__container__bottom__child}
            key={service.heading}
            href={service.href}
          >
            <div className={styles.services__icon_box}>
              <Image
                src={service.img}
                alt="an icon that talks about the services of ladyprowess"
                width={50}
                height={50}
              />
            </div>
            <h3>{service.heading}</h3>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
