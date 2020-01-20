import { openmrsObservableFetch, openmrsFetch } from "@openmrs/esm-api";
import { Observable } from "rxjs";
import { map, take, filter } from "rxjs/operators";

type PatientMedications = {
  uuid: Number;
};

export function performPatientMedicationsSearch(
  patientID: string
): Observable<PatientMedications[]> {
  return openmrsObservableFetch(
    `/ws/fhir/MedicationRequest?patient=${patientID}`
  ).pipe(
    map(({ data }) => data["entry"]),
    map(entries => entries.map(entry => entry.resource)),
    take(3)
  );
}

export function fetchPatientMedications(
  patientID: string
): Observable<PatientMedications[]> {
  return openmrsObservableFetch(
    `/ws/rest/v1/order?v=full&patient=${patientID}`
  ).pipe(
    map(({ data }) => {
      const meds = [];
      data["results"].map(result => {
        if (result.type === "drugorder") {
          meds.push(result);
        }
      });
      return meds;
    })
  );
}

export function getDrugByName(
  drugName: string,
  abortController: AbortController
) {
  return openmrsFetch(
    `/ws/rest/v1/drug?q=${drugName}&v=custom:(uuid,name,strength,dosageForm:(display))`,
    { signal: abortController.signal }
  );
}

export function saveNewDrugOrder(
  abortContoller: AbortController,
  drugOrder: any
) {
  return openmrsFetch(`/ws/rest/v1/order`, {
    method: "POST",
    signal: abortContoller.signal,
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      patient: drugOrder.patientUuid,
      careSetting: drugOrder.careSetting,
      orderer: drugOrder.orderer,
      encounter: drugOrder.encounterUuid,
      drug: drugOrder.drugUuid,
      dose: drugOrder.dose,
      doseUnits: drugOrder.doseUnitsConcept,
      route: drugOrder.routeConcept,
      frequency: drugOrder.frequencyUuid,
      asNeeded: drugOrder.asNeeded,
      numRefills: drugOrder.numRefills,
      action: drugOrder.action,
      quantity: drugOrder.quantity,
      quantityUnits: drugOrder.quantityUnits,
      type: drugOrder.type
    }
  });
}
