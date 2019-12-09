import { openmrsFetch, openmrsObservableFetch } from "@openmrs/esm-api";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

const ALLERGYREACTIONCONCEPT: string = "162555AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

export function performPatientAllergySearch(
  patientIdentifer: string,
  abortController: AbortController
) {
  return openmrsFetch(
    `/ws/fhir/AllergyIntolerance?patient.identifier=${patientIdentifer}`,
    { signal: abortController.signal }
  );
}

export function getAllergyAllergenByConceptUuid(
  allegyUuid: string
): Observable<any> {
  return openmrsObservableFetch(
    `/ws/rest/v1/concept/${allegyUuid}?v=full`
  ).pipe(map(({ data }) => data["setMembers"]));
}

export function getAllergyReaction(): Observable<any> {
  return openmrsObservableFetch(
    `/ws/rest/v1/concept/${ALLERGYREACTIONCONCEPT}?v=full`
  ).pipe(map(({ data }) => data["setMembers"]));
}
