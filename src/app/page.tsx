"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useTheme } from "next-themes";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import { FiArrowDownCircle } from "react-icons/fi";
import Image from "next/image";
import ServicesCard from "@/components/Cards/ServicesCard";
import InfoCard from "@/components/Cards/InfoCard";

// export to a data folder and import it here
// take description from bard ai
const specializationsData = [
  {
    title: "Psicologia",
    description:
      "La psicologia è la disciplina che studia i processi mentali e il comportamento degli individui.",
  },
  {
    title: "Psichiatria",
    description:
      "La psichiatria è la branca della medicina che si occupa della prevenzione, della diagnosi, della cura e della riabilitazione delle malattie mentali.",
  },
  {
    title: "Dietetica e nutrizione",
    description:
      "La dietetica è la scienza che studia l'alimentazione in rapporto alle esigenze dell'organismo umano.",
  },
  {
    title: "Urologia",
    description:
      "L'urologia è la branca della medicina che si occupa delle patologie dell'apparato urinario e dell'apparato genitale maschile.",
  },
  {
    title: "Ortopedia",
    description:
      "L'ortopedia è la branca della medicina che si occupa delle patologie dell'apparato locomotore.",
  },
  {
    title: "Oculista",
    description:
      "L'oculistica è la branca della medicina che si occupa delle patologie dell'occhio.",
  },
];

function Home() {
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
      {/* FIRST SECTION */}
      <div className={styles.servicesContainer}>
        <p>Tutti i servizi per la tua salute in un unico luogo</p>
        <p>Il tuo benessere è il cuore del nostro lavoro</p>
        <div className={styles.ctaButtonContainer}>
          <Button
            onClick={() => setTheme("light")}
            title="PRENOTA"
            type="primary"
          />
        </div>
        <div className={styles.goToSpecial}>
          <button className={styles.goToSpecialArrowButton}>
            <FiArrowDownCircle
              size={20}
              style={{ color: "var(--secondary)" }}
            />
          </button>
          <p>Scopri le specializzazioni</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/doctor.png"
            alt="Picture of the author"
            layout="responsive"
            width={250}
            height={250}
          />
        </div>
        <div className={styles.servicesCardContainer}>
          <ServicesCard />
        </div>
      </div>
      {/* AREE SPECIALISTICHE */}
      <div className={styles.specializationsContainer}>
        <div className={styles.specializationsHeading}>
          <h2 className={styles.specializationsTitle}>Aree specialistiche</h2>
          <h3 className={styles.specializationsSubtitle}>
            Cosa stai cercando?
          </h3>
          <p>
            Qui trovi tutte le nostre specializzazioni con i rispettivi medici
            di riferimento
          </p>
        </div>
        <div className={styles.infoCardContainer}>
          {specializationsData.map((specialization) => (
            <InfoCard
              key={specialization.title}
              title={specialization.title}
              description={specialization.description}
            />
          ))}
        </div>
      </div>
      {/* DOVE SIAMO */}
      {/* CONTATTI */}
    </main>
  );
}

export default Home;
