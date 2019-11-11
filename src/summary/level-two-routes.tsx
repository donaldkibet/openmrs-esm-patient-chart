import React from "react";
import { match, Switch } from "react-router";
import { Route } from "react-router-dom";
import { AllergyCardLevelTwo } from "./history/allergy-card-level-two.component";
import { getCurrentPatient } from "@openmrs/esm-api";
import { createErrorHandler } from "@openmrs/esm-error-handling";

export function LevelTwoRoutes(props: LevelTwoRoutesProps) {
  const [currentPatient, setCurrentPatient] = React.useState(null);

  React.useEffect(() => {
    const subscription = getCurrentPatient().subscribe(patient => {
      setCurrentPatient(patient);
      createErrorHandler();
    });

    return () => subscription.unsubscribe();
  });

  return (
    <main className="omrs-main-content">
      <Switch>
        {currentPatient && (
          <Route
            path="/patient/:patientUuid/chart/allergy"
            render={routeProps => (
              <AllergyCardLevelTwo
                match={props.match}
                currentPatient={currentPatient}
              />
            )}
          />
        )}
      </Switch>
    </main>
  );
}

type LevelTwoRoutesProps = {
  match: match;
};
