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
