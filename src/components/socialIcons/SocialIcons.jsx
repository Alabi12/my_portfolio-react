import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import data from "../../pages/projects/data";
import "./social-icons.css";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href={data.facebook}>
        <FaFacebook className="icon" />
      </a>
      <a href={data.twitter}>
        <FaTwitter className="icon" />
      </a>
      <a href={data.linkedin}>
        <FaLinkedin className="icon" />
      </a>
    </div>
  );
}
export default SocialIcons;
