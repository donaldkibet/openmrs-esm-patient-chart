import React from "react";
import { match } from "react-router";
import SummaryCard from "../cards/summary-card.component";
import SummaryCardRow from "../cards/summary-card-row.component";
import SummaryCardRowContent from "../cards/summary-card-row-content.component";
import style from "./conditions-card-style.css";
import { performPatientConditionsSearch } from "./conditions.resource";
import dayjs from "dayjs";

export default function ConditionsCard(props: ConditionsCardProps) {
  const [patientConditions, setPatientConditions] = React.useState(null);

  React.useEffect(() => {
    const abortController = new AbortController();

    performPatientConditionsSearch(
      props.currentPatient.identifier[0].value,
      abortController
    )
      .then(conditions => setPatientConditions(conditions))
      .catch(error => {
        throw error;
      });

    return () => abortController.abort();
  }),
    [props.currentPatient.identifier[0].value];

  return (
    <SummaryCard name="Conditions" match={props.match}>
      <div className={style.conditionsHeader}>
        <p>Active Conditions</p>
        <p>Since</p>
      </div>
      {patientConditions &&
        patientConditions.total > 0 &&
        patientConditions.entry.map(condition => {
          return (
            <SummaryCardRow key={condition.resource.id} linkTo="/">
              <SummaryCardRowContent justifyContent="space-between">
                <p className={`omrs-bold ${style.activeCondition}`}>
                  {condition.resource.code.text}
                </p>
                <p className={`omrs-type-body-large ${style.conditionDate}`}>
                  {dayjs(condition.resource.onsetDateTime).format("MMM-YYYY")}
                </p>
              </SummaryCardRowContent>
            </SummaryCardRow>
          );
        })}
      <div className={style.ConditionViewMore}>
        <svg className="omrs-icon" fill="var(--omrs-color-ink-low-contrast)">
          <use xlinkHref="#omrs-icon-chevron-right" />
        </svg>
        <p className={"omrs-bold"}>more</p>
      </div>
    </SummaryCard>
  );
}

type ConditionsCardProps = {
  match: match;
  currentPatient: any;
};
