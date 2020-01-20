import React, { useState, useEffect } from "react";
import { match } from "react-router";
import SummaryCard from "../cards/summary-card.component";
import styles from "./medications-orders-basket.css";
import { getDrugByName, saveNewDrugOrder } from "./medications.resource";
import { debounce, isEmpty } from "lodash-es";
import { createErrorHandler } from "@openmrs/esm-error-handling";
import MedicationOrder from "./medication-order.component";
import { showToast } from "@openmrs/esm-styleguide";

export default function MedicationOrderBasket(
  props: MedicationOrderBasketProps
) {
  const setSearchTimeOut = 300;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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

  const handleSubmit = () => {
    if (!isEmpty(orderBasket)) {
      const abortController = new AbortController();
      saveNewDrugOrder(abortController, orderBasket[0]).then(response => {});
      return () => abortController.abort();
    } else {
    }
  };

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

      {orderBasket && (
        <div className={styles.orderBasket}>
          <table>
            <thead>
              <tr>
                <th>Order No</th>
                <th>Order Type</th>
                <th>Drug</th>
              </tr>
            </thead>
            <tbody>
              {orderBasket &&
                orderBasket.map((orders, key) => {
                  return (
                    <tr key={key}>
                      <td>{orders.type}</td>
                      <td>{orders.action}</td>
                      <td>{orders.drugName}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}

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
              orderBasket={orderBasket}
            />
          </div>
        </div>
      )}

      <div
        className={`${styles.medicationFooter} ${
          orderBasket.length > 0 ? styles.borderTop : ""
        }`}
      >
        <button className="omrs-btn omrs-outlined-neutral">Cancel</button>
        <button
          className={`${
            orderBasket.length > 0
              ? "omrs-btn omrs-filled-action"
              : "omrs-btn omrs-outlined-neutral"
          }`}
          onClick={handleSubmit}
        >
          Sign
        </button>
      </div>
    </div>
  );
}

type MedicationOrderBasketProps = {
  match: match;
};
