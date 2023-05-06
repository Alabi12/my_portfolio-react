import React, { useState } from "react";
import "./abouts.css";
import SocialIcons from "../../components/socialIcons/SocialIcons";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { DiRuby, DiReact, DiPostgresql, DiJavascript } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";

function About() {
  const [languageVisible, setLanguageVisible] = useState(false);

  const toggleLanguageVisibility = () => {
    setLanguageVisible(!languageVisible);
  };

  const [showSkills, setShowSkills] = useState(false);
  const [showFramework, setShowFramework] = useState(false);

  const handleClickSkills = () => {
    setShowSkills(!showSkills);
  };

  const handleClickFramework = () => {
    setShowFramework(!showFramework);
  };

  const resumeUrl = process.env.PUBLIC_URL + "/resume.pdf";

  return (
    <>
      <div className="about-section">
        <div className="about-left">
          <h1 className="about-text">About Me</h1>
          <p className="about-text0">
            Hello I’m a software developer! I can help you build a product ,
            feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, don’t
            hesitate to contact me.
          </p>
          <span className="connect">LET'S CONNECT</span>
          <div className="socialIcons-about">
            <SocialIcons />
          </div>
          <span className="span-about">
            <a href={resumeUrl} download>
              Get my Resume
            </a>
          </span>
        </div>
        <div className="about-right">
          <div className="language" onClick={toggleLanguageVisibility}>
            <h2>Languages</h2>
            {languageVisible ? <FiChevronDown /> : <FiChevronRight />}
          </div>
          {languageVisible && (
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
          )}

          <hr />

          <div className="language">
            <h3>Framework</h3>
            <div className="skills-show">
              {showFramework ? (
                <FiChevronDown onClick={handleClickFramework} />
              ) : (
                <FiChevronRight onClick={handleClickFramework} />
              )}
              <span className="main-framework">
                {showFramework && (
                  <div className="list-items-skills">
                    <span className="list-li">Ruby on Rails</span>
                    <span className="list-li">Ruby</span>
                    <span className="list-li">PostgreSQL</span>
                  </div>
                )}
              </span>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="language">
            <h3>Skills</h3>
            <div className="skills-show">
              {showSkills ? (
                <FiChevronDown onClick={handleClickSkills} />
              ) : (
                <FiChevronRight onClick={handleClickSkills} />
              )}
              <span className="main-skills">
                {showSkills && (
                  <div className="list-items-skills">
                    <span className="list-li">Strong communication</span>
                    <span className="list-li">Pair-programming</span>
                    <span className="list-li">Strong leadership</span>
                    <span className="list-li">Data Analysis</span>
                    <span className="list-li">Finance</span>
                    <span className="list-li">Auditing</span>
                  </div>
                )}
              </span>
            </div>
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
