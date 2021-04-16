import React, { useMemo } from "react";
import Button from "carbon-components-react/es/components/Button";
import Tabs from "carbon-components-react/es/components/Tabs";
import Tab from "carbon-components-react/es/components/Tab";
import { useTranslation } from "react-i18next";
import styles from "./clinical-view.component.scss";
import {
  Extension,
  ExtensionSlot,
  useCurrentPatient
} from "@openmrs/esm-framework";

interface ClinicalViewTab {
  name: string;
  extensionName: string;
}

const ClinicalView: React.FC = () => {
  const { t } = useTranslation();
  const [loading, patient, patientUuid] = useCurrentPatient();
  const state = useMemo(() => {
    return { patient, patientUuid };
  }, [patient, patientUuid]);
  const [clinicalViewTabs, setClinicalViewTabs] = React.useState<
    Array<ClinicalViewTab>
  >([]);
  const [selectedViewIndex, setSelectedViewIndex] = React.useState(0);

  React.useEffect(() => {
    setClinicalViewTabs([
      { name: "All", extensionName: "All" },
      { name: "Header Actions", extensionName: "patient-header-slot" },
      { name: "Actions", extensionName: "patient-actions-slot" }
    ]);
  }, []);
  return (
    <div className={styles.clinicalViewContainer}>
      <div className={styles.clinicalViewTitle}>
        <span>{t("clinicalView", "Clinical View")}</span>
        <Button kind="ghost">
          {selectedViewIndex === 0
            ? t("addView", "Add View")
            : t("editView", "Edit View")}
        </Button>
      </div>
      <div>
        <Tabs
          scrollIntoView={false}
          type="container"
          tabContentClassName={styles.tabContent}
          onSelectionChange={event => {
            setSelectedViewIndex(event);
          }}
        >
          {clinicalViewTabs.map((clinicalView, index) => (
            <Tab
              className={styles.tabLabel}
              href="#"
              key={index}
              id={clinicalView.name}
              label={clinicalView.name}
            >
              {index === 0 ? (
                clinicalViewTabs.map((view, index) => (
                  <ExtensionSlot
                    key={index}
                    extensionSlotName={view.extensionName}
                    state={state}
                  />
                ))
              ) : (
                <ExtensionSlot
                  extensionSlotName={clinicalView.extensionName}
                  state={state}
                />
              )}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ClinicalView;
