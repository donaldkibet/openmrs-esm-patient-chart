import React, { Fragment } from "react";
import { match } from "react-router";
import SummaryCard from "../cards/summary-card.component";
import styles from "./medication-order.css";
import dayjs from "dayjs";
import { getDrugByName } from "./medications.resource";
import json from "./common-medication.json";
import { useCurrentPatient } from "@openmrs/esm-api";

export default function MedicationOrder(props: MedicationOrderProps) {
  const [commonDrugOrders, setCommonDrugOrders] = React.useState(null);
  const [enableButton, setEnableButton] = React.useState(true);
  const [substitionsPermitted, setSubtitionsPermitted] = React.useState(false);
  const [dosageUnits, setDosageUnits] = React.useState(null);
  const [refills, setRefills] = React.useState(0);
  const [duration, setDuration] = React.useState();
  const [dosageInstructions, setDosageInstructions] = React.useState("");
  const [frequency, setFrequency] = React.useState("");
  const [dose, setDose] = React.useState();
  const [drugUuid, setDrugUuid] = React.useState("");
  const [routeUuid, setRouteUuid] = React.useState("");
  const [startDate, setStartDate] = React.useState(
    dayjs(new Date()).format("DD-MMM-YYYY")
  );
  const [endDate, setEndDate] = React.useState(
    dayjs(new Date()).format("DD-MMM-YYYY")
  );
  const [
    isLoadingPatient,
    patient,
    patientUuid,
    patientErr
  ] = useCurrentPatient();

  React.useEffect(() => {
    const abortcontroller = new AbortController();
    getDrugByName(props.drugName, abortcontroller).then(response => {
      setCommonDrugOrders(getCommonOrders(response.data.results[0].uuid));
      setDrugUuid(response.data.results[0].uuid);
    });
    return () => abortcontroller.abort();
  }, [props.drugName]);

  React.useEffect(() => {
    if (
      commonDrugOrders &&
      refills >= 0 &&
      startDate.length > 0 &&
      endDate.length > 0
    ) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [startDate, endDate, commonDrugOrders, refills]);

  React.useEffect(() => {
    if (commonDrugOrders) {
      commonDrugOrders[0].dosageUnits.map(el => {
        if (el.selected === true) {
          setDosageUnits(el.uuid);
        }
      });

      commonDrugOrders[0].commonFrequencies.map(frequency => {
        if (frequency.selected === true) {
          setFrequency(frequency.conceptUuid);
        }
      });

      commonDrugOrders[0].route.map(route => {
        if (route.selected === true) {
          setRouteUuid(route.conceptUuid);
        }
      });

      commonDrugOrders[0].commonDosages.map(dose => {
        if (dose.selected === true) {
          setDose(dose.numberOfPills);
        }
      });
    }
  }, [commonDrugOrders]);

  React.useEffect(() => {
    if (startDate.length > 0 && endDate.length > 0) {
      setDuration(dayjs(endDate).diff(dayjs(startDate), "day"));
    } else {
      setDuration(0);
    }
  }, [startDate, endDate]);

  function getCommonOrders(drugUuid: string) {
    return json.filter(el => el.uuid === drugUuid);
  }

  const handleIncreaseRefillClick = event => {
    setRefills(refills + 1);
  };

  const handleDecreaseRefillClick = event => {
    if (refills > 0) {
      setRefills(refills - 1);
    }
  };

  const handleSubmit = $event => {
    $event.preventDefault();
    props.setOrderBasket([
      ...props.orderBasket,
      {
        patientUuid: patientUuid,
        careSetting: "6f0c9a92-6f24-11e3-af88-005056821db0",
        orderer: "e89cae4a-3cb3-40a2-b964-8b20dda2c985",
        encounterUuid: "d2b0b677-0cd7-426e-9625-713e30cfd037",
        drugUuid: drugUuid,
        dose: dose,
        doseUnitsConcept: dosageUnits,
        routeConcept: routeUuid,
        frequencyUuid: frequency,
        asNeeded: substitionsPermitted,
        numRefills: refills,
        action: "NEW",
        quantity: 1,
        quantityUnits: "162396AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        type: "drugorder",
        drugName: props.drugName
      }
    ]);
    props.hideModal();
  };

  return (
    <form
      style={{ height: "80vh", position: "relative" }}
      onSubmit={handleSubmit}
    >
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
                commonDrugOrders[0].dosageUnits.map(drugOrder => {
                  return (
                    <Fragment key={drugOrder.name}>
                      <input
                        type="radio"
                        name="dosageUnit"
                        id={drugOrder.name}
                        defaultChecked={drugOrder.selected}
                        defaultValue={drugOrder.name}
                        onChange={$event => setDosageUnits($event.target.value)}
                      />
                      <label htmlFor={drugOrder.name}>{drugOrder.name}</label>
                    </Fragment>
                  );
                })}
              <input
                type="radio"
                name="dosageUnit"
                id="otherForm"
                onChange={$event => setDosageUnits($event.target.value)}
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
                        id={route.conceptUuid}
                        defaultChecked={route.selected}
                      />
                      <label htmlFor={route.conceptUuid}>{route.route}</label>
                    </Fragment>
                  );
                })}
              <input type="radio" name="route" id="radioThree" />
              <label htmlFor="radioThree">other</label>
            </div>
            <div className={`${styles.drugDosage} ${styles.drugDosageColor}`}>
              <span>Dose</span>
              {commonDrugOrders &&
                commonDrugOrders[0].commonDosages.map(drugOrder => {
                  return (
                    <Fragment key={drugOrder.dosage}>
                      <input
                        type="radio"
                        name="dosage"
                        id={drugOrder.dosage}
                        defaultChecked={drugOrder.selected}
                      />
                      <label htmlFor={drugOrder.dosage}>
                        {drugOrder.dosage}
                      </label>
                    </Fragment>
                  );
                })}
              <input type="radio" name="dosage" id="other" />
              <label htmlFor="other">other</label>
            </div>
            <div className={`${styles.drugDosage} ${styles.drugDosageColor}`}>
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
                        onChange={$event => setFrequency(frequency.conceptUuid)}
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
              <input
                type="text"
                name="startDate"
                id="startDate"
                defaultValue={startDate}
                required
                placeholder="Day-Month-Year"
                onChange={$event => setStartDate($event.target.value)}
              />
            </div>
            <div className={styles.inputTextControl}>
              <label htmlFor="endDate">End date</label>
              <input
                type="text"
                name="endDate"
                id="endDate"
                defaultValue={endDate}
                required
                placeholder="Day-Month-Year"
                onChange={$event => setEndDate($event.target.value)}
              />
            </div>
            <div className={styles.duration}>
              <span>
                Duration: <label className="omrs-bold">{duration}</label>
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
              <span>Last date with refills: </span>
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
                  name="toggleButton"
                  id="toggleButton1"
                  onChange={$event => setSubtitionsPermitted(false)}
                />
                <label htmlFor="toggleButton1">No</label>
                <input
                  type="radio"
                  name="toggleButton"
                  id="toggleButton2"
                  defaultChecked={!substitionsPermitted}
                  onChange={$event => setSubtitionsPermitted(true)}
                />
                <label htmlFor="toggleButton2">Yes</label>
              </div>
            </div>
            <div className={styles.dosingInstructions}>
              <label htmlFor="dosingInstructions">Dosing Instructions</label>
              <textarea
                name="dosingInstructions"
                id="dosingInstructions"
                rows={10}
                onChange={$event => setDosageInstructions($event.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.medicationFooter} ${
          enableButton ? styles.borderTop : ""
        }`}
      >
        <button
          style={{ width: "50%", position: "sticky" }}
          className="omrs-btn omrs-outlined-neutral"
        >
          Cancel
        </button>
        <button
          style={{ width: "50%" }}
          className={`${
            enableButton
              ? "omrs-btn omrs-filled-action"
              : "omrs-btn omrs-filled"
          }`}
          disabled={!enableButton}
        >
          Save
        </button>
      </div>
    </form>
  );
}

type MedicationOrderProps = {
  match: match;
  drugName: string;
  setOrderBasket?: any;
  hideModal?: any;
  orderBasket?: any[];
};
