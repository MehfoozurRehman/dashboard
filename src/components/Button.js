import React from "react";

export default function Button(props) {
  return (
    <button className="button button__text" {...props}>
      {props.label}
    </button>
  );
}
