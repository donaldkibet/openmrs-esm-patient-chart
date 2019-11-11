import React from "react";
import { match } from "react-router";
import { performPatientAllergySearch } from "./allergy-intolerance.resource";
import { createErrorHandler } from "@openmrs/esm-error-handling";
import styles from "./allergy-card-level-two.css";
import SummaryCardRow from "../cards/summary-card-row.component";
import SummaryCard from "../cards/summary-card.component";
import dayjs from "dayjs";

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
      <SummaryCard
        name="Allergy"
        match={props.match}
        styles={{ width: "100%" }}
      >
        <SummaryCardRow>
          <table className={styles.allergyTable}>
            <thead className="omrs-type-body-regular">
              <tr>
                <th>ALLERGEN</th>
                <th>SEVERITY & REACTION</th>
                <th>SINCE</th>
                <th>UPDATED</th>
              </tr>
            </thead>
            {patientAllergy &&
              patientAllergy.entry.map(allergy => {
                return (
                  <tbody key={allergy.resource.id}>
                    <tr>
                      <td className={`omrs-bold`}>
                        {allergy.resource.code.text}
                      </td>
                      <td
                        className={`${styles.svgIcons} ${styles.capitalize} omrs-bold`}
                      >
                        <p>
                          {allergy.resource.criticality === "high" ? (
                            <svg
                              className={`omrs-icon`}
                              fontSize={"15px"}
                              fill="rgba(181, 7, 6, 1)"
                            >
                              <use xlinkHref="#omrs-icon-important-notification" />
                            </svg>
                          ) : null}
                        </p>
                        <p>{allergy.resource.criticality}</p>
                      </td>
                      <td>
                        {dayjs(
                          allergy.resource.extension[0].valueDateTime
                        ).format("MMM-YYYY")}
                      </td>
                      <td>
                        <div className={styles.chevron}>
                          <span>
                            {dayjs(patientAllergy.meta.lastUpdated).format(
                              "DD-MMM-YYYY"
                            )}
                          </span>
                          <span>
                            <svg
                              className="omrs-icon"
                              fill="rgba(0, 0, 0, 0.54)"
                            >
                              <use xlinkHref="#omrs-icon-chevron-right" />
                            </svg>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="omrs-margin-0 omrs-padding-0"></td>
                      <td className="omrs-margin-0" colSpan={3}>
                        {allergy.resource.reaction[0].manifestation[0].text}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1}></td>
                      <td colSpan={3}>
                        <div
                          className={`${styles.allergyComment} omrs-type-body-large`}
                        >
                          <p>
                            {allergy.resource.note &&
                              allergy.resource.note[0].text}
                          </p>
                          <p>more...</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </SummaryCardRow>
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
