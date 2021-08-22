import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = (props: any) => (
  <Card className="project-card-view">
    <Card.Img variant="top" src={props.imgPath} alt="card-img" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text style={{ textAlign: "justify" }}>
        {props.description}
      </Card.Text>
    </Card.Body>
    {props.link && (
      <Card.Footer>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Footer>
    )}
  </Card>
);

export default ProjectCard;
