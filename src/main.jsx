import React from "react";
import ReactDOM from "react-dom/client";
import LighthousePointAdvisorsSite from "./App.jsx";
import Assessment from "./Assessment.jsx";
import ReadinessIntake from "./ReadinessIntake.jsx";

const path = window.location.pathname.replace(/\/+$/, "");

let Page = LighthousePointAdvisorsSite;
if (path === "/assessment") Page = Assessment;
if (path === "/intake") Page = ReadinessIntake;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
