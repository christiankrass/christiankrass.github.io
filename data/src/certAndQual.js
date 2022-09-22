/* eslint-disable jsx-a11y/heading-has-content */
import $ from "jquery";
import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import JADS from "./media/img/JavaScript-Algorithms-and-Data-Structures.png";
import Responsive from "./media/img/Responsive-Design.png";
import FrontEnd from "./media/img/Front-End-Development-Libraries.png";
import SAP from "./media/img/SAP.jpeg";
import SWP2 from "./media/img/Softwarepro1.jpeg";
import SWP1 from "./media/img/Softwarepro2.jpeg";
import Intership from "./media/img/Praktikum.jpeg";

const CaQ = () => {
  useEffect(() => {
    if (sessionStorage.getItem("language") === "de") {
      $(".c-and-q-title").text("Zertifikate");
    } else {
      $(".c-and-q-title").text("Certifications");
    }
  });

  return (
    <>
      <h2 data-aos="zoom-in" className="c-and-q-title"></h2>
      <Carousel data-aos="slide-up" id="carousel" pause="hover">
        <Carousel.Item>
          <Image
            className="1-Car-1-Pic car-img"
            src={FrontEnd}
            alt="Tribute Page"
            fluid="true"
          />
          <Carousel.Caption>
            <Button
              className="btn-car"
              variant="secondary"
              href="https://www.freecodecamp.org/certification/christiankrass/front-end-development-libraries"
              target="_blank"
              rel="noreferrer"
              value="Tribute Page"
            ></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="1-Car-2-Pic car-img"
            src={JADS}
            alt="Technical Page"
            fluid="true"
          />
          <Carousel.Caption>
            <Button
              className="btn-car"
              variant="secondary"
              href="https://www.freecodecamp.org/certification/christiankrass/javascript-algorithms-and-data-structures"
              target="_blank"
              rel="noreferrer"
              alt="Technical Page"
            ></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="1-Car-1-Pic car-img"
            src={Responsive}
            alt="Tribute Page"
            fluid="true"
          />
          <Carousel.Caption>
            <Button
              className="btn-car"
              variant="secondary"
              href="https://www.freecodecamp.org/certification/christiankrass/responsive-web-design"
              target="_blank"
              rel="noreferrer"
              value="Tribute Page"
            ></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="1-Car-1-Pic car-img"
            src={SAP}
            alt="Tribute Page"
            fluid="true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="1-Car-1-Pic car-img"
            src={SWP1}
            alt="Tribute Page"
            fluid="true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="1-Car-1-Pic car-img"
            src={SWP2}
            alt="Tribute Page"
            fluid="true"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="1-Car-1-Pic car-img"
            src={Intership}
            alt="Tribute Page"
            fluid="true"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CaQ;
