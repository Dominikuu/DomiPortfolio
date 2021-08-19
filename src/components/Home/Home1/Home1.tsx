import React from "react";
import GreetingLottie from "../../DisaplayLottie";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home1.scss";
import code from "../../../assets/lottie/greeting.json";

const Home1 = () => (
  <Container fluid className="home-section" id="home">
    <Container className="home-content">
      <Row>
        <Col md={7} className="home-header">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi! Nice to meet you!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'M
            <strong className="main-name"> Dominique</strong>
          </h1>
          <div className="home-connet">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          <div style={{ padding: 50, textAlign: "left" }}>{/* <Type /> */}</div>
        </Col>

        <Col md={5} style={{ paddingBottom: 20 }}>
          <GreetingLottie animationData={code} />
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Home1;
