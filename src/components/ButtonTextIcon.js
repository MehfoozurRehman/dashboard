import React from "react";

export default function ButtonTextIcon(props) {
  return (
    <button className="button button__icon__text" {...props}>
      {props.icon}
      {props.label}
    </button>
  );
}
