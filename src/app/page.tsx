"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import InfoCard from "@/components/Cards/InfoCard";
import ServicesCard from "@/components/Cards/ServicesCard";
import Footer from "../components/Footer";
import CustomAccordion from "@/components/Accordion";
import Image from "next/image";
import { FiArrowDownCircle } from "react-icons/fi";
import { FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { useMediaQuery } from "@/utils";
import { bebasNeue } from "./fonts";
import { FaPhone } from "react-icons/fa6";

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

      <Footer />
    </main>
  );
};

export default Home;

// Components

const ServicesContainer = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return (
    <div className={styles.servicesContainer}>
      <div
        className={isTablet ? styles.titleAndImageTablet : styles.titleAndImage}
      >
        <div
          className={
            isTablet
              ? styles.servicesContainerTitleTablet
              : styles.servicesContainerTitle
          }
        >
          <p className={bebasNeue.className}>
            Tutti i servizi per la tua salute in un unico luogo
          </p>
          <p>Il tuo benessere è il cuore del nostro lavoro</p>
        </div>
        {!isTablet && (
          <>
            <div className={styles.ctaButtonContainer}>
              <Button
                onClick={() => {
                  window.open("tel:0574027087");
                }}
                title="CHIAMA ORA"
                type="primary"
              />
            </div>
            <div className={styles.iconTextContainer}>
              <button className={styles.goToSpecialArrowButton}>
                <FiArrowDownCircle
                  size={20}
                  style={{ color: "var(--secondary)" }}
                />
              </button>
              <p>Scopri le specializzazioni</p>
            </div>
          </>
        )}
        <div
          className={
            isTablet ? styles.imageContainerTablet : styles.imageContainer
          }
        >
          <Image
            src="/doctor.png"
            alt="Picture of the author"
            layout="responsive"
            width={550}
            height={550}
            loading="lazy"
            style={{
              maxHeight: "650px",
              objectFit: "contain",
              maxWidth: "500px",
            }}
          />
        </div>
      </div>
      {/* <div className={styles.servicesCardContainer}>
        <ServicesCard />
      </div> */}
    </div>
  );
};

const Specializations = ({
  specializationsData,
}: {
  specializationsData: Specialization[];
}) => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return (
    <div id="specializations" className={styles.sectionContainerBlue}>
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle + " " + bebasNeue.className}>
          Aree specialistiche
        </h2>
        <h3 className={styles.sectionSubtitle}>Cosa stai cercando?</h3>
        <p>
          Qui trovi tutte le nostre specializzazioni con i rispettivi medici di
          riferimento
        </p>
      </div>
      <div
        className={
          isTablet ? styles.infoCardContainerTablet : styles.infoCardContainer
        }
      >
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
  const isTablet = useMediaQuery("(min-width: 768px)");
  const locationUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.793570456051!2d11.01097547535706!3d43.901541971091454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132af51c952e35ff%3A0x9f40d897e8d92b8e!2sVia%20Michelangelo%20Buonarroti%2C%203%2C%2051031%20Agliana%20PT!5e0!3m2!1sit!2sit!4v1700825573878!5m2!1sit!2sit";
  return (
    <div
      id="where"
      className={
        isTablet
          ? styles.sectionContainerWhiteTablet
          : styles.sectionContainerWhite
      }
      style={{ paddingTop: "2rem" }}
    >
      <div className={isTablet ? styles.containerTablet : ""}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle + " " + bebasNeue.className}>
            Dove siamo
          </h2>
          <h3 className={styles.sectionSubtitleLightBackground}>
            Siamo ad Agliana, tra Prato e Pistoia, vicini all'uscita
            dell'autostrada A11
          </h3>
          <div className={styles.iconTextContainerLeftAligned}>
            <button className={styles.goToSpecialArrowButton}>
              <FaMapMarkerAlt size={20} style={{ color: "var(--secondary)" }} />
            </button>
            <p>
              Via Michelagelo Buonarroti angolo via Selvaggia Vergiolesi,
              s.n.c., Agliana
            </p>
          </div>
          <div className={styles.iconTextContainerLeftAligned}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(locationUrl);
              }}
              className={styles.goToSpecialArrowButton}
            >
              <MdOpenInNew size={20} style={{ color: "var(--secondary)" }} />
            </button>
            <p>Come raggiungerci</p>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src={locationUrl}
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div
      id="contacts"
      className={styles.sectionContainerGreen}
      style={{ paddingTop: "2rem" }}
    >
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle + " " + bebasNeue.className}>
          Contatti
        </h2>
        <h3 className={styles.sectionSubtitleLightBackground}>
          Hai bisogno di informazioni o vuoi prenotare?
        </h3>

        <a
          href="mailto: info@centromedicoagliana.com"
          target="_blank"
          className={styles.iconTextContainerLeftAligned}
        >
          <div className={styles.goToSpecialArrowButton}>
            <FaMailBulk size={20} style={{ color: "var(--secondary)" }} />
          </div>
          <p>info@centromedicoagliana.com</p>
        </a>

        <a
          href="tel: 0574027087"
          className={styles.iconTextContainerLeftAligned}
        >
          <div className={styles.goToSpecialArrowButton}>
            <FaPhone size={20} style={{ color: "var(--secondary)" }} />
          </div>
          <p>0574 027087</p>
        </a>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      title: "Come posso prenotare una visita?",
      content:
        "Puoi prenotare una visita tramite il nostro sito, oppure chiamando il numero 331222675",
    },
    {
      title: "Come posso pagare una visita?",
      content:
        "Puoi pagare una visita tramite il nostro sito, oppure chiamando il numero 331222675",
    },
    {
      title: "Come posso sapere il nome dei dottori disponibili?",
      content:
        "Puoi sapere il nome dei dottori disponibili tramite il nostro sito, oppure chiamando il numero 331222675",
    },
  ];
  return (
    <div
      id="faqs"
      className={styles.sectionContainerBlue}
      style={{ paddingTop: "2rem" }}
    >
      <div className={styles.sectionHeading}>
        <h2 className={styles.sectionTitle + " " + bebasNeue.className}>FAQ</h2>
        <h3 className={styles.sectionSubtitle}>Hai qualche dubbio?</h3>
        <p>Qui trovi tutte le nostre risposte alle domande più frequenti</p>
        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <CustomAccordion
              key={faq.title}
              title={faq.title}
              content={faq.content}
              value={index.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
