import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.innerContainer}>
        <Link href="/">
          <Image
            loading="lazy"
            src="/logo.svg"
            alt="Your Logo"
            width={80}
            height={80}
          />
        </Link>

        <div className={styles.textContainer}>
          <p>©2023 Poliambulatorio Agliana.</p>
          <p>Tutti i diritti sono riservati</p>
        </div>
        <div className={styles.socialsContainer}>
          <a
            href="https://www.facebook.com/poliambulatorioagliana"
            target="_blank"
          >
            <FiFacebook size={25} />
          </a>
          <a
            href="https://www.instagram.com/poliambulatorioagliana/"
            target="_blank"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://www.linkedin.com/company/poliambulatorio-agliana-pastacaldi/"
            target="_blank"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
