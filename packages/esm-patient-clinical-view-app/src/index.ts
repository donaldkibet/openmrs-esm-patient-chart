import { defineConfigSchema, getAsyncLifecycle } from "@openmrs/esm-framework";
import { backendDependencies } from "./openmrs-backend-dependencies";

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

function setupOpenMRS() {
  const moduleName = "@openmrs/esm-patient-clinical-view-app";

  const options = {
    featureName: "patient-forms",
    moduleName
  };

  defineConfigSchema(moduleName, {});

  return {
    extensions: [
      {
        id: "clinical-view",
        slot: "patient-chart-summary-dashboard-slot",
        load: getAsyncLifecycle(
          () => import("./widgets/clinical-view/clinical-view.component"),
          options
        ),
        meta: {
          columnSpan: 4
        }
      }
    ]
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
