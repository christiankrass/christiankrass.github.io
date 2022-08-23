function setLanguage(value) {

    //set session languge and reload website
    sessionStorage.setItem("language", value);
    location.reload();
}

$(document).ready(function () {
    //content in english
    if (sessionStorage.getItem("language") === "en") {
        $("html").attr("lang", "en");
        $(".welcome-title").text("Welcome");
        $(".background-img").attr('src', "media/img/background1.jpg");
        $(".language > a > .active-eng").css("border", "2px solid white");

        //Headlines
        $(".introduction-title").text("Introduction");
        $(".project-title").text("Projects");
        $(".cv-title").text("Curriculum Vitae");
        $(".c-and-q-title").text("Certifications and Qualifications");
        $(".download-title").text("Download Area");
        $(".information-title").text("For more information please click here:");
        $(".download-cq").html("<i class='fa-solid fa-download'></i> Certifications and Qualifications");
        $(".download-cv").html("<i class='fa-solid fa-download'></i> Curriculum Vitae (Needs to be done)");

        //Introduction
        $(".introtext").html(`
            <p>Nonummy nostra. Conubia ante molestie integer massa pretium mi, diam suscipit. Porta quisque ac senectus porttitor sollicitudin parturient hendrerit <strong>risus</strong> rutrum donec nam <strong>scelerisque</strong> porttitor dis suscipit mattis. Odio.</p>
            <p>Quisque per commodo viverra ad velit. Quisque sociis risus dolor. Tempus <em>lectus</em> pellentesque id. Mattis nulla. Tellus pellentesque dictum, augue accumsan erat diam. Eu commodo urna Sapien dis quam erat feugiat natoque fames sit metus nam. Netus. Sollicitudin Euismod pulvinar.</p>
            <p>Scelerisque blandit non mus aptent auctor, elit eros ut per non eros imperdiet aliquet dictum sapien phasellus quis urna, placerat tortor tincidunt. Hendrerit odio nulla orci aliquam proin dis nam eu.</p>
        `);

        //Curriculum Vitae
        $(".cv-place1").html(`
                <h3>Personal Information</h3>
                <hr>
                <div class="placer">Address: <p>Ziolkowskistraße 29</p> <br>
                    <p>98693 Ilmenau</p>
                </div>
                <br>
                <div class="placer">Mobile: <p>0173/6231657</p>
                </div>
                <div class="placer">E-Mail: <p>christiankrass@web.de</p>
                </div>
                <div class="placer">Birth: <p>19.03.1993</p>
                </div>
                <div class="placer">Citizenship: <p>german</p>
                </div>
                <br>
                <h3>Web Developmnet Experience</h3>
                <hr>
                <h4>since August 2022</h4>
                <p>freeCodeCamp</p>
                <p>Front End Development Libraries</p>
                <hr>
                <h4>July 2022 - August 2022</h4>
                <p>freeCodeCamp</p>
                <p>JavaScript Algorithms and Data Structures</p>
                <p>Graduation: Certificat</p>
                <hr>
                <h4>May 2022 - June 2022</h4>
                <p>freeCodeCamp</p>
                <p>Responsive Web Design</p>
                <p>Graduation: Certificat</p>
                <hr>
                <h4>October 2016-2017</h4>
                <p>SAP project seminar PROBAS</p>
                <ul>
                    <li>ERP 6.0 + NetWeaver 7.0</li>
                </ul>
                <p>Graduation: Certificat</p>
                <hr>
                <h4>June 2014 - July 2014</h4>
                <p>Intership Highschool Münster</p>
                <p>Electrical engineering and computer science</p>
                <ul>
                    <li>Connect four with WebRTC</li>
                </ul>
                <br>
                <h3>Special accomplishments</h3>
                <hr>
                <h4>April 2017 - July 2017</h4>
                <p>Software project TU Ilmenau</p>
                <p>Back-End:</p>
                <ul>
                    <li>Database administration</li>
                    <li>User Log-in</li>
                    <li>Upload + Conversion</li>
                </ul>
                <p>Graduation: Certificat</p>
                <hr>
                <h4>June 2015 - July 2015</h4>
                <p>School project for an application</p>
                <p>Graduation: Certificate</p>
                <br>
        `);
        $(".cv-place2").html(`
                <h3>Knowledge</h3>
                <hr>
                <h4>Languages</h4>
                <hr>
                <ul>
                    <li>German: native</li>
                    <li>English: fluent</li>
                    <li>Russisch: basic</li>
                </ul>
                <br>
                <h4>Information Technology</h4>
                <hr>
                <ul>
                    <li>Microsoft Office</li>
                    <li>Video editing</li>
                    <li>Database systems</li>
                    <li>Git</li>
                    <br>
                    <ul>
                        <p>Programming skills:</p>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>C#</li>
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
                <p>Mathematics and comupter sience</p>
                <p>Graduation: A-Level</p>
                <hr>
                <h3>Work expreience</h3>
                <hr>
                <h4>Since August 2019</h4>
                <p>Part time job JYSK SE</p>
                <ul>
                    <li>Consulting and sales</li>
                </ul>
                <br>
                <h3>Hobbys</h3>
                <hr>
                <ul>
                    <li>Volleyball</li>
                    <li>Cooking</li>
                    <li>Coding</li>
                </ul>
        `);
        //content in german
    } else {
        $("html").attr("lang", "de");
        $(".welcome-title").text("Willkommen");
        $(".welcome-title").css("font-size", "15vw");
        $(".background-img").attr('src', "media/img/background2.jpg");
        $(".language > a > .active-deu").css("border", "2px solid white");

        //Headlines
        $(".introduction-title").text("Einleitung");
        $(".project-title").text("Projekte");
        $(".cv-title").text("Lebenslauf");
        $(".c-and-q-title").text("Zertifikate und Qualifikationen");
        $(".download-title").text("Download Area");
        $(".information-title").text("Für mehr Informationen, bitte hier klicken:");
        $(".download-cq").html("<i class='fa-solid fa-download'></i> Zertifikate und Qualifikationen");
        $(".download-cv").html("<i class='fa-solid fa-download'></i> Curriculum Vitae (Needs to be done)");

        //Introduction
        $(".introtext").html(`
            <p>Nonummy nostra. Conubia ante molestie integer massa pretium mi, diam suscipit. Porta quisque ac senectus porttitor sollicitudin parturient hendrerit <strong>risus</strong> rutrum donec nam <strong>scelerisque</strong> porttitor dis suscipit mattis. Odio.</p>
            <p>Quisque per commodo viverra ad velit. Quisque sociis risus dolor. Tempus <em>lectus</em> pellentesque id. Mattis nulla. Tellus pellentesque dictum, augue accumsan erat diam. Eu commodo urna Sapien dis quam erat feugiat natoque fames sit metus nam. Netus. Sollicitudin Euismod pulvinar.</p>
            <p>Scelerisque blandit non mus aptent auctor, elit eros ut per non eros imperdiet aliquet dictum sapien phasellus quis urna, placerat tortor tincidunt. Hendrerit odio nulla orci aliquam proin dis nam eu.</p>
        `);

        //Curriculum Vitae
        $(".cv-place1").html(`
                <h3>Persönliche Informationen</h3>
                <hr>
                <div class="placer">Adresse: <p>Ziolkowskistraße 29</p> <br>
                    <p>98693 Ilmenau</p>
                </div>
                <br>
                <div class="placer">Telefon: <p>0173/6231657</p>
                </div>
                <div class="placer">E-Mail: <p>christiankrass@web.de</p>
                </div>
                <div class="placer">Geburtsdatum: <p>19.03.1993</p>
                </div>
                <div class="placer">Staatangehörigkeit: <p>Deutsch</p>
                </div>
                <br>
                <h3>Web Entwickung Erfahrung</h3>
                <hr>
                <h4>seit August 2022</h4>
                <p>freeCodeCamp</p>
                <p>Front End Development Libraries</p>
                <hr>
                <h4>Juli 2022 - August 2022</h4>
                <p>freeCodeCamp</p>
                <p>JavaScript Algorithms and Data Structures</p>
                <p>Abschluss: Zertifikat</p>
                <hr>
                <h4>May 2022 - June 2022</h4>
                <p>freeCodeCamp</p>
                <p>Responsive Web Design</p>
                <p>Abschluss: Zertifikat</p>
                <hr>
                <h4>October 2016-2017</h4>
                <p>SAP project seminar PROBAS</p>
                <ul>
                    <li>ERP 6.0 + NetWeaver 7.0</li>
                </ul>
                <p>Abschluss: Zertifikat</p>
                <hr>
                <h4>June 2014 - July 2014</h4>
                <p>Intership Highschool Münster</p>
                <p>Electrical engineering and computer science</p>
                <ul>
                    <li>Connect four with WebRTC</li>
                </ul>
                <br>
                <h3>Special accomplishments</h3>
                <hr>
                <h4>April 2017 - July 2017</h4>
                <p>Software project TU Ilmenau</p>
                <p>Back-End:</p>
                <ul>
                    <li>Database administration</li>
                    <li>User Log-in</li>
                    <li>Upload + Conversion</li>
                </ul>
                <p>Abschluss: Urkunde</p>
                <hr>
                <h4>June 2015 - July 2015</h4>
                <p>School project for an application</p>
                <p>Abschluss: Urkunde</p>
                <br>
        `);
        $(".cv-place2").html(`
                <h3>Knowledge</h3>
                <hr>
                <h4>Languages</h4>
                <hr>
                <ul>
                    <li>German: native</li>
                    <li>English: fluent</li>
                    <li>Russisch: basic</li>
                </ul>
                <br>
                <h4>Information Technology</h4>
                <hr>
                <ul>
                    <li>Microsoft Office</li>
                    <li>Video editing</li>
                    <li>Database systems</li>
                    <li>Git</li>
                    <br>
                    <ul>
                        <p>Programming skills:</p>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>C#</li>
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
                <p>Mathematics and comupter sience</p>
                <p>Graduation: A-Level</p>
                <hr>
                <h3>Work expreience</h3>
                <hr>
                <h4>Since August 2019</h4>
                <p>Part time job JYSK SE</p>
                <ul>
                    <li>Consulting and sales</li>
                </ul>
                <br>
                <h3>Hobbys</h3>
                <hr>
                <ul>
                    <li>Volleyball</li>
                    <li>Cooking</li>
                    <li>Coding</li>
                </ul>
        `);
    }
});
