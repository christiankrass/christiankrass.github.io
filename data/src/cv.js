/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import $ from "jquery";

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    if (sessionStorage.getItem("language") === "en") {
      $(".cv-title").text("Curriculum Vitae");
      $(".cv-place1").html(`
      <h3>Personal Information</h3>
      <hr>
      <div class="placer">Name: <p>Christian Krass</p>
      </div>
      <div class="placer">Address: <p>Ziolkowskistraße 29</p> <br>
          <p>98693 Ilmenau</p>
      </div>
      <br>
      <div class="placer">Mobile: <p>0173/6231657</p>
      </div>
      <div class="placer">Email: <p>christiankrass@web.de</p>
      </div>
      <div class="placer">Birthdate: <p>19.03.1993</p>
      </div>
      <div class="placer">Citizenship: <p>German</p>
      </div>
      <br>
      <h3>Web Development Experience</h3>
      <hr>
      <h4>Since September 2022</h4>
      <p>freeCodeCamp</p>
      <p>Data Visualization</p>
      <p>JSON</p>
      <hr>
      <h4>August 2022 - September 2022</h4>
      <p>freeCodeCamp</p>
      <p>Front End Development Libraries</p>
      <p>Bootstrap, jQuery, React, Redux</p>
      <p>Graduation: Certificate</p>
      <hr>
      <h4>June 2022 - August 2022</h4>
      <p>freeCodeCamp</p>
      <p>JavaScript Algorithms and Data Structures</p>
      <p>Graduation: Certificate</p>
      <hr>
      <h4>May 2022 - June 2022</h4>
      <p>freeCodeCamp</p>
      <p>Responsive Web Design</p>
      <p>Graduation: Certificate</p>
      <hr>
      <h4>April 2017 - July 2017</h4>
      <p>Software project TU Ilmenau</p>
      <p>Back-End:</p>
      <ul>
          <li>Database administration</li>
          <li>User Log-in</li>
          <li>Upload + Conversion</li>
      </ul>
      <p>Graduation: Certificate</p>
      <hr>
      <h4>June 2015 - July 2015</h4>
      <p>School project for an web-application</p>
      <p>Graduation: Certificate</p>
      <hr>
      <h4>June 2014 - July 2014</h4>
      <p>Internship High school</p>
      <p>Electrical engineering and computer science</p>
      <ul>
          <li>Connect four using WebRTC</li>
      </ul>
      <br>
      <h3>Work experience</h3>
      <hr>
      <h4>Since August 2019</h4>
      <p>Part time job JYSK SE</p>
      <ul>
          <li>Consulting and sales</li>
      </ul>
      <br>
`);
      $(".cv-place2").html(`
                <h3>Special accomplishments</h3>
                <hr>
                <h4>October 2016 - 2017</h4>
                <p>SAP project seminar PROBAS</p>
                <ul>
                    <li>ERP 6.0 + NetWeaver 7.0</li>
                </ul>
                <p>Graduation: Certificate</p>
                <br>
                <h3>Knowledge</h3>
                <hr>
                <h4>Languages</h4>
                <hr>
                <ul>
                    <li>German: native</li>
                    <li>English: fluent</li>
                    <li>Russian: basic</li>
                </ul>
                <br>
                <h4>Information Technology</h4>
                <hr>
                <ul>
                    <li>Premiere Pro</li>
                    <li>Database systems</li>
                    <li>GitHub</li>
                    <br>
                    <p>Programming skills:</p>
                    <ul class="cv-inner-list">
                    <div class="eval-container">
<div class="evaluation"></div><div class="evaluation"></div><div class="evaluation eval-current"></div><div class="evaluation"></div></div>
                    <li>Java</li><div class="eval-container">
<div class="evaluation"></div><div class="evaluation eval-current"></div><div class="evaluation"></div><div class="evaluation"></div></div>
                    <li>JavaScript</li><div class="eval-container">
<div class="evaluation"></div><div class="evaluation"></div><div class="evaluation"></div><div class="evaluation eval-current"></div></div>
                    <li>C#</li>
                    <br>
                    <p>JavaScript Frontend Framework Libraries:</p>
                    <ul class="cv-inner-list">
<div class="eval-container">
<div class="evaluation "></div><div class="evaluation eval-current"></div><div class="evaluation"></div><div class="evaluation"></div></div>
                        <li>React</li>
                        <div class="eval-container">
                        <div class="evaluation"></div><div class="evaluation "></div><div class="evaluation"></div><div class="evaluation eval-current"></div></div>
                                                    <li>Redux</li>
<div class="eval-container">
<div class="evaluation "></div><div class="evaluation eval-current"></div><div class="evaluation"></div><div class="evaluation"></div></div>
                        <li>jQuery</li>
<div class="eval-container">
<div class="evaluation"></div><div class="evaluation eval-current"></div><div class="evaluation"></div><div class="evaluation"></div></div>
                        <li>Bootstrap</li>
                    </ul>
                    <br>
                    <p>Back-End:</p>
                    <ul class="cv-inner-list">
<div class="eval-container">
<div class="evaluation"></div><div class="evaluation"></div><div class="evaluation"></div><div class="evaluation eval-current"></div></div>
                        <li>SQL</li>
                    </ul>
                </ul>
            </ul>
  <br>
                <h3>Education</h3>
                <hr>
                <h4>2018 - 2021</h4>
                <p>Technische Universität Ilmenau</p>
                <p>Biotechnical chemistry</p>
                <p>Without graduation</p>
                <hr>
                <h4>2015 - 2018</h4>
                <p>Technische Universität Ilmenau</p>
                <p>Business Information Systems</p>
                <p>Without graduation</p>
                <hr>
                <h4>2010 - 2015</h4>
                <p>Hermann-Emanuel-Berufskolleg des Kreises Steinfurt</p>
                <p>Mathematics and computer science</p>
                <p>Graduation: A-Level</p>
                <br>
                <h3>Hobbies</h3>
                <hr>
                <ul>
                    <li>Mountain biking</li>
                    <li>Volleyball</li>
                    <li>Cooking</li>
                </ul>
        `);
    } else if (sessionStorage.getItem("language") === "de") {
      $(".cv-title").text("Lebenslauf");
      $(".cv-place1").html(`
      <h3>Persönliche Informationen </h3>
      <hr>
      <div class="placer">Name: <p>Christian Krass</p>
      </div>
      <div class="placer">Adresse: <p>Ziolkowskistraße 29</p><br>
      <p>98693 Ilmenau</p>
      </div>
      <br>
      <div class="placer">Mobile:<p>0173/6231657</p>
      </div>
      <div class="placer">Email:<p>christiankrass@web.de</p>
      </div>
      <div class="placer">Geburtsdatum: <p>19.03.1993</p>
      </div>
      <div class="placer">Staatsangehörigkeit: <p>Deutsch</p>
      </div>
      <br>
      <h3>Erfahrung in der Webentwicklung</h3>
      <hr>
      <h4>Seit September 2022</h4>
      <p>freeCodeCamp</p>
      <p>Datenvisualisierung</p>
      <p>JSON</p>
      <hr>
      <h4>August 2022 - September 2022</h4>
      <p>freeCodeCamp</p>
      <p>Front-End-Entwicklungsbibliotheken</p>
      <p>Bootstrap, jQuery, React, Redux</p>
      <p>Abschluss: Zertifikat</p>
      <hr>
      <h4>Juni 2022 - August 2022</h4>
      <p> freeCodeCamp</p>
      <p>JavaScript Algorithmen und Datenstrukturen</p>
      <p>Abschluss: Zertifikat</p>
      <hr>
      <h4>Mai 2022 - Juni 2022</h4>
      <p> freeCodeCamp</p>
      <p>Responsive Web Design</p>
      <p>Abschluss: Zertifikat</p>
      <hr>
      <h4>April 2017 - Juli 2017</h4>
      <p>Softwareprojekt TU Ilmenau</p>
      <p>Back-End:</p>
      <ul>
          <li> Database administration</li>
          <li> User Log-in</li>
          <li> Upload + Conversion</li>
      </ul>
      <p>Abschluss: Zertifikat</p>
      <hr>
      <h4>Juni 2015 - Juli 2015</h4>
      <p>Schulprojekt für eine Webanwendung</p>
      <p>Abschluss: Zertifikat</p>
      <hr>
      <h4>Juni 2014 - Juli 2014</h4>
      <p>Praktikum Fachhochschule</p>
      <p>Elektrotechnik und Informatik</p>
      <ul>
          <li>Vier Gewinnt mit WebRTC</li>
      </ul>
      <br>
      <h3>Berufserfahrung</h3>
      <hr>
      <h4>Seit August 2019</h4>
      <p>Teilzeitjob JYSK SE</p>
      <ul>
          <li>Beratung und Verkauf</li>
      </ul>
      <br>
`);
      $(".cv-place2").html(`
      <h3>Besondere Leistungen</h3>
      <hr>
      <h4>Oktober 2016 - 2017</h4>
      <p>SAP-Projektseminar PROBAS</p>
      <ul>
          <li> ERP 6.0 + NetWeaver 7.0</li>
      </ul>
      <p>Abschluss: Zertifikat</p>
      <br>
      <h3>Kenntnisse</h3>
      <hr>
      <h4>Sprachen</h4>
      <hr>
      <ul>
          <li>Deutsch: Muttersprache</li>
          <li>Englisch: fließend</li>
          <li>Russisch: grundlegend</li>
      </ul>
      <br>
      <h4>Informationstechnologie</h4>
      <hr>
      <ul>
          <li>Premiere Pro</li>
          <li>Datenbank-Systeme</li>
          <li>GitHub</li>
          <br>
          <p>Programmierkenntnisse:</p>
          <ul class="cv-inner-list">
                        <div class="eval-container">
<div class="evaluation"></div><div class="evaluation"></div><div class="evaluation eval-current"></div><div class="evaluation"></div></div>
                        <li>Java</li><div class="eval-container">
<div class="evaluation"></div><div class="evaluation eval-current"></div><div class="evaluation"></div><div class="evaluation"></div></div>
                        <li>JavaScript</li><div class="eval-container">
<div class="evaluation"></div><div class="evaluation"></div><div class="evaluation"></div><div class="evaluation eval-current"></div></div>
                        <li>C#</li>
                        <br>
                        <p>JavaScript Frontend Framework Libraries:</p>
                        <ul class="cv-inner-list">
 <div class="eval-container">
<div class="evaluation "></div><div class="evaluation eval-current"></div><div class="evaluation"></div><div class="evaluation"></div></div>
                            <li>React</li>
                            <div class="eval-container">
                            <div class="evaluation"></div><div class="evaluation "></div><div class="evaluation"></div><div class="evaluation eval-current"></div></div>
                                                        <li>Redux</li>
 <div class="eval-container">
<div class="evaluation "></div><div class="evaluation eval-current"></div><div class="evaluation"></div><div class="evaluation"></div></div>
                            <li>jQuery</li>
 <div class="eval-container">
<div class="evaluation"></div><div class="evaluation eval-current"></div><div class="evaluation"></div><div class="evaluation"></div></div>
                            <li>Bootstrap</li>
                        </ul>
                        <br>
                        <p>Back-End:</p>
                        <ul class="cv-inner-list">
 <div class="eval-container">
<div class="evaluation"></div><div class="evaluation"></div><div class="evaluation"></div><div class="evaluation eval-current"></div></div>
                            <li>SQL</li>
                        </ul>
                    </ul>
                </ul>
      <br>
      <h3>Ausbildung</h3>
      <hr>
      <h4>2018 - 2021</h4>
      <p>Technische Universität Ilmenau</p>
      <p>Biotechnische Chemie</p>
      <p>Ohne Abschluss</p>
      <hr>
      <h4>2015 - 2018</h4>
      <p>Technische Universität Ilmenau</p>
      <p>Wirtschaftsinformatik</p>
      <p>Ohne Abschluss</p>
      <hr>
      <h4>2010 - 2015</h4>
      <p>Hermann-Emanuel-Berufskolleg des Kreises Steinfurt</p>
      <p>Mathematik und Wirtschaftswissenschaften</p>
      <p>Abschluss: Abitur</p>
      <br>
      <h3>Hobbys</h3>
      <hr>
      <ul>
          <li>Mountainbiken</li>
          <li>Volleyball</li>
          <li>Kochen</li>
      </ul>
        `);
    }
  }

  render() {
    return (
      <>
        <h2 data-aos="fade-down" className="cv-title"></h2>
        <section className="cv-container">
          <div data-aos="zoom-in-right" className="cv cv-place1"></div>
          <div data-aos="zoom-in-left" className="cv cv-place2"></div>
        </section>
      </>
    );
  }
}

export default CV;
