import React, { useState } from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="container__sidebar">
      <div className="container__sidebar__header">
        <ButtonIcon
          icon={
            sidebarOpen ? (
              <ChevronsLeft size={20} color="currentColor" />
            ) : (
              <ChevronsRight size={20} color="currentColor" />
            )
          }
          onClick={() => {
            console.log("eeeeeeeeeeeeeeeeeee");
          }}
        />
        <Button
          label="hello"
          onClick={() => {
            console.log("eeeeeeeeeeeeeeeeeee");
          }}
        />
        <ButtonTextIcon
          label="hello"
          icon={<ChevronsRight size={20} color="currentColor" />}
          onClick={() => {
            console.log("eeeeeeeeeeeeeeeeeee");
          }}
        />
        <InputText
          placeholder="hello"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <InputDate
          placeholder="hello"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <InputTime
          placeholder="hello"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
      <div className="container__sidebar__main"></div>
      <div className="container__sidebar__footer"></div>
    </div>
  );
}

function ButtonTextIcon(props) {
  return (
    <button className="button button__icon__text" {...props}>
      {props.icon}
      {props.label}
    </button>
  );
}

function Button(props) {
  return (
    <button className="button button__text" {...props}>
      {props.label}
    </button>
  );
}

function ButtonIcon(props) {
  return (
    <button className="button button__icon" {...props}>
      {props.icon}
    </button>
  );
}

function InputText(props) {
  return (
    <div className="input__box">
      <label htmlFor={props.placeholder}>{props.placeholder}</label>
      <input type="text" className="input__box__field" {...props} />
    </div>
  );
}
function InputDate(props) {
  return (
    <div className="input__box">
      <label htmlFor={props.placeholder}>{props.placeholder}</label>
      <input type="date" className="input__box__field" {...props} />
    </div>
  );
}
function InputTime(props) {
  return (
    <div className="input__box">
      <label htmlFor={props.placeholder}>{props.placeholder}</label>
      <input type="time" className="input__box__field" {...props} />
    </div>
  );
}
