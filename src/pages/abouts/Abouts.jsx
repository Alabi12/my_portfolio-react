import React from "react";
import "./abouts.css";
import SocialIcons from "../../components/socialIcons/SocialIcons";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { DiRuby, DiReact, DiPostgresql, DiJavascript } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
function About() {
  return (
    <>
      <div className="about-section">
        <div className="about-right">
          <h1 className="about-text">About Me</h1>
          <p>
            Hello I’m a software developer! I can help you build a product ,
            feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, don’t
            hesitate to contact me.
          </p>
          <span className="connect">LET'S CONNECT</span>
          <div className="socialIcons-about">
            <SocialIcons />
          </div>
          <span className="span-about">Get my Resume</span>
        </div>
        <div className="about-right">
          <div className="language">
            <h2>Languages</h2>
            <FiChevronDown />
          </div>
          <div>
            <hr />
          </div>
          <div className="stack1">
            <div className="stack2">
              <div className="stack-icons">
                <DiRuby />
              </div>
              <p>Ruby</p>
            </div>
            <div className="stack2">
              <div className="stack-iconRails">
                <SiRubyonrails />
              </div>
              <p>Ruby on Rails</p>
            </div>
            <div className="stack2">
              <div className="stack-iconOthers">
                <DiReact />
              </div>
              <p>React</p>
            </div>
            <div className="stack2">
              <div className="stack-iconOthers">
                <DiPostgresql />
              </div>
              <p>Postgresql</p>
            </div>
            <div className="stack2">
              <div className="stack-iconOthers">
                <DiJavascript />
              </div>
              <p>JavaScript</p>
            </div>
          </div>
          <div className="language">
            <h3>Framework</h3>
            <FiChevronRight />
          </div>
          <div>
            <hr />
          </div>
          <div className="language">
            <h3>Skills</h3>
            <FiChevronRight />
          </div>
          <div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
