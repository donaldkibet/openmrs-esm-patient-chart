import React, { useState, useEffect } from "react";
import { match, useParams } from "react-router";
import SummaryCard from "../cards/summary-card.component";
import styles from "./heightandweight-detailed-summary.css";
import dayjs from "dayjs";
import { getDimenionsObservationsRestAPI } from "./heightandweight.resource";
import { useCurrentPatient } from "@openmrs/esm-api";
import { isEmpty } from "lodash-es";
import {
  convertToPounds,
  convertToFeet,
  convertoToInches
} from "./heightandweight-helper";

export function HeightAndWeightDetailedSummary(
  props: HeightAndWeightDetailedSummaryProps
) {
  const [dimensions, setDimensions] = useState<any>({});
  const [
    isLoadingPatient,
    patient,
    patientUuid,
    patientErr
  ] = useCurrentPatient();
  let params = useParams();

  useEffect(() => {
    getDimenionsObservationsRestAPI(patientUuid).subscribe(response => {
      setDimensions(
        response.find(
          dimension => dimension.obsData.weight.uuid === params["uuid"]
        )
      );
    });
  }, [params, patientUuid]);

  function displayNoHeightAndWeight() {
    return (
      <SummaryCard
        name="Height & Weight"
        match={props.match}
        styles={{ width: "100%" }}
      >
        <div className={styles.heightAndWeightDetailedSummary}>
          <p className="omrs-bold" data-testid="errorMessage">
            The patient's Height and Weight is not documented.
          </p>
          <p className="omrs-bold" data-testid="navigateLink">
            Please <a href="/">add patient height and weight</a>.
          </p>
        </div>
      </SummaryCard>
    );
  }

  function displayHeightAndWeight() {
    return (
      <div className={styles.heightAndWeightDetailedSummary}>
        <SummaryCard
          name="Height & Weight"
          match={props.match}
          editBtnUrl={`/patient/dimensions`}
          styles={{ width: "100%" }}
        >
          <div className={styles.heightAndWeightContainer}>
            {!isEmpty(dimensions) && (
              <table className={styles.summaryTable}>
                <tbody>
                  <tr>
                    <td>Measured at </td>
                    <td>
                      {dayjs(
                        dimensions.obsData.weight.encounter.encounterDatetime
                      ).format("DD-MMM-YYYY")}{" "}
                      {dayjs(
                        dimensions.obsData.weight.encounter.encounterDatetime
                      ).format("HH:mm A")}
                    </td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td data-testid="weightKg">
                      {dimensions.weight} <span>Kg</span>
                    </td>
                    <td data-testid="weightLbs">
                      {convertToPounds(dimensions.weight)} <span>lbs</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td data-testid="heightCm">
                      {dimensions.height} <span>cm</span>
                    </td>
                    <td data-testid="heightFeet">
                      {convertToFeet(dimensions.height)} <span>feet</span>{" "}
                      {convertoToInches(dimensions.height)} <span>inches</span>
                    </td>
                  </tr>
                  <tr>
                    <td>BMI</td>
                    <td data-testid="bmi">
                      {dimensions.bmi} <span>Kg/m2</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </SummaryCard>

        <SummaryCard
          name="Details"
          match={props.match}
          styles={{
            width: "100%",
            backgroundColor: "var(--omrs-color-bg-medium-contrast)"
          }}
        >
          <div className={`omrs-type-body-regular ${styles.summaryCard}`}>
            <table className={styles.heightAndWeightDetailsTable}>
              <thead>
                <tr>
                  <td>Last updated</td>
                  <td>Last updated by</td>
                  <td>Last updated location</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-testid="last-updated">-</td>
                  <td data-testid="updated-by">-</td>
                  <td data-testid="update-location">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SummaryCard>
      </div>
    );
  }

  return !isEmpty(dimensions)
    ? displayHeightAndWeight()
    : displayNoHeightAndWeight();
}

type HeightAndWeightDetailedSummaryProps = {
  match: match;
};
