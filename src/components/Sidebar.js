import React, { useState } from "react";
import {
  ChevronsLeft,
  ChevronsRight,
  Grid,
  LogOut,
  Menu,
  Pocket,
  Server,
  ShoppingCart,
} from "react-feather";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(window.location.pathname);
  return (
    <div
      className={
        sidebarOpen
          ? "container__sidebar container__sidebar__open"
          : "container__sidebar"
      }
    >
      <div className="container__sidebar__header">
        <NavLink
          noCheck={true}
          icon={
            sidebarOpen ? (
              <ChevronsLeft size={18} color="currentColor" />
            ) : (
              <ChevronsRight size={18} color="currentColor" />
            )
          }
          label={sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
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
          icon={<Server strokeWidth={1.5} size={18} color="currentColor" />}
          label="Table"
          to="/dashboard"
        />
        <NavLink
          icon={<Pocket strokeWidth={1.5} size={18} color="currentColor" />}
          label="Form"
          to="/dashboard"
        />
        <NavLink
          icon={
            <ShoppingCart strokeWidth={1.5} size={18} color="currentColor" />
          }
          label="Components"
          to="/dashboard"
        />
        <NavLink
          icon={<Grid strokeWidth={1.5} size={18} color="currentColor" />}
          label="Dashboard"
          to="/dashboard"
        />
        <NavLink
          icon={<Server strokeWidth={1.5} size={18} color="currentColor" />}
          label="Table"
          to="/dashboard"
        />
        <NavLink
          icon={<Pocket strokeWidth={1.5} size={18} color="currentColor" />}
          label="Form"
          to="/dashboard"
        />
        <NavLink
          icon={
            <ShoppingCart strokeWidth={1.5} size={18} color="currentColor" />
          }
          label="Components"
          to="/dashboard"
        />
        <NavLink
          icon={<Grid strokeWidth={1.5} size={18} color="currentColor" />}
          label="Dashboard"
          to="/dashboard"
        />
        <NavLink
          icon={<Server strokeWidth={1.5} size={18} color="currentColor" />}
          label="Table"
          to="/dashboard"
        />
        <NavLink
          icon={<Pocket strokeWidth={1.5} size={18} color="currentColor" />}
          label="Form"
          to="/dashboard"
        />
        <NavLink
          icon={
            <ShoppingCart strokeWidth={1.5} size={18} color="currentColor" />
          }
          label="Components"
          to="/dashboard"
        />
      </div>
      <div className="container__sidebar__footer">
        <NavLink
          icon={<LogOut size={18} color="currentColor" />}
          label="Logout"
          to="/"
          onChange={() => {
            console.log("logout");
          }}
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
        onClick={
          props.onClick
            ? props.onClick
            : () => {
                navigate(props.to);
              }
        }
        {...props}
      />
      <div
        className={
          props.noCheck
            ? "container__sidebar__main__entry__content container__sidebar__main__entry__content__reverse"
            : "container__sidebar__main__entry__content"
        }
      >
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
