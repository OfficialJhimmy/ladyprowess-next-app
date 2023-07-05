import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterForm from "./FooterForm";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsTwitter,
} from "react-icons/bs";
import styles from "./footer.module.css";
import logo from '../../../public/Logo2.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__links}>
          <div className={styles.footer__links__top}>
            <Image src={logo} alt="Logo of the brand" />
          </div>
          <div className={styles.footer__links__child}>
            <div className={styles.footer__links__bold}>
              <Link href="/services">Services</Link>
              <Link href="/">FAQ</Link>
              <Link href="/">Help Center</Link>
              <a
                href="https://ladyprowessblog.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div>
            <div className={styles.footer__links__small}>
              <Link href="/services/content-marketing">Content Marketing</Link>
              <Link href="/services/academic-writing">Academic Writing</Link>
              <Link href="/services/blog-post">Blog Post</Link>
              <Link href="/services/seo-management">SEO Management</Link>
              <Link href="/services/custom-services">Custom Services</Link>
            </div>
          </div>
          <div className={styles.footer__links__social}>
            <a
              href="http://http://facebook.com/ladyprowess"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={20} className="footer__icon" />
            </a>
            <a
              href="https://twitter.com/ladyprowess"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={20} className="footer__icon" />
            </a>
            <a
              href="https://www.instagram.com/ladyprowess/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={20} className="footer__icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/peace-ngozi-okafor-7548b2144/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={20} className="footer__icon" />
            </a>
            <a href="mailto:admin@ladyprowess.com.ng">
              <AiOutlineMail size={20} className="footer__icon" />
            </a>
            <a href="tel:+234-816-217-4443">
              <BsTelephone size={20} className="footer__icon" />
            </a>
          </div>
        </div>
        <div className={styles.footer__form}>
          <h3>Let us know how we can help today</h3>

          <FooterForm />
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <h3>Copyright &#169;{currentYear} LADY PROWESS; ALL RIGHTS RESERVED</h3>
      </div>
    </footer>
  );
};

export default Footer;
