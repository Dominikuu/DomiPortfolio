import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About1 from "./About1/About1";
import About2 from "./About2//About2";
import "./About.scss";

const About = () => (
  // <Container fluid className="about-section">
  //   {/* <Particle /> */}
  //   <Container></Container>
  // </Container>
  <section>
    <About1 />
    <About2 />
  </section>
);

export default About;
