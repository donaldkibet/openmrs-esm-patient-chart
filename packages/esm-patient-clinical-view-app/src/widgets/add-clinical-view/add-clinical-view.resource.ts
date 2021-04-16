import { openmrsObservableFetch } from "@openmrs/esm-framework";

export function fetchAllConditions() {
  return openmrsObservableFetch(`/ws/rest/`);
}
