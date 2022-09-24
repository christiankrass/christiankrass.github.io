import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { connect, Provider } from "react-redux";
import Welcome from "./welcome";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import Title from "./title";
import Projects from "./projects";
import CV from "./cv";
import CaQ from "./certAndQual";
import DownloadArea from "./download";
import Footer from "./footer";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

AOS.init();
let language = "";
if (sessionStorage.getItem("language") == null) {
  language =
    navigator.language.split("-")[0] || navigator.userLanguage.split("-")[0];
  sessionStorage.setItem("language", language);
} else {
  language = sessionStorage.getItem("language");
}

//Configurate Action
const LANG = "CHANGELANGUAGE";

//Configurate Action Creater
const setLanguage = createAction(LANG);

//Configurate Reducer
const langReducer = createReducer({ langState: language }, (builder) => {
  builder
    .addCase(LANG, (state, action) => {
      state.langState = action.payload;
    })
    .addDefaultCase((state) => {
      state.langState = language;
    });
});

//Configurate Reducer Combiner
const reducer = { getLanguage: langReducer };

//Configurate Store for Redux
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

//function for using States inside React
const mapStateToProps = (state) => {
  return {
    language: state.getLanguage.langState,
  };
};

//function Dispatch inside React
const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (payload) => {
      dispatch(setLanguage(payload));
    },
  };
};

//connect Redux to React
const WelcomeWithPropsAndDispatch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
const TitleWithProps = connect(mapStateToProps, null)(Title);
const ProjectsWithProps = connect(mapStateToProps, null)(Projects);
const CVWithProps = connect(mapStateToProps, null)(CV);
const CaQWithProps = connect(mapStateToProps, null)(CaQ);
const DownloadAreaWithProps = connect(mapStateToProps, null)(DownloadArea);
const FooterWithProps = connect(mapStateToProps, null)(Footer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <main id="main">
        <WelcomeWithPropsAndDispatch />
        <TitleWithProps />
        <hr></hr>
        <ProjectsWithProps />
        <hr></hr>
        <CVWithProps />
        <hr></hr>
        <CaQWithProps />
        <hr></hr>
        <DownloadAreaWithProps />
        <hr></hr>
        <FooterWithProps />
      </main>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
