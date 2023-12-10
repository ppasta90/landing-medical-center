import React from "react";
import styles from "./servicesCard.module.scss";
import { IconCar, IconLuggage, IconPhone } from "@/icons";
import { bebasNeue } from "@/app/fonts";

const servicesList = [
  {
    icon: <IconLuggage />,
    number: "10",
    title: "Aree specialistiche",
  },
  {
    icon: <IconCar />,
    number: "20",
    title: "Posti auto nell’area parcheggio",
  },
  {
    icon: <IconPhone />,
    number: "24/7",
    title: "Segreteria per info e appuntamenti",
  },
];
const ServicesCard = () => {
  return (
    <div className={styles.container}>
      {servicesList.map((item) => (
        <ServicesCardItem
          key={item.title}
          icon={item.icon}
          number={item.number}
          title={item.title}
        />
      ))}
    </div>
  );
};

type ServicesCardItemProps = {
  icon: React.ReactNode;
  number: string;
  title: string;
};

const ServicesCardItem = ({ icon, number, title }: ServicesCardItemProps) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemIcon}>
        {icon}
        <p className={styles.number + " " + bebasNeue.className}>{number}</p>
      </div>
      <div className={styles.itemTitle}>{title}</div>
    </div>
  );
};

export default ServicesCard;
