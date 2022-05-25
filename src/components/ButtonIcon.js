import React from "react";

export default function ButtonIcon(props) {
  return (
    <button className="button button__icon" {...props}>
      {props.icon}
    </button>
  );
}
