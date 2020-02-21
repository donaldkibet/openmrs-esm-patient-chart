import React from "react";
import { match, useRouteMatch } from "react-router";
import { useCurrentPatient } from "@openmrs/esm-api";
import { mockPatient } from "../../../__mocks__/patient.mock";
import {
  getAllergyReaction,
  getPatientAllergyByPatientUuid,
  getAllergyAllergenByConceptUuid,
  deletePatientAllergy,
  savePatientAllergy,
  updatePatientAllergy
} from "./allergy-intolerance.resource";
import { cleanup, render, wait, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {
  AllergyForm,
  DRUG_ALLERGEN_CONCEPT,
  SEVERE_REACTION_SEVERITY_CONCEPT,
  MODERATE_REACTION_SEVERITY_CONCEPT,
  MILD_REACTION_SEVERITY_CONCEPT,
  ENVIROMENTAL_ALLERGEN_CONCEPT,
  FOOD_ALLERGEN_CONCEPT
} from "./allergy-form.component";
import {
  mockPatientAllergy,
  mockAllergyReactions,
  mockAllergyAllergens
} from "../../../__mocks__/allergy.mock";
import { of } from "rxjs";
import { act } from "react-dom/test-utils";

const mockUseCurrentPatient = useCurrentPatient as jest.Mock;
const mockGetPatientAllergyByPatientUuid = getPatientAllergyByPatientUuid as jest.Mock;
const mockGetAllegyReaction = getAllergyReaction as jest.Mock;
const mockUseRouteMatch = useRouteMatch as jest.Mock;
const mockGetAllergyAllergenByConceptUuid = getAllergyAllergenByConceptUuid as jest.Mock;
const mockDeletePatientAllergy = deletePatientAllergy as jest.Mock;
const mockSavePatientAllergy = savePatientAllergy as jest.Mock;
const mockUpdatePatientAllergy = updatePatientAllergy as jest.Mock;

jest.mock("./allergy-intolerance.resource", () => ({
  getAllergyReaction: jest.fn(),
  getAllergyAllergenByConceptUuid: jest.fn(),
  getPatientAllergyByPatientUuid: jest.fn(),
  deletePatientAllergy: jest.fn(),
  savePatientAllergy: jest.fn(),
  updatePatientAllergy: jest.fn()
}));

jest.mock("@openmrs/esm-api", () => ({
  useCurrentPatient: jest.fn()
}));

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useRouteMatch: jest.fn()
}));

describe("<AllergyForm />", () => {
  let match: match = { params: {}, isExact: false, path: "/", url: "/" };
  let matchEdit: match = {
    params: { allergyUuid: "e68fb587-486b-4894-9fc8-eba08fe682c7" },
    isExact: false,
    path: "/",
    url: "/"
  };
  let patient: fhir.Patient = mockPatient;

  afterEach(cleanup);
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should render without dying", async () => {
    act(() => {
      mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
      mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
      mockGetAllegyReaction.mockReturnValue(
        of(mockAllergyReactions.setMembers)
      );
      mockUseRouteMatch.mockReturnValue(match);
      <BrowserRouter>
        <AllergyForm />
      </BrowserRouter>;
    });
  });

  it("should display the create form of Allergy form", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(match);
    mockGetAllergyAllergenByConceptUuid.mockReturnValue(
      of(mockAllergyAllergens.data.setMembers)
    );
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });
    expect(wrapper.getByText("Add Allergy")).toBeTruthy();
  });

  it("should display allergen catergory correctly", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(match);
    mockGetAllergyAllergenByConceptUuid.mockReturnValue(
      of(mockAllergyAllergens.data.setMembers)
    );
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });
    expect(wrapper.getByText("Add Allergy")).toBeTruthy();

    const drugOrderNode = wrapper.getByDisplayValue(DRUG_ALLERGEN_CONCEPT);
    act(() => {
      fireEvent.click(drugOrderNode, new MouseEvent("click"));
    });
    expect(wrapper.getByText("Drug allergen").textContent).toBeTruthy();

    const enviromentalAllergenCatergory = wrapper.getByDisplayValue(
      ENVIROMENTAL_ALLERGEN_CONCEPT
    );
    act(() => {
      fireEvent.click(enviromentalAllergenCatergory, new MouseEvent("click"));
    });
    expect(wrapper.getByText("Enviromental allergen").textContent).toBeTruthy();

    const foodAllergenCatergory = wrapper.getByDisplayValue(
      FOOD_ALLERGEN_CONCEPT
    );
    act(() => {
      fireEvent.click(foodAllergenCatergory, new MouseEvent("click"));
    });
    expect(wrapper.getByText("Food allergen").textContent).toBeTruthy();

    const otherAllergenCatergory = wrapper.getByDisplayValue("noAllergy");
    act(() => {
      fireEvent.click(otherAllergenCatergory, {
        target: { value: "noAllergy" }
      });
    });
    expect(
      wrapper.getByText("Patient has no allergies").textContent
    ).toBeTruthy();
  });

  it("should display the edit view of the Allergy form", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(matchEdit);
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });
    expect(wrapper.getByText("Edit Allergy")).toBeTruthy();
  });

  it("should display the allergy reaction and drug allergens when allergy drug catergory is selected", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(match);
    mockGetAllergyAllergenByConceptUuid.mockReturnValue(
      of(mockAllergyAllergens.data.setMembers)
    );
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });

    const drugOrderNode = wrapper.getByDisplayValue(DRUG_ALLERGEN_CONCEPT);

    act(() => {
      fireEvent.click(drugOrderNode, new MouseEvent("click"));
    });

    expect(wrapper.getByText("ACE inhibitors")).toBeTruthy();
    expect(wrapper.getByText("Heparins")).toBeTruthy();
  });

  it("should enable the save button once all required field are filled in with data", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(match);
    mockGetAllergyAllergenByConceptUuid.mockReturnValue(
      of(mockAllergyAllergens.data.setMembers)
    );
    mockSavePatientAllergy.mockReturnValue(Promise.resolve({ status: 201 }));
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });

    const drugOrderNode = wrapper.getByDisplayValue(DRUG_ALLERGEN_CONCEPT);

    act(() => {
      fireEvent.click(drugOrderNode, new MouseEvent("click"));
    });

    const drugAllegenNode = wrapper.getByDisplayValue(
      "162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );

    act(() => {
      fireEvent.click(drugAllegenNode, new MouseEvent("click"));
    });

    const reactionNode = wrapper.getByDisplayValue(
      "121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );
    const severeReactionNode = wrapper.getByDisplayValue(
      SEVERE_REACTION_SEVERITY_CONCEPT
    );
    const mildReactionNode = wrapper.getByDisplayValue(
      MILD_REACTION_SEVERITY_CONCEPT
    );
    const moderateReactionNode = wrapper.getByDisplayValue(
      MODERATE_REACTION_SEVERITY_CONCEPT
    );
    const commentNode = wrapper.container.querySelector(
      ".allergyCommentTextArea"
    );

    await wait(() => {
      act(() => {
        fireEvent.click(reactionNode, new MouseEvent("click"));
        fireEvent.click(severeReactionNode, {
          target: {
            value: "1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
          }
        });
        fireEvent.change(commentNode, {
          target: {
            value: "Welcome"
          }
        });
        fireEvent.click(mildReactionNode, {
          target: {
            value: MILD_REACTION_SEVERITY_CONCEPT
          }
        });
        fireEvent.click(moderateReactionNode, {
          target: {
            value: MODERATE_REACTION_SEVERITY_CONCEPT
          }
        });
      });
    });

    const saveButton = wrapper.getByText("Sign & Save");

    expect(severeReactionNode.value).toBe(SEVERE_REACTION_SEVERITY_CONCEPT);
    expect(commentNode.value).toBe("Welcome");
    expect(wrapper.getByText("Cancel")).toBeDefined();
    expect(saveButton.disabled).toBe(false);

    act(() => {
      fireEvent.click(saveButton, new MouseEvent("click"));
    });
  });

  it("should clear selected field when cancel button is clicked", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(match);
    mockGetAllergyAllergenByConceptUuid.mockReturnValue(
      of(mockAllergyAllergens.data.setMembers)
    );
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });

    const drugOrderNode = wrapper.getByDisplayValue(DRUG_ALLERGEN_CONCEPT);

    act(() => {
      fireEvent.click(drugOrderNode, new MouseEvent("click"));
    });

    const drugAllegenNode = wrapper.getByDisplayValue(
      "162298AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );

    act(() => {
      fireEvent.change(drugAllegenNode, { target: { checked: true } });
    });

    expect(drugAllegenNode.checked).toBe(true);

    const cancelButton = wrapper.getByText("Cancel");

    act(() => {
      fireEvent.click(cancelButton, new MouseEvent("click"));
    });

    expect(drugAllegenNode.checked).toBe(false);
  });

  it("should display the edit form and display patient allergy", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(matchEdit);
    mockGetAllergyAllergenByConceptUuid.mockReturnValue(
      of(mockAllergyAllergens.data.setMembers)
    );
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });

    expect(wrapper.getByText("Patient Allergy comments")).toBeTruthy();
    expect(wrapper.getByDisplayValue("2019-12-16")).toBeTruthy();
    expect(
      wrapper.getByDisplayValue(SEVERE_REACTION_SEVERITY_CONCEPT).checked
    ).toBe(true);
    expect(
      wrapper.getByDisplayValue("121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA").checked
    ).toBe(true);
  });

  it("should enable user update patient allergy", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(matchEdit);
    mockGetAllergyAllergenByConceptUuid.mockReturnValue(
      of(mockAllergyAllergens.data.setMembers)
    );
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });

    const severeReaction = wrapper.getByDisplayValue(
      SEVERE_REACTION_SEVERITY_CONCEPT
    );
    const mildReaction = wrapper.getByDisplayValue(
      MILD_REACTION_SEVERITY_CONCEPT
    );
    const moderateReaction = wrapper.getByDisplayValue(
      MODERATE_REACTION_SEVERITY_CONCEPT
    );
    const patientAllergyComment = wrapper.getByText("Patient Allergy comments");
    const updatedDate = wrapper.getByDisplayValue("2019-12-16");

    await wait(() => {
      act(() => {
        fireEvent.click(severeReaction, {
          target: { value: MODERATE_REACTION_SEVERITY_CONCEPT }
        });
        fireEvent.click(mildReaction, {
          target: { value: MODERATE_REACTION_SEVERITY_CONCEPT }
        });
        fireEvent.click(moderateReaction, {
          target: { value: MODERATE_REACTION_SEVERITY_CONCEPT }
        });
        fireEvent.change(patientAllergyComment, {
          target: { value: "Updated Patient Allergy Comment" }
        });
        fireEvent.change(updatedDate, { target: { value: "2019-12-17" } });
      });
    });

    expect(patientAllergyComment.value).toBe("Updated Patient Allergy Comment");
    expect(updatedDate.value).toBe("2019-12-17");
    expect(moderateReaction.checked).toBe(true);
  });

  it("should reset the edit form to initial state", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(matchEdit);
    mockGetAllergyAllergenByConceptUuid.mockReturnValue(
      of(mockAllergyAllergens.data.setMembers)
    );
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });

    const severeReaction = wrapper.getByDisplayValue(
      SEVERE_REACTION_SEVERITY_CONCEPT
    );
    const mildReaction = wrapper.getByDisplayValue(
      MILD_REACTION_SEVERITY_CONCEPT
    );
    const moderateReaction = wrapper.getByDisplayValue(
      MODERATE_REACTION_SEVERITY_CONCEPT
    );
    const patientAllergyComment = wrapper.getByText("Patient Allergy comments");
    const updatedDate = wrapper.getByDisplayValue("2019-12-16");

    await wait(() => {
      act(() => {
        fireEvent.click(severeReaction, {
          target: { value: MODERATE_REACTION_SEVERITY_CONCEPT }
        });
        fireEvent.click(mildReaction, {
          target: { value: MODERATE_REACTION_SEVERITY_CONCEPT }
        });
        fireEvent.click(moderateReaction, {
          target: { value: MODERATE_REACTION_SEVERITY_CONCEPT }
        });
        fireEvent.change(patientAllergyComment, {
          target: { value: "Updated Patient Allergy Comment" }
        });
        fireEvent.change(updatedDate, { target: { value: "2019-12-17" } });
      });
    });

    expect(patientAllergyComment.value).toBe("Updated Patient Allergy Comment");
    expect(updatedDate.value).toBe("2019-12-17");
    expect(moderateReaction.checked).toBe(true);

    const cancelButton = wrapper.getByText("Cancel");

    act(() => {
      fireEvent.click(cancelButton, new MouseEvent("click"));
    });

    expect(updatedDate.value).toBe("2019-12-16");
  });

  it("should enable user to delete an allergy", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(matchEdit);
    mockGetAllergyAllergenByConceptUuid.mockReturnValue(
      of(mockAllergyAllergens.data.setMembers)
    );
    mockDeletePatientAllergy.mockReturnValue(Promise.resolve({ status: 204 }));
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });

    const deleteButton = wrapper.getByText("Delete");

    act(() => {
      fireEvent.click(deleteButton, new MouseEvent("click"));
    });
  });

  it("should save the edited patient allergy", async () => {
    mockUseCurrentPatient.mockReturnValue([false, patient, patient.id, null]);
    mockGetPatientAllergyByPatientUuid.mockResolvedValue(mockPatientAllergy);
    mockGetAllegyReaction.mockReturnValue(of(mockAllergyReactions.setMembers));
    mockUseRouteMatch.mockReturnValue(matchEdit);
    mockGetAllergyAllergenByConceptUuid.mockReturnValue(
      of(mockAllergyAllergens.data.setMembers)
    );
    mockUpdatePatientAllergy.mockReturnValue(Promise.resolve({ status: 201 }));
    let wrapper: any;
    await wait(() => {
      wrapper = render(
        <BrowserRouter>
          <AllergyForm />
        </BrowserRouter>
      );
    });

    const reactionNode = wrapper.getByDisplayValue(
      "121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    );
    const severeReactionNode = wrapper.getByDisplayValue(
      SEVERE_REACTION_SEVERITY_CONCEPT
    );

    act(() => {
      fireEvent.click(reactionNode, {
        target: { value: "121677AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" }
      });
      fireEvent.click(severeReactionNode, {
        target: { value: "SEVERE_REACTION_SEVERITY_CONCEPT" }
      });
    });

    const editButton = wrapper.getByText("Sign & Save");

    act(() => {
      fireEvent.click(editButton, new MouseEvent("click"));
    });
  });
});
