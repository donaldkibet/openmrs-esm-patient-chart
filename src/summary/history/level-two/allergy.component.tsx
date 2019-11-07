import React from "react";
import { match } from "react-router";
import { performPatientAllergySearch } from "../allergy-intolerance.resource";
import { createErrorHandler } from "@openmrs/esm-error-handling";
import { SectionCard } from "./cards/section-card.component";
import styles from "./allergy-component.style.css";
import SummaryCardRow from "../../cards/summary-card-row.component";
import SummaryCardRowContent from "../../cards/summary-card-row-content.component";
import dayjs from "dayjs";

export function AllergyLevelTwo(props: AllergyLevelTwoProps) {
  const [patientAllergy, setPatientAllergy] = React.useState(null);

  React.useEffect(() => {
    const abortController = new AbortController();

    performPatientAllergySearch(
      props.currentPatient.identifier[0].value,
      abortController
    )
      .then(allergy => setPatientAllergy(allergy.data))
      .catch(createErrorHandler());

    return () => abortController.abort();
  }, [props.currentPatient.identifier[0].value]);

  return (
    <SectionCard name="Allergy" match={props.match}>
      <div className={styles.allergyHeader}>
        <p className={`${styles.width}`}>ALLERGEN</p>
        <p className={`${styles.width2}`}>SEVERITY & REACTION</p>
        <p className={`${styles.width}`}>SINCE</p>
        <p className={`${styles.width}`}>UPDATED</p>
      </div>
      <div className={styles.allergyContent}>
        {patientAllergy &&
          patientAllergy.entry.map(allergy => {
            return (
              <div>
                <div className={styles.allergyRow}>
                  <p className={`omrs-bold ${styles.width}`}>
                    {allergy.resource.code.text}
                  </p>
                  <p className={`omrs-bold ${styles.width2}`}>
                    {allergy.resource.criticality === "?"
                      ? "\u2014"
                      : allergy.resource.criticality}{" "}
                    <br /> {allergy.resource.reaction[0].manifestation[0].text}
                  </p>
                  <p className={`${styles.width}`}>
                    {dayjs(allergy.resource.extension[0].valueDateTime).format(
                      "MMM-YYYY"
                    )}
                  </p>
                  <p className={`${styles.width}`}>
                    {dayjs(patientAllergy.meta.lastUpdated).format(
                      "DD-MMM-YYYY"
                    )}
                  </p>
                </div>
                <div className={styles.allergyComment}>
                  <p></p>
                  <p></p>
                </div>
              </div>
            );
          })}
      </div>
    </SectionCard>
  );
}

type AllergyLevelTwoProps = {
  match: match;
  currentPatient: any;
};
