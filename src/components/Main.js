import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Components from "./Components";

export default function Main() {
  return (
    <div className="container__main__content">
      <Outlet />
    </div>
  );
}
