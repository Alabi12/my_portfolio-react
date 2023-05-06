import React from "react";
import { Card } from "react-bootstrap";
import data from "./data";
import "./projects.css";
import SocialIcons from "../../components/socialIcons/SocialIcons";

function Projects() {
  return (
    <div className="wrapper">
      {data.map((data) => (
        <Card key={data.id} className="content">
          <Card.Img variant="top" className="Image" src={data.image} />
          <Card.Body>
            <Card.Text className="heading">{data.name}</Card.Text>
            <Card.Text className="text">{data.description}</Card.Text>
            <div className="slacks">
              <div className="sl">{data.ruby}</div>
              <div className="sl">{data.react}</div>
              <div className="sl">{data.rails}</div>
            </div>
            <hr className="rule" />
            <SocialIcons />
            <div className="button">
              <a href={data.demoLink} target="_blank" rel="noopener noreferrer">
                Demo Link
              </a>
              <a
                href={data.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Link
              </a>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
