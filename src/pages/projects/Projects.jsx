import React from "react";
import { Card, Button } from "react-bootstrap";
import data from "./data";
import "./projects.css";
import SocialIcons from "../../components/socialIcons/SocialIcons";

const handleClick = () => {
  window.open("https://github.com/Alabi12/Budget-App.git");
};

const demoHandleClick = () => {
  window.open("https://budget-app-m3yc.onrender.com");
};

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
              <Button className="btn" onClick={handleClick}>
                Source Code
              </Button>
              <Button className="btn" onClick={demoHandleClick}>
                Live Demo
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
