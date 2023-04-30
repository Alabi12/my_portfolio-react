import React from "react";
import { Card, Button } from "react-bootstrap";
import data from "./data";
import "./projects.css";
import SocialIcons from "../../components/socialIcons/SocialIcons";

function Projects() {
  return (
    <div className="wrapper">
      {data.map((data) => (
        <Card key={data.id} className="content">
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Text className="text">{data.description}</Card.Text>
            <hr className="rule" />
            <SocialIcons />
            <div className="button">
              <Button className="btn">Source Code</Button>
              <Button className="btn">Live Demo</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
