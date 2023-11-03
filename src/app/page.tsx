"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useTheme } from "next-themes";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (!mounted) return null;

  return (
    <main className={styles.main}>
      <Header isOpen={isOpen} toggleDrawer={toggleDrawer} />
      The current theme is: {theme}
      <Button
        onClick={() => setTheme("light")}
        title="Primary"
        type="primary"
      />
      <Button
        onClick={() => setTheme("dark")}
        title="Secondary"
        type="secondary"
      />
    </main>
  );
}
