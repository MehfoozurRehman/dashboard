import React, { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import {
  ChevronsLeft,
  ChevronsRight,
  Grid,
  Home,
  Settings,
} from "react-feather";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(window.location.pathname);
  return (
    <div className="container__sidebar">
      <div className="container__sidebar__header">
        <ButtonIcon
          icon={
            sidebarOpen ? (
              <ChevronsLeft size={18} color="currentColor" />
            ) : (
              <ChevronsRight size={18} color="currentColor" />
            )
          }
          onClick={() => {
            console.log("eeeeeeeeeeeeeeeeeee");
          }}
        />
      </div>
      <div className="container__sidebar__main">
        <NavLink
          icon={<Grid strokeWidth={1.5} size={18} color="currentColor" />}
          label="Dashboard"
          to="/dashboard"
        />
        <NavLink
          icon={<Settings strokeWidth={1.5} size={18} color="currentColor" />}
          label="Settings"
          to="/dashboard/settings"
        />
      </div>
      <div className="container__sidebar__footer">
        <NavLink
          icon={<ChevronsLeft size={18} color="currentColor" />}
          label="Dashboard"
        />
      </div>
    </div>
  );
}

function NavLink(props) {
  const navigate = useNavigate();
  return (
    <div className="container__sidebar__main__entry">
      <input
        type="radio"
        className="container__sidebar__main__entry__input"
        name="container__sidebar__main__entry"
        defaultChecked={window.location.pathname.includes(props.to)}
        onClick={() => {
          navigate(props.to);
        }}
        {...props}
      />
      <div className="container__sidebar__main__entry__content">
        <div className="container__sidebar__main__entry__content__icon">
          {props.icon}
        </div>
        <div className="container__sidebar__main__entry__content__text">
          {props.label}
        </div>
      </div>
    </div>
  );
}
