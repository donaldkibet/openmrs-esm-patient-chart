import React, { useState, useEffect } from "react";
import { match } from "react-router";
import SummaryCard from "../cards/summary-card.component";
import styles from "./medications-orders-basket.css";
import { getDrugByName } from "./medications.resource";
import { debounce, isEmpty } from "lodash-es";
import { createErrorHandler } from "@openmrs/esm-error-handling";
import MedicationOrder from "./medication-order.component";

export default function MedicationOrderBasket(
  props: MedicationOrderBasketProps
) {
  const setSearchTimeOut = 300;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultsEmpty, setIsResultEmpty] = useState(false);
  const [orderBasket, setOrderBasket] = useState([]);
  const [showOrderMedication, setShowOrderMedication] = useState(false);

  const handleChange = debounce(searchTerm => {
    setSearchTerm(searchTerm);
  }, setSearchTimeOut);

  const handleOrderSelected = () => {
    setShowOrderMedication(true);
  };

  useEffect(() => {
    const abortController = new AbortController();
    if (searchTerm.length > 3) {
      getDrugByName(searchTerm, abortController).then(
        response => setSearchResults(response.data.results),
        createErrorHandler()
      );
    } else {
      setSearchResults([]);
    }
    return () => abortController.abort();
  }, [searchTerm]);

  const handleKeyDown = event => {
    if (event.key === "Escape") {
      setShowOrderMedication(false);
      setSearchResults([]);
    }
  };

  function hideModal() {
    setSearchResults([]);
    setShowOrderMedication(false);
  }

  window.addEventListener("keydown", handleKeyDown);

  return (
    <div className={styles.medicationsOrderBasket}>
      <div
        className={`${
          isEmpty(searchResults) && !showOrderMedication
            ? styles.noShowDialog
            : styles.modal
        }`}
      >
        <div
          className={`${
            isEmpty(searchResults) && !showOrderMedication
              ? styles.noShowDialog
              : styles.modalContent
          }`}
        >
          <SummaryCard
            name="Order Medications"
            match={props.match}
            styles={{ width: "100%" }}
          >
            <div className={styles.inputMedication}>
              <input
                type="text"
                name="medicationname"
                id="medicationname"
                autoFocus
                placeholder="medication name"
                onChange={$event => handleChange($event.target.value)}
              />
            </div>
          </SummaryCard>

          <div className={`omrs-card ${styles.medicationsResults}`}>
            {!isEmpty(searchResults) &&
              !showOrderMedication &&
              searchResults.map(drugs => {
                return (
                  <li key={drugs.uuid}>
                    {drugs.name}
                    {drugs.strength}
                  </li>
                );
              })}
          </div>
        </div>
      </div>

      <div className={styles.orderBasket}>
        <ul>
          <li>Order One</li>
          <li>Order Two</li>
        </ul>
      </div>

      {showOrderMedication && (
        <div
          className={`${showOrderMedication ? styles.modal : styles.noDisplay}`}
        >
          <div className={styles.modalContent} style={{ height: "90%" }}>
            <MedicationOrder
              drugName={searchTerm}
              match={props.match}
              setOrderBasket={setOrderBasket}
              hideModal={hideModal}
            />
          </div>
        </div>
      )}

      <div className={styles.medicationFooter}>
        <button className="omrs-btn omrs-outlined-neutral">A button</button>
        <button className="omrs-btn omrs-outlined-neutral">Sign & Save</button>
      </div>
    </div>
  );
}

type MedicationOrderBasketProps = {
  match: match;
};
