import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import openmrsRootDecorator from "@openmrs/react-root-decorator";
import PatientChartSummary from "./summary/patient-chart-summary.component";
import PatientChartSection from "./patient-chart-section.component";

function Root(props) {
  return (
    <BrowserRouter basename={window["getOpenmrsSpaBase"]()}>
      <Route
        exact
        path="/patient/:patientUuid/chart"
        component={PatientChartSummary}
      />
      <Route
        exact
        path="/patient/:patientUuid/chart/allergy"
        component={PatientChartSection}
      />
    </BrowserRouter>
  );
}

export default openmrsRootDecorator({ featureName: "patient-chart" })(Root);
