"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Button } from "@/components";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <main className={styles.main}>
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
