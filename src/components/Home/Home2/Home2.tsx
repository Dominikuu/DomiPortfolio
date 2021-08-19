import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import GreetingLottie from "../../DisaplayLottie";
import code from "../../../assets/lottie/developer.json";

import "./Home2.scss";

const Home2 = () => (
  <Container fluid className="home-about-section" id="about">
    <Particle />
    <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />I am fluent in classics like
            <i>
              <b className="purple"> Javascript and Python. </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="purple">Web Technologies and Products </b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with <b className="purple">Node.js</b> and
            <i>
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="purple"> React.js/Redux and Angular/Rxjs</b>
            </i>
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <GreetingLottie animationData={code} />
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Home2;
