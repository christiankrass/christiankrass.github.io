import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

//Title.js settings

let titleTextGerman = [
  "Hallo.",
  "Mein Name ist Christian Krass.",
  "Ich bin ein ambitionierter Webentwickler.",
  "Als Hauptkomponente dieses Portfolios wurde React verwendet.",
  "Stilistisch wurden Material UI, Bootstrap, simpleParallax & Font Awesome angewendet.",
  "Zur einfacheren und direkten Manipulation von HTML-Texten wurde jQuery eingesetzt.",
  "Als Stylesheet wurde hier SASS gewählt.",
  "Wenn ich Ihr Interesse geweckt habe, können Sie mich gerne kontaktieren.",
  "Die E-Mail-Adresse und die Rufnummer finden Sie im Lebenslauf unter Persönliche Informationen.",
  "Vielen Dank, dass Sie sich die Zeit genommen haben, mein Portfolio zu besuchen.",
];
let titleTextEnglish = [
  "Hello.",
  "My name is Christian Krass.",
  "I am an ambitious web developer.",
  "React was used as the main component of this portfolio.",
  "Stylistically Material UI, Bootstrap, simpleParallax & Font Awesome were applied.",
  "For easier and direct manipulation of HTML texts jQuery was utilized.",
  "SASS was selected as the stylesheet here.",
  "If I could catch your interest, feel free to contact me.",
  "You can find the email address and number in the resume under Personal Information.",
  "Thank you for taking the time to visit and I wish you great day.",
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

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
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
  <CircularProgressWithLabel value={75} name={"JavaScript"} />,
  <CircularProgressWithLabel value={40} name={"Java"} />,
  <CircularProgressWithLabel value={20} name={"C#"} />,
];
const frontEndLibrary = [
  <CircularProgressWithLabel value={75} name={"jQuery"} />,
  <CircularProgressWithLabel value={70} name={"React"} />,
  <CircularProgressWithLabel value={70} name={"Bootstrap"} />,
  <CircularProgressWithLabel value={40} name={"Redux"} />,
  <CircularProgressWithLabel value={20} name={"MUI"} />,
];
const otherSkills = [
  <CircularProgressWithLabel value={80} name={"HTML"} />,
  <CircularProgressWithLabel value={70} name={"CSS"} />,
  <CircularProgressWithLabel value={60} name={"SASS"} />,
  <CircularProgressWithLabel value={20} name={"SQL"} />,
];

export class CVTextGerman extends React.Component {
  render() {
    return (
      <>
        <h2 data-aos="fade-down" className="cv-title">
          Lebenslauf
        </h2>
        <section className="cv-container">
          <div data-aos="zoom-in-right" className="cv cv-place1">
            <h3>Persönliche Informationen </h3>
            <hr />
            <div className="placer">
              Name: <p>Christian Krass</p>
            </div>
            <div className="placer">
              Adresse: <p>Ziolkowskistraße 29</p>
              <br />
              <p>98693 Ilmenau</p>
            </div>
            <br />
            <div className="placer">
              Mobile:<p>0173/6231657</p>
            </div>
            <div className="placer">
              Email:<p>christiankrass@web.de</p>
            </div>
            <div className="placer">
              Geburtsdatum: <p>19.03.1993</p>
            </div>
            <div className="placer">
              Staatsangehörigkeit: <p>Deutsch</p>
            </div>
            <br />
            <h3>Erfahrung in der Webentwicklung</h3>
            <hr />
            <h4>Seit September 2022</h4>
            <p>freeCodeCamp</p>
            <p>Datenvisualisierung</p>
            <p>JSON</p>
            <hr />
            <h4>August 2022 - September 2022</h4>
            <p>freeCodeCamp</p>
            <p>Front-End-Entwicklungsbibliotheken</p>
            <p>Bootstrap, jQuery, React, Redux</p>
            <p>Abschluss: Zertifikat</p>
            <hr />
            <h4>Juni 2022 - August 2022</h4>
            <p> freeCodeCamp</p>
            <p>JavaScript Algorithmen und Datenstrukturen</p>
            <p>Abschluss: Zertifikat</p>
            <hr />
            <h4>Mai 2022 - Juni 2022</h4>
            <p> freeCodeCamp</p>
            <p>Responsive Web Design</p>
            <p>Abschluss: Zertifikat</p>
            <hr />
            <h4>April 2017 - Juli 2017</h4>
            <p>Softwareprojekt TU Ilmenau</p>
            <p>Back-End:</p>
            <ul>
              <li> Database administration</li>
              <li> User Log-in</li>
              <li> Upload + Conversion</li>
            </ul>
            <p>Abschluss: Zertifikat</p>
            <hr />
            <h4>Juni 2015 - Juli 2015</h4>
            <p>Schulprojekt für eine Webanwendung</p>
            <p>Abschluss: Zertifikat</p>
            <hr />
            <h4>Juni 2014 - Juli 2014</h4>
            <p>Praktikum Fachhochschule</p>
            <p>Elektrotechnik und Informatik</p>
            <ul>
              <li>Vier Gewinnt mit WebRTC</li>
            </ul>
            <br />
            <h3>Berufserfahrung</h3>
            <hr />
            <h4>Seit August 2019</h4>
            <p>Teilzeitjob JYSK SE</p>
            <ul>
              <li>Beratung und Verkauf</li>
            </ul>
            <br />
          </div>
          <div data-aos="zoom-in-left" className="cv cv-place2">
            <h3>Besondere Leistungen</h3>
            <hr />
            <h4>Oktober 2016 - 2017</h4>
            <p>SAP-Projektseminar PROBAS</p>
            <ul>
              <li> ERP 6.0 + NetWeaver 7.0</li>
            </ul>
            <p>Abschluss: Zertifikat</p>
            <br />
            <h3>Kenntnisse</h3>
            <hr />
            <h4>Sprachen</h4>
            <hr />
            <ul>
              <li>Deutsch: Muttersprache</li>
              <li>Englisch: fließend</li>
              <li>Russisch: grundlegend</li>
            </ul>
            <br />
            <h4>Informations Technologie</h4>
            <hr />
            <div className="ITcontainer">
              <p>Programmier Sprachen:</p>
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
              <p>Andere Skills:</p>
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
            <p>Andere Software:</p>
            <ul>
              <li>Visual Studio</li>
              <li>GitHub</li>
            </ul>
            <h3>Ausbildung</h3>
            <hr />
            <h4>2018 - 2021</h4>
            <p>Technische Universität Ilmenau</p>
            <p>Biotechnische Chemie</p>
            <p>Ohne Abschluss</p>
            <hr />
            <h4>2015 - 2018</h4>
            <p>Technische Universität Ilmenau</p>
            <p>Wirtschaftsinformatik</p>
            <p>Ohne Abschluss</p>
            <hr />
            <h4>2010 - 2015</h4>
            <p>Hermann-Emanuel-Berufskolleg des Kreises Steinfurt</p>
            <p>Mathematik und Wirtschaftswissenschaften</p>
            <p>Abschluss: Abitur</p>
            <br />
            <h3>Hobbys</h3>
            <hr />
            <ul>
              <li>Mountainbiken</li>
              <li>Volleyball</li>
              <li>Kochen</li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export class CVTextEnglish extends React.Component {
  render() {
    return (
      <>
        <h2 data-aos="fade-down" className="cv-title">
          Curriculum Vitae
        </h2>
        <section className="cv-container">
          <div data-aos="zoom-in-right" className="cv cv-place1">
            <h3>Personal Information</h3>
            <hr />
            <div className="placer">
              Name: <p>Christian Krass</p>
            </div>
            <div className="placer">
              Address: <p>Ziolkowskistraße 29</p> <br />
              <p>98693 Ilmenau</p>
            </div>
            <br />
            <div className="placer">
              Mobile: <p>0173/6231657</p>
            </div>
            <div className="placer">
              Email: <p>christiankrass@web.de</p>
            </div>
            <div className="placer">
              Birthdate: <p>19.03.1993</p>
            </div>
            <div className="placer">
              Citizenship: <p>German</p>
            </div>
            <br />
            <h3>Web Development Experience</h3>
            <hr />
            <h4>Since September 2022</h4>
            <p>freeCodeCamp</p>
            <p>Data Visualization</p>
            <p>JSON</p>
            <hr />
            <h4>August 2022 - September 2022</h4>
            <p>freeCodeCamp</p>
            <p>Front End Development Libraries</p>
            <p>Bootstrap, jQuery, React, Redux</p>
            <p>Graduation: Certificate</p>
            <hr />
            <h4>June 2022 - August 2022</h4>
            <p>freeCodeCamp</p>
            <p>JavaScript Algorithms and Data Structures</p>
            <p>Graduation: Certificate</p>
            <hr />
            <h4>May 2022 - June 2022</h4>
            <p>freeCodeCamp</p>
            <p>Responsive Web Design</p>
            <p>Graduation: Certificate</p>
            <hr />
            <h4>April 2017 - July 2017</h4>
            <p>Software project TU Ilmenau</p>
            <p>Back-End:</p>
            <ul>
              <li>Database administration</li>
              <li>User Log-in</li>
              <li>Upload + Conversion</li>
            </ul>
            <p>Graduation: Certificate</p>
            <hr />
            <h4>June 2015 - July 2015</h4>
            <p>School project for an web-application</p>
            <p>Graduation: Certificate</p>
            <hr />
            <h4>June 2014 - July 2014</h4>
            <p>Internship High school</p>
            <p>Electrical engineering and computer science</p>
            <ul>
              <li>Connect four using WebRTC</li>
            </ul>
            <br />
            <h3>Work experience</h3>
            <hr />
            <h4>Since August 2019</h4>
            <p>Part time job JYSK SE</p>
            <ul>
              <li>Consulting and sales</li>
            </ul>
            <br />
          </div>
          <div data-aos="zoom-in-left" className="cv cv-place2">
            <h3>Special accomplishments</h3>
            <hr />
            <h4>October 2016 - 2017</h4>
            <p>SAP project seminar PROBAS</p>
            <ul>
              <li>ERP 6.0 + NetWeaver 7.0</li>
            </ul>
            <p>Graduation: Certificate</p>
            <br />
            <h3>Knowledge</h3>
            <hr />
            <h4>Languages</h4>
            <hr />
            <ul>
              <li>German: native</li>
              <li>English: fluent</li>
              <li>Russian: basic</li>
            </ul>
            <br />
            <h4>Information Technology</h4>
            <hr />
            <div className="ITcontainer">
              <p>Programming skills:</p>
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
              <p>Other Skills:</p>
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
            <p>Other Software:</p>
            <ul>
              <li>Visual Studio</li>
              <li>GitHub</li>
            </ul>
            <h3>Education</h3>
            <hr />
            <h4>2018 - 2021</h4>
            <p>Technische Universität Ilmenau</p>
            <p>Biotechnical chemistry</p>
            <p>Without graduation</p>
            <hr />
            <h4>2015 - 2018</h4>
            <p>Technische Universität Ilmenau</p>
            <p>Business Information Systems</p>
            <p>Without graduation</p>
            <hr />
            <h4>2010 - 2015</h4>
            <p>Hermann-Emanuel-Berufskolleg des Kreises Steinfurt</p>
            <p>Mathematics and computer science</p>
            <p>Graduation: A-Level</p>
            <br />
            <h3>Hobbies</h3>
            <hr />
            <ul>
              <li>Mountain biking</li>
              <li>Volleyball</li>
              <li>Cooking</li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}
