/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import $ from "jquery";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "./media/documents/C&Q.pdf";
import qq from "./media/documents/CV.pdf";

let preventDouble = false;

class DownloadArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    if (
      sessionStorage.getItem("language") === "en" &&
      preventDouble === false
    ) {
      preventDouble = true;
      $(".download-title").text("Download area");
      $(".download-cv").append("Curriculum Vitae");
      $(".download-qq").append("Qualifikations and Certifications");
    } else if (
      sessionStorage.getItem("language") === "de" &&
      preventDouble === false
    ) {
      preventDouble = true;
      $(".download-title").text("Download Bereich");
      $(".download-cv").append("Lebenslauf");
      $(".download-qq").append("Qualifikationen und Zertifikate");
    }
  }

  render() {
    return (
      <>
        <h2 data-aos="slide-right" className="download-title"></h2>
        <section className="download-area flex-container-column">
          <Button
            data-aos="zoom-in-right"
            variant="dark"
            className="download-qq"
            href={qq}
            download
          >
            <FontAwesomeIcon className="fa-fw" icon={faDownload} />
          </Button>
          <Button
            data-aos="zoom-in-left"
            variant="dark"
            className="download-cv"
            href={cv}
            download
          >
            <FontAwesomeIcon className="fa-fw" icon={faDownload} />
          </Button>
        </section>
      </>
    );
  }
}

export default DownloadArea;