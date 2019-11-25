import React from "react";
import { match } from "react-router";
import { performPatientsVitalsSearch } from "./vitals-card.resource";
import { createErrorHandler } from "@openmrs/esm-error-handling";
import { formatDate } from "./dimension-helpers";
import styles from "./vital-card-level-two.css";
import SummaryCard from "../cards/summary-card.component";
import { useCurrentPatient } from "@openmrs/esm-api";

export default function VitalsLevelTwo(props: VitalsLevelTwoProps) {
  const resultsPerPage = 15;

  const [patientVitals, setPatientVitals] = React.useState(null);
  const [totalPages, setTotalPages] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showNextButton, setShowNextButton] = React.useState(false);
  const [showPreviousButton, setShowPreviousButton] = React.useState(false);
  const [pagedResults, setPagedResults] = React.useState([]);
  const [
    isLoadingPatient,
    patient,
    patientUuid,
    patientErr
  ] = useCurrentPatient();

  React.useEffect(() => {
    if (!isLoadingPatient && patient) {
      const subscription = performPatientsVitalsSearch(patient.id).subscribe(
        vitals => {
          setPatientVitals(vitals);
          setTotalPages(Math.ceil(vitals.length / resultsPerPage));
          setPagedResults(vitals.slice(0, resultsPerPage));
        },
        createErrorHandler()
      );

      return () => subscription.unsubscribe();
    }
  }, [isLoadingPatient, patient]);

  React.useEffect(() => {
    {
      patientVitals && currentPage * resultsPerPage > patientVitals.length
        ? setShowNextButton(false)
        : setShowNextButton(true);
      currentPage !== 1
        ? setShowPreviousButton(true)
        : setShowPreviousButton(false);
    }
  }, [pagedResults, currentPage, patientVitals]);

  const nextPage = () => {
    let upperBound = currentPage * resultsPerPage + resultsPerPage;
    const lowerBound = currentPage * resultsPerPage;
    if (upperBound > patientVitals.length) {
      upperBound = patientVitals.length;
    }
    const pageResults = patientVitals.slice(lowerBound, upperBound);
    setPagedResults(pageResults);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    const lowerBound = currentPage * resultsPerPage - resultsPerPage * 2;
    const upperBound = currentPage * resultsPerPage - resultsPerPage;
    const pageResults = patientVitals.slice(lowerBound, upperBound);
    setPagedResults(pageResults);
    setCurrentPage(currentPage - 1);
  };

  function displayPatientsVitals() {
    return (
      <SummaryCard name="Vitals" match={props.match} styles={{ width: "100%" }}>
        <table className={styles.vitalsTable}>
          <thead>
            <tr className="omrs-bold">
              <td></td>
              <td>BP</td>
              <td>Rate</td>
              <td>Oxygen</td>
              <td colSpan={2}>Temp</td>
            </tr>
          </thead>
          <tbody>
            {pagedResults &&
              pagedResults.map((vitals, index) => {
                return (
                  <React.Fragment key={vitals.id}>
                    <tr>
                      <td>{formatDate(vitals.date)}</td>
                      <td>
                        {`${vitals.systolic} / ${vitals.diastolic}`}
                        {index === 0 && <span> mmHg</span>}
                      </td>
                      <td>
                        {vitals.pulse} {index === 0 && <span>bpm</span>}
                      </td>
                      <td>
                        {vitals.oxygenation} {index === 0 && <span>%</span>}
                      </td>
                      <td>
                        {vitals.temperature}
                        {index === 0 && <span> &#8451;</span>}
                      </td>
                      <td>
                        <svg className="omrs-icon" fill="rgba(0, 0, 0, 0.54)">
                          <use xlinkHref="#omrs-icon-chevron-right" />
                        </svg>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <div>
            {showPreviousButton && (
              <button
                onClick={previousPage}
                className={`${styles.navButton} omrs-bold omrs-btn omrs-text-neutral omrs-rounded`}
              >
                <svg className="omrs-icon" fill="rgba(0, 0, 0, 0.54)">
                  <use xlinkHref="#omrs-icon-chevron-left" />
                </svg>
                Previous
              </button>
            )}
          </div>
          <div>
            Page {currentPage} of {totalPages}
          </div>
          <div>
            {showNextButton && (
              <button
                onClick={nextPage}
                className={`${styles.navButton} omrs-bold omrs-btn omrs-text-neutral omrs-rounded`}
              >
                Next
                <svg className="omrs-icon" fill="rgba(0, 0, 0, 0.54)">
                  <use xlinkHref="#omrs-icon-chevron-right" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </SummaryCard>
    );
  }

  function displayNoPatientsVitals() {
    return (
      <SummaryCard name="Vitals" match={props.match} styles={{ width: "100%" }}>
        <div className={`${styles.vitalsAbsent} omrs-bold`}>
          <p>No Vitals are documentated</p>
          Please <a href="/"> add patient vitals</a>
        </div>
      </SummaryCard>
    );
  }
  return (
    <div className={styles.vitalsSummary}>
      {patientVitals ? displayPatientsVitals() : displayNoPatientsVitals()}
    </div>
  );
}

type VitalsLevelTwoProps = {
  match: match;
};
