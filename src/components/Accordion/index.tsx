import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./accordion.module.scss";

type AccordionProps = {
  title: string;
  content: string;
  value: string;
};
const CustomAccordion = ({ title, value, content }: AccordionProps) => {
  return (
    <Accordion.Root className={styles.root} type="single" collapsible>
      <Accordion.Item className={styles.item} value={value}>
        <Accordion.Header>
          <Accordion.Trigger className={styles.trigger}>
            {title}
            <ChevronDownIcon className={styles.chevron} aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.content}>
          {content}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default CustomAccordion;
