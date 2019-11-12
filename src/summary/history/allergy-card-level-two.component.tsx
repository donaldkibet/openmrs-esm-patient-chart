import React from "react";
import { match } from "react-router";
import { performPatientAllergySearch } from "./allergy-intolerance.resource";
import { createErrorHandler } from "@openmrs/esm-error-handling";
import styles from "./allergy-card-level-two.css";
import SummaryCardRow from "../cards/summary-card-row.component";
import SummaryCard from "../cards/summary-card.component";
import dayjs from "dayjs";
import AllergyCardHorizontalValue from "./allery-card-horizontal-value.component";

export function AllergyCardLevelTwo(props: AllergyCardLevelTwoProps) {
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

  function displayAllergy() {
    return (
      <SummaryCard name="Allergy" match={props.match} styles={{ width: "95%" }}>
        <AllergyCardHorizontalValue
          value={[
            <div>ALLERGEN</div>,
            <div className={styles.severityAndReaction}>
              <span>SEVERITY & REACTION</span>
              <span>
                <svg className="omrs-icon" fill="rgba(0, 0, 0, 0.54)">
                  {" "}
                  <use xlinkHref="#omrs-icon-arrow-downward" />
                </svg>
              </span>
            </div>,
            <div>SINCE</div>,
            <div>UPDATED</div>
          ]}
          contentStyles={styles.header}
        />

        {patientAllergy &&
          patientAllergy.entry.map(allergy => {
            return (
              <>
                <AllergyCardHorizontalValue
                  key={allergy.resource.id}
                  value={[
                    <div className="omrs-bold">
                      {allergy.resource.code.text}
                    </div>,

                    <div className={styles.columLayout}>
                      <div
                        style={{ textTransform: "uppercase" }}
                        className={`${styles.severityAndReaction} omrs-bold`}
                      >
                        {allergy.resource.criticality === "high" ? (
                          <svg
                            className={`omrs-icon`}
                            fontSize={"15px"}
                            fill="rgba(181, 7, 6, 1)"
                          >
                            {" "}
                            <use xlinkHref="#omrs-icon-important-notification" />
                          </svg>
                        ) : null}
                        {allergy.resource.criticality}
                      </div>
                      <div style={{ marginBottom: "0.5rem" }}>
                        {allergy.resource.reaction[0].manifestation.map(
                          manifestation => `${manifestation.text} `
                        )}
                      </div>
                    </div>,

                    <div style={{ textAlign: "right" }}>
                      {dayjs(
                        allergy.resource.extension[0].valueDateTime
                      ).format("MMM-YYYY")}
                    </div>,

                    <div
                      style={{
                        justifyContent: "flex-end",
                        alignItems: "flex-start"
                      }}
                      className={styles.severityAndReaction}
                    >
                      {dayjs(patientAllergy.meta.lastUpdated).format(
                        "DD-MMM-YYYY"
                      )}
                      <svg className="omrs-icon" fill="rgba(0, 0, 0, 0.54)">
                        {" "}
                        <use xlinkHref="#omrs-icon-chevron-right" />
                      </svg>
                    </div>
                  ]}
                />
              </>
            );
          })}
      </SummaryCard>
    );
  }

  function displayNoAllergenHistory() {
    return (
      <SummaryCard
        name="Allergy"
        match={props.match}
        styles={{ width: "100%" }}
      >
        <div className={styles.allergyMargin}>
          <p className="omrs-bold">
            The patient's allergy history is not documented.
          </p>
          <p className="omrs-bold">
            Please{" "}
            <span className={`${styles.allergyLink} omrs-underline`}>
              add allergy history
            </span>
          </p>
        </div>
      </SummaryCard>
    );
  }

  return (
    <div className={styles.allergySummary}>
      {patientAllergy ? displayAllergy() : displayNoAllergenHistory()}
    </div>
  );
}

type AllergyCardLevelTwoProps = {
  currentPatient: fhir.Patient;
  match: match;
};
