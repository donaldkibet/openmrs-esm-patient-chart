import React from "react";
import style from "./allergy-card-horizontal-value.css";

export default function AllergyCardHorizontalValue(
  props: AllergyCardHorizontalValueProps
) {
  return (
    <div className={`${style.layout} ${props.contentStyles}`}>
      {props.value.map(element => {
        return <div className={style.content}>{element}</div>;
      })}
    </div>
  );
}

type AllergyCardHorizontalValueProps = {
  value: any[];
  contentStyles?: React.CSSProperties;
};
