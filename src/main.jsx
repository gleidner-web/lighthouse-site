import React from "react";
import ReactDOM from "react-dom/client";
import LighthousePointAdvisorsSite from "./App.jsx";
import Assessment from "./Assessment.jsx";

const path = window.location.pathname.replace(/\/+$/, "");
const Page = path === "/assessment" ? Assessment : LighthousePointAdvisorsSite;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
