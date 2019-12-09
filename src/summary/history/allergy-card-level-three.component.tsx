import React from "react";
import { match } from "react-router";
import SummaryCard from "../cards/summary-card.component";
import style from "./allergy-card-level-three.css";
import {
  getAllergyAllergenByConceptUuid,
  getAllergyReaction
} from "./allergy-intolerance.resource";
import { createErrorHandler } from "@openmrs/esm-error-handling";

export function AllergyCardLevelThreeAdd(props: AllergyCardLevelThreeAddProps) {
  const [categoryReaction, setCategoryReaction] = React.useState(null);
  const [allergen, setAllergen] = React.useState(null);
  const [displayReaction, setDisplayReaction] = React.useState(false);
  const [allergyReaction, setAllergyReaction] = React.useState();

  const handleCategoryReactionChange = event => {
    setAllergen(null);
    setCategoryReaction(event.target.value);
  };

  React.useEffect(() => {
    if (categoryReaction) {
      getAllergyAllergenByConceptUuid(categoryReaction).subscribe(
        data => setAllergen(data),
        createErrorHandler
      );
      getAllergyReaction().subscribe(
        data => setAllergyReaction(data),
        createErrorHandler
      );
    }
    setDisplayReaction(false);
  }, [categoryReaction]);

  return (
    <SummaryCard
      name="Add Allergy"
      link=""
      match={props.match}
      styles={{
        width: "100%",
        background: "var(--omrs-color-bg-medium-contrast)"
      }}
    >
      <div>
        <h4 className={`${style.allergyHeader} omrs-bold`}>
          Category of reaction
        </h4>
        <div className={`${style.container}`}>
          <div className="omrs-radio-button">
            <label>
              <input
                type="radio"
                name="category"
                value="162552AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                onChange={handleCategoryReactionChange}
              />
              <span>Drug</span>
            </label>
          </div>
          <div className="omrs-radio-button">
            <label>
              <input
                type="radio"
                name="category"
                value="162553AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                onChange={handleCategoryReactionChange}
              />
              <span>Food</span>
            </label>
          </div>
          <div className="omrs-radio-button">
            <label>
              <input
                type="radio"
                name="category"
                value="162554AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                onChange={handleCategoryReactionChange}
              />
              <span>Enviromental</span>
            </label>
          </div>
          <div className="omrs-radio-button">
            <label>
              <input
                type="radio"
                name="category"
                value="noAllergy"
                onChange={handleCategoryReactionChange}
              />
              <span>Patient has no allergies</span>
            </label>
          </div>
        </div>
        {allergen && (
          <form>
            <h4 className={`${style.allergyHeader} omrs-bold`}>
              Medication allergen
            </h4>
            <div className={style.container}>
              {allergen.map(el => {
                return (
                  <div className="omrs-radio-button" key={el.name.uuid}>
                    <label>
                      <input type="radio" name="allergen" value="drug" />
                      <span>{el.name.display}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </form>
        )}
        {allergen && allergyReaction && (
          <form>
            <h4 className={`${style.allergyHeader} omrs-bold`}>Reactions</h4>
            <h4 className={style.allergyHeader}>Select all that apply</h4>
            <div className={style.container}>
              {allergyReaction.map(el => {
                return (
                  <div className="omrs-checkbox" key={el.name.uuid}>
                    <label>
                      <input type="checkbox" name="allergen" value="drug" />
                      <span>{el.name.display}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </form>
        )}
        {allergen && (
          <form>
            <h4 className={`${style.allergyHeader} omrs-bold`}>
              Severity of worst reaction
            </h4>
            <div className={`${style.container}`}>
              <div className="omrs-radio-button">
                <label>
                  <input type="radio" name="reactionseverity" value="mild" />
                  <span>Mild</span>
                </label>
              </div>
              <div className="omrs-radio-button">
                <label>
                  <input
                    type="radio"
                    name="reactionseverity"
                    value="moderate"
                  />
                  <span>Moderate</span>
                </label>
              </div>
              <div className="omrs-radio-button">
                <label>
                  <input type="radio" name="reactionseverity" value="severe" />
                  <span>Severe</span>
                </label>
              </div>
            </div>
            <h4 className={`${style.allergyHeader} omrs-bold`}>
              Date of first onset
            </h4>
            <div className={`${style.container}`}>
              <div className="omrs-datepicker">
                <input type="date" name="firstDateOfOnset" required />
                <svg className="omrs-icon" role="img">
                  <use xlinkHref="#omrs-icon-visibility"></use>
                </svg>
              </div>
            </div>
          </form>
        )}
      </div>
    </SummaryCard>
  );
}

type AllergyCardLevelThreeAddProps = {
  match: match;
};
