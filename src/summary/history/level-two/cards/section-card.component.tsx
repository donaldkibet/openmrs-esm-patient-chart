import React from "react";
import { match } from "react-router";
import styles from "./section-card.css";

export function SectionCard(props: SectionCardProps) {
  return (
    <div className={`omrs-card ${styles.card}`} style={props.styles}>
      <div className={styles.header}>
        <h2 className={`omrs-margin-0`}>{props.name}</h2>
        <div>
          <svg className={`omrs-icon ${styles.svg}`} fill="rgba(0, 0, 0, 0.54)">
            <use xlinkHref="#omrs-icon-add" />
          </svg>
          <svg className={`omrs-icon ${styles.svg}`} fill="rgba(0, 0, 0, 0.54)">
            <use xlinkHref="#omrs-icon-horiz-more" />
          </svg>
        </div>
      </div>
      {props.children}
    </div>
  );
}

type SectionCardProps = {
  match: match;
  name: string;
  styles?: React.CSSProperties;
  children: React.ReactNode;
};
