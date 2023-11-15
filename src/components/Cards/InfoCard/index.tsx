import React from "react";
import styles from "./infoCard.module.scss";

type InfoCardProps = {
  title: string;
  description: string;
};

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className={styles.infoCard}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default InfoCard;
