import React, { useState } from "react";
import SummaryCard from "../cards/summary-card.component";
import { match } from "react-router";
import styles from "./medication-order.css";

export default function MedicationOrdersSearch(
  props: medicationOrdersSearchProps
) {
  return (
    <div>
      <SummaryCard
        name="Orde Medication"
        match={props.match}
        styles={{ width: "100%" }}
      >
        <div></div>
      </SummaryCard>
    </div>
  );
}

type medicationOrdersSearchProps = {
  match: match;
};
