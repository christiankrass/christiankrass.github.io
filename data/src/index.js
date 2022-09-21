import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./welcome";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

AOS.init();

let language = navigator.language || navigator.userLanguage;

if (sessionStorage.getItem("language") == null) {
  sessionStorage.setItem("language", language.split("-")[0]);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);

reportWebVitals();
