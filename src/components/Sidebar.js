import React, { useState } from "react";
import ButtonIcon from "./ButtonIcon";
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
      </div>
      <div className="container__sidebar__main"></div>
      <div className="container__sidebar__footer"></div>
    </div>
  );
}
