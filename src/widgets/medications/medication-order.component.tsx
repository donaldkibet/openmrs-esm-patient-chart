import React from "react";
import { match } from "react-router";
import SummaryCard from "../cards/summary-card.component";
import styles from "./medication-order.css";

export default function MedicationOrder(props: MedicationOrderProps) {
  return (
    <div className={styles.medicationOrder}>
      <SummaryCard
        name="Order Medication"
        match={props.match}
        styles={{ width: "100%" }}
      >
        <div className={styles.orderSummary}>
          <span>Asprin</span>
          <span>tablet</span>
          <span>-oral</span>
          <span>- Dose</span>
        </div>
      </SummaryCard>
    </div>
  );
}

type MedicationOrderProps = {
  match: match;
};
