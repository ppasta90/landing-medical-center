// components/Button.tsx

import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  title: string;
  type: "primary" | "secondary";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, type, onClick }) => {
  return (
    <button
      className={`${styles.button} ${
        type === "secondary" ? styles.secondary : styles.primary
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
