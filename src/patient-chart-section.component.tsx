import React from "react";
import { RouteComponentProps } from "react-router";
import { getCurrentPatient } from "@openmrs/esm-api";
import { createErrorHandler } from "@openmrs/esm-error-handling";
import PatientBanner from "./summary/banner/patient-banner.component";
import styles from "./patient-chart-section.css";
import { AllergyLevelTwo } from "./summary/history/level-two/allergy.component";

export default function PatientChartSection(props: PatientChartSectionProps) {
  const [currentPatient, setCurrentPatient] = React.useState(null);
  const [showPatientSection, setShowPatientSection] = React.useState(true);

  React.useEffect(() => {
    const subscription = getCurrentPatient().subscribe(patient => {
      setCurrentPatient(patient);
      createErrorHandler();
    });

    return () => subscription.unsubscribe();
  });

  return (
    <main className="omrs-main-content">
      <PatientBanner
        match={props.match}
        patient={currentPatient}
        showPatientSummary={setShowPatientSection}
      ></PatientBanner>
      {showPatientSection && currentPatient && (
        <div className={styles.patientSection}>
          <AllergyLevelTwo
            match={props.match}
            currentPatient={currentPatient}
          />
        </div>
      )}
    </main>
  );
}

type PatientChartSectionProps = RouteComponentProps & {};
