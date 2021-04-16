import React from "react";
import { render } from "@testing-library/react";
import ClinicalView from "./clinical-view.component";

describe("<ClinicalView/>", () => {
  beforeEach(() => {
    render(<ClinicalView />);
  });

  it("should render without dying", () => {
    pending();
  });
});
