import React from "react";
import PropTypes from "prop-types";

export default function Avatar(props) {
  return (
    <button className="avatar">
      <img
        src={
          props.pic
            ? props.pic
            : "https://ui-avatars.com/api/?name=" +
              props.alt +
              "&background=f3f3f3&color=242424&font-size=0.33"
        }
        alt={props.alt}
        className="avatar__img"
        style={
          props.size === "lg"
            ? { width: 50, height: 50 }
            : props.size === "md"
            ? { width: 40, height: 40 }
            : props.size === "sm"
            ? { width: 30, height: 30 }
            : null
        }
      />
    </button>
  );
}
Avatar.propTypes = {
  pic: PropTypes.string,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
