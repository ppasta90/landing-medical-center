"use client";

import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useMedia } from "react-use";

type HeaderProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const DrawerMenu = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  return (
    <div className={styles.drawerContainer}>
      <AiOutlineClose
        className={styles.closeDrawer}
        onClick={toggleDrawer}
        size={30}
      />

      <ul className={styles.drawerItemsList}>
        <li>
          <Link href="/specialisti">SPECIALISTI</Link>
        </li>
        <li>
          <Link href="/chi-siamo">DOVE SIAMO</Link>
        </li>
        <li>
          <Link href="/contatti">CONTATTI</Link>
        </li>
      </ul>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ isOpen, toggleDrawer }) => {
  const isMobile = useMedia("(max-width: 768px)");

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.svg" alt="Your Logo" width={120} height={120} />
        </Link>
      </div>
      {!isMobile && (
        <div className={styles.nav}>
          <nav>
            <ul>
              <li>
                <Link href="#specializations">SPECIALISTI</Link>
              </li>
              <li>
                <Link href="#where">DOVE SIAMO</Link>
              </li>
              <li>
                <Link href="#contacts">CONTATTI</Link>
              </li>
              <li>
                <Link href="#faqs">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      {isMobile && (
        <div className={styles.mobileDrawer}>
          <button className={styles.drawerToggle} onClick={toggleDrawer}>
            <RxHamburgerMenu title="icona apri menu" size={30} />
          </button>
          <Drawer
            size="100vw"
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
          >
            <DrawerMenu toggleDrawer={toggleDrawer} />
            {/* TODO drawer menu */}
          </Drawer>
        </div>
      )}
    </header>
  );
};

export default Header;
