/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import data from "./data";
import "./projects.css";
import SocialIcons from "../../components/socialIcons/SocialIcons";

function Projects() {
  return (
    <div className="main">
      <div className="wrapper">
        {data.map(
          ({ id, name, image, description, stack, sourceLink, demoLink }) => (
            <Card key={id} className="content">
              <CardImg top className="Image" src={image} alt={name} />
              <CardBody>
                <CardTitle className="heading">{name}</CardTitle>
                <CardText className="text">{description}</CardText>
                <div className="stacks">
                    {stack?.map(({ name }) => (
                      <a href="#" key={name}>{name}</a>
                    ))}
                </div>
                <hr className="rule" />
                <SocialIcons />
                <div className="button">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    Demo Link
                  </a>
                  <a
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Link
                  </a>
                </div>
              </CardBody>
            </Card>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
