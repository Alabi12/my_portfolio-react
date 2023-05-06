import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./social-icons.css";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/Alabi12"
      >
        <AiFillGithub className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/robert-alabi/"
      >
        <AiFillLinkedin className="icon" />
      </a>
      <a
        href="https://twitter.com/wolo_robert"
      >
        <FaTwitter className="icon" />
      </a>
    </div>
  );
}

export default SocialIcons;
