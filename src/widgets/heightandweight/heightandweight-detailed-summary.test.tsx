import React from "react";
import { BrowserRouter, match } from "react-router-dom";
import { HeightAndWeightDetailedSummary } from "./heightandweight-detailed-summary.component";
import { useCurrentPatient, openmrsObservableFetch } from "@openmrs/esm-api";
import { mockDimensionResponseRESTAPI } from "../../../__mocks__/dimensions.mock";
import { mockPatient } from "../../../__mocks__/patient.mock";
import { render, wait } from "@testing-library/react";
import { of } from "rxjs";
import { useParams } from "react-router";

const mockUseCurrentPatient = useCurrentPatient as jest.Mock;
const mockOpenmrsObservableFetch = openmrsObservableFetch as jest.Mock;
const mockUseParams = useParams as jest.Mock;

jest.mock("@openmrs/esm-api", () => ({
  useCurrentPatient: jest.fn(),
  openmrsObservableFetch: jest.fn()
}));

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: jest.fn()
}));

describe("<HeightAndWeightDetailedSummary/>", () => {
  let match: match = { params: {}, url: "/", isExact: false, path: "/" };
  let patient: fhir.Patient = mockPatient;
  beforeEach(() => {
    mockOpenmrsObservableFetch.mockReset();
    mockUseCurrentPatient.mockReset();
    mockUseParams.mockReset();
  });

  it("render withour dying", () => {
    mockOpenmrsObservableFetch.mockReturnValue(
      of(mockDimensionResponseRESTAPI)
    );
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockUseParams.mockReturnValue({
      uuid: "bbd27a2f-442a-418a-9952-f2bb0e54df97"
    });
    <BrowserRouter>
      <HeightAndWeightDetailedSummary
        match={match}
      ></HeightAndWeightDetailedSummary>
    </BrowserRouter>;
  });

  it("should display the height, weight, bmi correctly", async () => {
    mockOpenmrsObservableFetch.mockReturnValue(
      of(mockDimensionResponseRESTAPI)
    );
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockUseParams.mockReturnValue({
      uuid: "bbd27a2f-442a-418a-9952-f2bb0e54df97"
    });
    const wrapper = render(
      <BrowserRouter>
        <HeightAndWeightDetailedSummary
          match={match}
        ></HeightAndWeightDetailedSummary>
      </BrowserRouter>
    );
    await wait(() => {
      const tbody = wrapper.container.querySelector("tbody");
      const firstRow = tbody.children[0];

      const measuredAtTime = firstRow.children[1].textContent;
      expect(measuredAtTime).toBe("14-Jan-2020 03:20 AM");

      expect(wrapper.getByTestId("weightKg").textContent).toBe("65 Kg");
      expect(wrapper.getByTestId("weightLbs").textContent).toBe("143.33 lbs");

      expect(wrapper.getByTestId("heightCm").textContent).toBe("165 cm");
      expect(wrapper.getByTestId("heightFeet").textContent).toBe(
        "5 feet 4.96 inches"
      );
    });
  });

  it("should display error message when response is empty", async () => {
    mockOpenmrsObservableFetch.mockReturnValue(
      of(mockDimensionResponseRESTAPI)
    );
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockUseParams.mockReturnValue({
      uuid: "bbd27a2f-442a-418a-9952-f2bb0e54df65"
    });
    const wrapper = render(
      <BrowserRouter>
        <HeightAndWeightDetailedSummary
          match={match}
        ></HeightAndWeightDetailedSummary>
      </BrowserRouter>
    );

    await wait(() => {
      expect(wrapper.getByTestId("errorMessage").textContent).toBe(
        "The patient's Height and Weight is not documented."
      );
      expect(wrapper.getByTestId("navigateLink").textContent).toBe(
        "Please add patient height and weight."
      );
    });
  });
});
