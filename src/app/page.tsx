"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import { FiArrowDownCircle } from "react-icons/fi";
import Image from "next/image";
import ServicesCard from "@/components/Cards/ServicesCard";
import InfoCard from "@/components/Cards/InfoCard";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

type Specialization = {
  title: string;
  description: string;
};

const specializationsData: Specialization[] = [
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

const Home = () => {
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

      <ServicesContainer />

      <Specializations specializationsData={specializationsData} />

      <LocationSection />

      <ContactSection />

      <FaqSection />
    </main>
  );
};

export default Home;

// Components

const ServicesContainer = () => {
  return (
    <div className={styles.servicesContainer}>
      <p>Tutti i servizi per la tua salute in un unico luogo</p>
      <p>Il tuo benessere è il cuore del nostro lavoro</p>
      <div className={styles.ctaButtonContainer}>
        <Button onClick={() => {}} title="PRENOTA" type="primary" />
      </div>
      <div className={styles.iconTextContainer}>
        <button className={styles.goToSpecialArrowButton}>
          <FiArrowDownCircle size={20} style={{ color: "var(--secondary)" }} />
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
          loading="lazy"
        />
      </div>
      <div className={styles.servicesCardContainer}>
        <ServicesCard />
      </div>
    </div>
  );
};

const Specializations = ({
  specializationsData,
}: {
  specializationsData: Specialization[];
}) => {
  return (
    <div className={styles.sectionContainerBlue}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>Aree specialistiche</h2>
        <h3 className={styles.sectionSubtitle}>Cosa stai cercando?</h3>
        <p>
          Qui trovi tutte le nostre specializzazioni con i rispettivi medici di
          riferimento
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
  );
};

const LocationSection = () => {
  return (
    <div
      className={styles.sectionContainerWhite}
      style={{ paddingTop: "2rem" }}
    >
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>Dove siamo</h2>
        <h3 className={styles.sectionSubtitleLightBackground}>
          Vuoi raggiungere il poliambulatorio?
        </h3>

        <div className={styles.iconTextContainerLeftAligned}>
          <button className={styles.goToSpecialArrowButton}>
            <FaMapMarkerAlt size={20} style={{ color: "var(--secondary)" }} />
          </button>
          <p>Via Buonarroti 3, Agliana, Pistoia</p>
        </div>

        <div className={styles.iconTextContainerLeftAligned}>
          <button className={styles.goToSpecialArrowButton}>
            <MdOpenInNew size={20} style={{ color: "var(--secondary)" }} />
          </button>
          <p>Come raggiungerci</p>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div
      className={styles.sectionContainerGreen}
      style={{ paddingTop: "2rem" }}
    >
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>Contatti</h2>
        <h3 className={styles.sectionSubtitleLightBackground}>
          Hai bisogno di informazioni o vuoi prenotare?
        </h3>

        <div className={styles.iconTextContainerLeftAligned}>
          <button className={styles.goToSpecialArrowButton}>
            <FaMapMarkerAlt size={20} style={{ color: "var(--secondary)" }} />
          </button>
          <p>contatti@poliagliana.com</p>
        </div>

        <div className={styles.iconTextContainerLeftAligned}>
          <button className={styles.goToSpecialArrowButton}>
            <MdOpenInNew size={20} style={{ color: "var(--secondary)" }} />
          </button>
          <p>331222675</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <div className={styles.sectionContainerBlue} style={{ paddingTop: "2rem" }}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        <h3 className={styles.sectionSubtitle}>Hai qualche dubbio?</h3>
        <p>Qui trovi tutte le nostre risposte alle domande più frequenti</p>
        {/* accordions */}
      </div>
    </div>
  );
};
