import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="container__main">
        <Header />
        <Main />
      </div>
    </div>
  );
}
