import React from "react";
import { RouteComponentProps } from "react-router";
import { getCurrentPatient } from "@openmrs/esm-api";
import styles from "./patient-chart-summary.css";
import HistorySection from "./history/history-section.component";
import { createErrorHandler } from "@openmrs/esm-error-handling";

export default function PatientChartSummary(props: PatientChartSummaryProps) {
  return (
    <main className="omrs-main-content">
      <div className={styles.patientSummary}>
        <HistorySection match={props.match} />
      </div>
    </main>
  );
}

type PatientChartSummaryProps = RouteComponentProps & {};
