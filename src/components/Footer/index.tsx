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
            alt="logo"
            width={100}
            height={100}
          />
        </Link>

        <div className={styles.textContainer}>
          <p>©2023 Centro Medico Agliana.</p>
          <p>Partita IVA: 01393880479</p>
          <a href="mailto: centromedicoagliana@pec.it">
            PEC: centromedicoagliana@pec.it
          </a>
        </div>
        <div className={styles.socialsContainer}>
          <a
            href="https://www.facebook.com/studiomedicoagliana"
            target="_blank"
          >
            <FiFacebook size={25} />
          </a>
          <a
            href="https://www.instagram.com/centro-medico-agliana/"
            target="_blank"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://www.linkedin.com/company/centro-medico-agliana/"
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
