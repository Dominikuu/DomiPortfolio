import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";
import nebula from "../../assets/img/project_nebula.jpg";
import tby from "../../assets/img/project_tby.jpg";
import picoin from "../../assets/img/project_picoin.jpg";
import urlshorten from "../../assets/img/project_urlshorten.jpg";
import imganalysis from "../../assets/img/project_img_analysis.png";
import ratelimit from "../../assets/img/project_rate_limit.png";
import "./Projects.scss";

const Projects = () => (
  <Container fluid className="project-section">
    <Particle />
    <Container>
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={nebula}
            isBlog={false}
            title="Nebula"
            description="A platform integrated with  switch, access point, and gateway makes it easy to manage network equipment."
            link="https://nebula.zyxel.com/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={tby}
            isBlog={false}
            title="TradeBeyond"
            description="TradeBeyond allows retailers, brands, suppliers and factories to introduce, source and match products with retail mood boards, ranges and themes, in a digital showroom. Home to thousands of validated suppliers, TradeBeyond is designed to extend innovation, source and bring products to market faster"
            link="https://github.com/soumyajit4419/Plant_AI"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={picoin}
            isBlog={false}
            title="PiCoin"
            description="It is a mining web app which can make user get coins per second within a day and show users coin and remaining time. If user and friends are mining at the same time, both of them can get bonus coins separately.

            Techn stack: Angular, NodeJS, PostgreSQL, Docker, WebSocket, NgRx"
            link="https://github.com/Dominikuu/PiCoinFE"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={urlshorten}
            isBlog={false}
            title="Url shortener"
            description="It allows to reduce long links . Frondend is deployed on AWS S3, and Backend servers including API server, Redis, MongoDB are packaged as container and deployed on AWS EC2 instance. Tech stack: ReactJS, NodeJS, docker"
            link="https://github.com/Dominikuu/url-shortener-gui"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={imganalysis}
            isBlog={false}
            title="Image analysis of Protein electrophoresis"
            description="A desktop app developed by Qt/C++ and OpenCV is used on analyzing protein electrophoresis . With image segmentation, molecular weigh can be measured."
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={ratelimit}
            isBlog={false}
            title="Rate limit"
            description="Using JWT to implement member login system and record the amount of request and set limitation of  expired time and request amount."
            link="https://github.com/Dominikuu/rate-limit"
          />
        </Col>
      </Row>
    </Container>
  </Container>
);
export default Projects;
