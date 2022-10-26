import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareXing,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component<{ language?: string }, {}> {
  textCreator(language?: string) {
    if (language === "de") {
      return "Hier finden Sie den Quellcode für dieses Portfolio";
    } else {
      return "Here you can find the source code for this portfolio";
    }
  }

  render() {
    return (
      <>
        <footer className="flex-container-column">
          <p className="information-title"></p>
          <div id="social-media">
            <a
              href="https://github.com/christiankrass"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="fa-fw"
                icon={faSquareGithub}
                beat
                size="2x"
                pull="right"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-krass-765422251/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="fa-fw"
                icon={faLinkedin}
                beat
                size="2x"
                pull="right"
              />
            </a>
            <a
              href="https://www.xing.com/profile/Christian_Krass/cv"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="fa-fw"
                icon={faSquareXing}
                beat
                size="2x"
                pull="right"
              />
            </a>
          </div>
          <a
            href="https://github.com/christiankrass/christiankrass.github.io"
            title="src Code"
            target="_blank"
            rel="noreferrer"
          >
            {this.textCreator(this.props.language)}
          </a>
          <a
            href="https://www.flaticon.com/free-icons/uk-flag"
            title="uk flag icons"
            target="_blank"
            rel="noreferrer"
          >
            Flag icons created by Freepik - Flaticon Flag icons created by
            Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/de/kostenlose-icons/portfolio"
            title="portfolio Icons"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio Icons designed by Kiranshastry - Flaticon
          </a>
        </footer>
      </>
    );
  }
}
