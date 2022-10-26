import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

//Title.js settings

let titleTextGerman = [
  "Hallo.",
  "Mein Name ist Christian Krass.",
  "Ich bin ein ambitionierter Webentwickler.",
  "Für dieses Projekt wurde React als Hauptkomponente verwendet.",
  "Das Globales State Management wurde mit Hilfe von Redux Toolkit und React-Redux realisiert.",
  "Für die stilistische Gestaltung wurden Material UI, Bootstrap, simpleParallax, Font Awesome und die AOS Library verwendet.",
  "CSS wurde mit Hilfe des SASS-Präprozessors erweitert.",
  "Wenn ich Sie neugierig gemacht habe, können Sie mich gerne kontaktieren.",
  "Meine E-Mail-Adresse und Telefonnummer finden Sie im Lebenslauf unter Persönliche Informationen.",
  "Ich danke Ihnen, dass Sie sich die Zeit genommen haben, mein Portfolio zu besuchen und freue mich, bald von Ihnen zu hören.",
];
let titleTextEnglish = [
  "Hello.",
  "My name is Christian Krass.",
  "I am an ambitious web developer.",
  "For this project, React was used as the main component.",
  "Global state management was implemented using Redux Toolkit and React-Redux.",
  "Material UI, Bootstrap, simpleParallax, Font Awesome and the AOS Library were used in the stylistic design.",
  "CSS was extended with the help of the SASS preprocessor.",
  "If I have made you curious, please feel free to contact me.",
  "My email address and phone number can be found in the CV under Personal Information.",
  "Thank you for taking the time to visit my portfolio and I look forward to hearing from you soon.",
];

export class TitleText {
  getGermanText() {
    return titleTextGerman;
  }

  getEnglishText() {
    return titleTextEnglish;
  }
}

//cv.js Settings

export type CPprops = typeof CircularProgressWithLabel.prototype;

function CircularProgressWithLabel(props: CPprops) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        margin: "0 5px 0 5px",
      }}
    >
      <CircularProgress
        color="inherit"
        variant="determinate"
        value={props.value}
      />
      <Box
        sx={{
          left: 0,
          bottom: -35,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="rgb(249, 233, 210)"
        >
          {props.name}
        </Typography>
      </Box>
    </Box>
  );
}

const programSkill = [
  <CircularProgressWithLabel value={70} name={"JavaScript"} />,
  <CircularProgressWithLabel value={60} name={"TypeScript"} />,
  <CircularProgressWithLabel value={40} name={"Java"} />,
  <CircularProgressWithLabel value={20} name={"C#"} />,
];
const frontEndLibrary = [
  <CircularProgressWithLabel value={75} name={"jQuery"} />,
  <CircularProgressWithLabel value={70} name={"Bootstrap"} />,
  <CircularProgressWithLabel value={65} name={"React"} />,
  <CircularProgressWithLabel value={45} name={"Redux"} />,
  <CircularProgressWithLabel value={35} name={"Angular"} />,
  <CircularProgressWithLabel value={15} name={"MUI"} />,
];
const otherSkills = [
  <CircularProgressWithLabel value={80} name={"HTML"} />,
  <CircularProgressWithLabel value={70} name={"CSS"} />,
  <CircularProgressWithLabel value={60} name={"SASS"} />,
  <CircularProgressWithLabel value={20} name={"SQL"} />,
];

export class CVText extends React.Component<{ language?: string }, {}> {
  render() {
    const language = this.props.language;

    const Certificate = (
      <p>
        {language === "de"
          ? "Abschluss: Zertifikat"
          : "Graduation: Certificate"}
      </p>
    );
    return (
      <>
        <h2 data-aos="fade-down" className="cv-title">
          {language === "de" ? "Lebenslauf" : "Curriculum Vitae"}
        </h2>
        <section className="cv-container">
          <div data-aos="zoom-in-right" className="cv cv-place1">
            <h3>
              {language === "de"
                ? "Persönliche Informationen"
                : "Personal Information"}
            </h3>
            <hr />
            <div className="placer">
              Name: <p>Christian Krass</p>
            </div>
            <div className="placer">
              {language === "de" ? "Adresse: " : "Address:"}
              <p>Ziolkowskistraße 29</p>
              <br />
              <p>98693 Ilmenau</p>
            </div>
            <br />
            <div className="placer">
              Mobile:<p>0173/6231657</p>
            </div>
            <div className="placer">
              Email:
              <p>
                <a
                  href="mailto:christiankrass@web.de"
                  style={{ color: "orange", textDecoration: "none" }}
                >
                  christiankrass@web.de
                </a>
              </p>
            </div>
            <div className="placer">
              {language === "de" ? "Geburtsdatum" : "Birthdate"}:
              <p>19.03.1993</p>
            </div>
            <div className="placer">
              {language === "de" ? "Staatsangehörigkeit" : "Citizenship"}:
              <p>Deutsch</p>
            </div>
            <br />
            <h3>
              {language === "de"
                ? "Erfahrung in der Webentwicklung"
                : "Web Development Experience"}
            </h3>
            <hr />
            <h4>
              {language === "de" ? "Seit Oktober 2022" : "Since October 2022"}
            </h4>
            <p>freeCodeCamp</p>
            <p>Front-End-Framework</p>
            <p>Angular, TypeScript</p>
            <hr />
            <h4>
              {language === "de"
                ? "Seit September 2022"
                : "Since September 2022"}
            </h4>
            <p>freeCodeCamp</p>
            <p>
              {language === "de" ? "Datenvisualisierung" : "Data Visualization"}
            </p>
            <p>D3, JSON, AJAX</p>
            <hr />
            <h4>August 2022 - September 2022</h4>
            <p>freeCodeCamp</p>
            <p>
              {language === "de"
                ? "Front-End-Entwicklungsbibliotheken"
                : "Front End Development Libraries"}
            </p>
            <p>Bootstrap, jQuery, React, Redux</p>
            {Certificate}
            <hr />
            <h4>
              {language === "de"
                ? "Juni 2022 - August 2022"
                : "June 2022 - August 2022"}
            </h4>
            <p> freeCodeCamp</p>
            <p>
              {language === "de"
                ? "JavaScript Algorithmen und Datenstrukturen"
                : "JavaScript Algorithms and Data Structures"}
            </p>
            {Certificate}
            <hr />
            <h4>
              {language === "de"
                ? "Mai 2022 - Juni 2022"
                : "May 2022 - June 2022"}
            </h4>
            <p>freeCodeCamp</p>
            <p>Responsive Web Design</p>
            {Certificate}
            <hr />
            <h4>
              {language === "de"
                ? "April 2017 - Juli 2017"
                : "April 2017 - July 2017"}
            </h4>
            <p>
              {language === "de"
                ? "Softwareprojekt TU Ilmenau"
                : "Software project TU Ilmenau"}
            </p>
            <p>Back-End:</p>
            <ul>
              <li>
                {language === "de"
                  ? "Datenbankverwaltung"
                  : "Database administration"}
              </li>
              <li>{language === "de" ? "Nutzer Log-in" : "User Log-in"} </li>
              <li>
                Upload + {language === "de" ? "Konvertierung" : "Conversion"}
              </li>
            </ul>
            {Certificate}
            <hr />
            <h4>
              {language === "de"
                ? "Juni 2015 - Juli 2015"
                : "June 2015 - July 2015"}
            </h4>
            <p>
              {language === "de"
                ? "Schulprojekt für eine Webanwendung"
                : "School project for a web application"}
            </p>
            {Certificate}
            <hr />
            <h4>
              {language === "de"
                ? "Juni 2014 - Juli 2014"
                : "June 2014 - July 2014"}
            </h4>
            <p>
              {language === "de"
                ? "Praktikum Fachhochschule"
                : "Internship University of Applied Sciences"}
            </p>
            <p>
              {language === "de"
                ? "Elektrotechnik und Informatik"
                : "Electrical Engineering and Computer Science"}
            </p>
            <ul>
              <li>
                {language === "de"
                  ? "Vier Gewinnt mit WebRTC"
                  : "Four Wins with WebRTC"}
              </li>
            </ul>
            <br />
            <h3>{language === "de" ? "Berufserfahrung" : "Work experience"}</h3>
            <hr />
            <h4>
              {language === "de" ? "Seit August 2019" : "Since August 2019"}
            </h4>
            <p>
              {language === "de"
                ? "Teilzeitjob JYSK SE"
                : "Part-time job JYSK SE"}
            </p>
            <ul>
              <li>
                {language === "de"
                  ? "Beratung und Verkauf"
                  : "Consultation and sale"}
              </li>
            </ul>
            <br />
          </div>
          <div data-aos="zoom-in-left" className="cv cv-place2">
            <h3>
              {language === "de"
                ? "Besondere Leistungen"
                : "Special achievements"}
            </h3>
            <hr />
            <h4>
              {language === "de"
                ? "Oktober 2016 - 2017"
                : "October 2016 - 2017"}
            </h4>
            <p>
              {language === "de"
                ? "SAP-Projektseminar PROBAS"
                : "SAP Project Seminar PROBAS"}
            </p>
            <ul>
              <li> ERP 6.0 + NetWeaver 7.0</li>
            </ul>
            {Certificate}
            <br />
            <h3>{language === "de" ? "Kenntnisse" : "Knowledge"}</h3>
            <hr />
            <h4>{language === "de" ? "Sprachen" : "Languages"}</h4>
            <hr />
            <ul>
              <li>
                {language === "de"
                  ? "Deutsch: Muttersprache"
                  : "German: native"}
              </li>
              <li>
                {language === "de" ? "Englisch: fließend" : "English: fluent"}
              </li>
              <li>
                {language === "de" ? "Russisch: grundlegend" : "Russian: basic"}
              </li>
            </ul>
            <br />
            <h4>
              {language === "de"
                ? "Informationstechnologie"
                : "Information Technology"}
            </h4>
            <hr />
            <div className="ITcontainer">
              <p>
                {language === "de"
                  ? "Programmiersprachen:"
                  : "Programming languages:"}
              </p>
              <div className="skillContainer">
                {programSkill.map((data, index) => {
                  return (
                    <div
                      key={index}
                      style={{ display: "inline", marginLeft: "15px" }}
                    >
                      {data}
                    </div>
                  );
                })}
              </div>
              <br />
              <br />
              <p>JavaScript Frontend Framework Libraries:</p>
              <div className="skillContainer">
                {frontEndLibrary.map((data, index) => {
                  return (
                    <div
                      key={index}
                      style={{ display: "inline", marginLeft: "15px" }}
                    >
                      {data}
                    </div>
                  );
                })}
              </div>
              <br />
              <br />
              <p>{language === "de" ? "Andere Skills:" : "Other skills:"}</p>
              <div className="skillContainer">
                {otherSkills.map((data, index) => {
                  return (
                    <div
                      key={index}
                      style={{ display: "inline", marginLeft: "15px" }}
                    >
                      {data}
                    </div>
                  );
                })}
              </div>
              <br />
              <br />
            </div>
            <p>{language === "de" ? "Andere Software:" : "Other software:"}</p>
            <ul>
              <li>Visual Studio</li>
              <li>GitHub</li>
            </ul>
            <h3>{language === "de" ? "Ausbildung" : "Education"}</h3>
            <hr />
            <h4>2018 - 2021</h4>
            <p>Technische Universität Ilmenau</p>
            <p>
              {language === "de"
                ? "Biotechnische Chemie"
                : "Biotechnical chemistry"}
            </p>
            <p>{language === "de" ? "Ohne Abschluss" : "Without degree"}</p>
            <hr />
            <h4>2015 - 2018</h4>
            <p>Technische Universität Ilmenau</p>
            <p>
              {language === "de"
                ? "Wirtschaftsinformatik"
                : "Business Information Systems"}
            </p>
            <p>{language === "de" ? "Ohne Abschluss" : "Without degree"}</p>
            <hr />
            <h4>2010 - 2015</h4>
            <p>Hermann-Emanuel-Berufskolleg des Kreises Steinfurt</p>
            <p>
              {language === "de"
                ? "Mathematik und Wirtschaftswissenschaften"
                : "Mathematics and Economics"}
            </p>
            <p>
              {language === "de" ? "Abschluss: Abitur" : "Graduation: A-levels"}
            </p>
            <br />
            <h3>{language === "de" ? "Hobbys" : "Hobbies"}</h3>
            <hr />
            <ul>
              <li>Mountainbiken</li>
              <li>Volleyball</li>
              <li>{language === "de" ? "Kochen" : "Cooking"}</li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}
