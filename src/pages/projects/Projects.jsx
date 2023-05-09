/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import data from "./data";
import "./projects.css";
import SocialIcons from "../../Components/socialIcons/SocialIcons";

const Projects = () => {
  return (
    <div id="Projects" className="wrapper">
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
                    <button
                      type="button"
                      key={name}
                      style={{
                        textDecoration: "none",
                        color: "blue",
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                    >
                      {name}
                    </button>
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
};

export default Projects;
