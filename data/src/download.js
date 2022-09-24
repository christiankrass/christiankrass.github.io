import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import qc from "./media/documents/C&Q.pdf";
import cv from "./media/documents/CV.pdf";

class DownloadArea extends React.Component {
  headLineCreator(headlineText) {
    return (
      <h2 data-aos="slide-right" className="download-title">
        {headlineText}
      </h2>
    );
  }

  downloadButtonCreator(href, description) {
    return (
      <Button
        data-aos="fade"
        variant="dark"
        className={"download-" + href}
        href={href}
        download
      >
        <FontAwesomeIcon className="fa-fw" icon={faDownload} />
        {description}
      </Button>
    );
  }
  render() {
    let downloadTitle = "";
    let downloadCV = "";
    let downloadQC = "";
    if (this.props.language === "de") {
      downloadTitle = this.headLineCreator("Download Bereich");
      downloadCV = this.downloadButtonCreator(cv, "Lebenslauf");
      downloadQC = this.downloadButtonCreator(
        qc,
        "Qualifikationen und Zertifikate"
      );
    } else {
      downloadTitle = this.headLineCreator("Download area");
      downloadCV = this.downloadButtonCreator(cv, "Curriculum Vitae");
      downloadQC = this.downloadButtonCreator(
        qc,
        "Qualifikations and Certifications"
      );
    }
    return (
      <>
        {downloadTitle}
        <section className="download-area flex-container-column">
          {downloadQC}
          {downloadCV}
        </section>
      </>
    );
  }
}

export default DownloadArea;
