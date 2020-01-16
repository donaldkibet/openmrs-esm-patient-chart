import React, { Fragment } from "react";
import { match } from "react-router";
import SummaryCard from "../cards/summary-card.component";
import styles from "./medication-order.css";
import dayjs from "dayjs";
import { fetchDrugs } from "./medications.resource";
import json from "./common-medication.json";

export default function MedicationOrder(props: MedicationOrderProps) {
  const [duration, setDuration] = React.useState("--");
  const [refills, setRefills] = React.useState(0);
  const [lastrefillDate, setLastRefillDate] = React.useState("--");
  const [units, setUnits] = React.useState(false);
  const [unitsStyle, setUnitsStyle] = React.useState(false);
  const [frequencyStyle, setFrequencyStyle] = React.useState(false);
  const [orderedDrug, setOrderedDrug] = React.useState(null);
  const [commonDrugOrders, setCommonDrugOrders] = React.useState(null);

  React.useEffect(() => {
    const abortcontroller = new AbortController();
    fetchDrugs(abortcontroller).then(response => {
      setCommonDrugOrders(getCommonOrders(response.data.results[0].uuid));
    });
  }, []);

  function getCommonOrders(drugUuid: string) {
    return json.filter(el => el.uuid === drugUuid);
  }

  const handleSetUnitStyle = event => {
    setUnitsStyle(true);
  };

  const handleFrequencyStyle = event => {
    setFrequencyStyle(true);
  };

  const handleIncreaseRefillClick = event => {
    setRefills(refills + 1);
  };

  const handleDecreaseRefillClick = event => {
    if (refills > 0) {
      setRefills(refills - 1);
    }
  };

  return (
    <form style={{ height: "80vh", position: "relative" }}>
      <div className={styles.medicationOrder}>
        <SummaryCard
          name="Order Medication"
          match={props.match}
          styles={{ width: "100%" }}
        >
          <div>
            <div className={styles.orderSummary}>
              <span>Asprin</span>
              <span>tablet</span>
              <span>-oral</span>
              <span>- Dose</span>
            </div>
          </div>
        </SummaryCard>

        <div className={styles.medicationContainer}>
          <div className={styles.orderContainer} style={{ width: "100%" }}>
            <div className={styles.drugDosage}>
              <span>Form</span>
              {commonDrugOrders &&
                commonDrugOrders.map(drugOrder => {
                  return (
                    <Fragment key={drugOrder.dosageForm}>
                      <input
                        type="radio"
                        name="formRadio1"
                        id="radioOne"
                        defaultChecked={true}
                      />
                      <label htmlFor="radioOne">{drugOrder.dosageForm}</label>
                    </Fragment>
                  );
                })}
              <input
                type="radio"
                name="formRadio1"
                id="otherForm"
                onChange={handleSetUnitStyle}
              />
              <label htmlFor="otherForm">other</label>
            </div>
            <div className={styles.drugDosage}>
              <span>Route</span>
              {commonDrugOrders &&
                commonDrugOrders[0].route.map(route => {
                  return (
                    <Fragment key={route.conceptUuid}>
                      <input
                        type="radio"
                        name="route"
                        id="radioThree"
                        defaultChecked={route.selected}
                      />
                      <label htmlFor="radioThree">{route.route}</label>
                    </Fragment>
                  );
                })}
              <input type="radio" name="route" id="radioThree" />
              <label htmlFor="radioThree">other</label>
            </div>
            <div
              className={`${styles.drugDosage} ${
                unitsStyle ? "" : styles.drugDosageColor
              }`}
            >
              <span>Dose</span>
              {commonDrugOrders &&
                commonDrugOrders[0].commonDosages.map(drugOrder => {
                  return (
                    <Fragment key={drugOrder.dosage}>
                      <input
                        type="radio"
                        name="dosage"
                        id={drugOrder.dosage}
                        onChange={handleSetUnitStyle}
                        defaultChecked={drugOrder.selected}
                      />
                      <label htmlFor={drugOrder.dosage}>
                        {drugOrder.dosage}
                      </label>
                    </Fragment>
                  );
                })}
              <input
                type="radio"
                name="dosage"
                id="other"
                onChange={handleSetUnitStyle}
              />
              <label htmlFor="other">other</label>
            </div>
            <div
              className={`${styles.drugDosage} ${
                frequencyStyle ? "" : styles.drugDosageColor
              }`}
            >
              <span>Frequency</span>
              {commonDrugOrders &&
                commonDrugOrders[0].commonFrequencies.map(frequency => {
                  return (
                    <Fragment key={frequency.conceptUuid}>
                      <input
                        type="radio"
                        name="frequency"
                        id={frequency.conceptUuid}
                        defaultChecked={frequency.selected}
                        onChange={handleFrequencyStyle}
                      />
                      <label htmlFor={frequency.conceptUuid}>
                        {frequency.frequency}
                      </label>
                    </Fragment>
                  );
                })}
            </div>
          </div>
        </div>

        <div className={styles.medicationContainer}>
          <div
            className="omrs-card"
            style={{ width: "50%", marginRight: "0.5rem" }}
          >
            <div className={styles.inputTextControl}>
              <label htmlFor="startDate">Start date</label>
              <input type="text" name="startDate" id="startDate" />
            </div>
            <div className={styles.inputTextControl}>
              <label htmlFor="endDate">End date</label>
              <input type="text" name="endDate" id="endDate" />
            </div>
            <div className={styles.duration}>
              <span>
                Duration: <label>{duration}</label>
              </span>
            </div>
            <div className={styles.refills}>
              <label htmlFor="refill">Refills</label>
              <div className={`omrs-increment-buttons ${styles.refillIcon}`}>
                <div>
                  <svg
                    className="omrs-icon"
                    onClick={handleIncreaseRefillClick}
                  >
                    <use xlinkHref="#omrs-icon-add"></use>
                  </svg>
                </div>
                <div>
                  <span>{refills}</span>
                </div>
                <div>
                  <svg
                    className="omrs-icon"
                    onClick={handleDecreaseRefillClick}
                  >
                    <use xlinkHref="#omrs-icon-remove"></use>
                  </svg>
                </div>
              </div>
              <span>Last date with refills: {lastrefillDate}</span>
            </div>
          </div>
          <div
            className="omrs-card"
            style={{ width: "50%", marginLeft: "0.5rem" }}
          >
            <div className={styles.substituionLabel}>
              <span>Substitions permitted</span>
            </div>
            <div className={styles.toggleSwitchStyle}>
              <div className={`toggleSwitch`}>
                <input
                  type="radio"
                  defaultChecked={true}
                  name="toggleButton"
                  id="toggleButton1"
                />
                <label htmlFor="toggleButton1">No</label>
                <input type="radio" name="toggleButton" id="toggleButton2" />
                <label htmlFor="toggleButton2">Yes</label>
              </div>
            </div>
            <div className={styles.dosingInstructions}>
              <label htmlFor="dosingInstructions">Dosing Instructions</label>
              <textarea
                name="dosingInstructions"
                id="dosingInstructions"
                rows={10}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.medicationFooter}>
        <button
          style={{ width: "50%", position: "sticky" }}
          className="omrs-btn omrs-outlined-neutral"
        >
          Cancel
        </button>
        <button
          style={{ width: "50%" }}
          className="omrs-btn omrs-filled"
          disabled={true}
        >
          Sign & Save
        </button>
      </div>
    </form>
  );
}

type MedicationOrderProps = {
  match: match;
};
