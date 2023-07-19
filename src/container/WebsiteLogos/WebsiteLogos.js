import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMedium,
} from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import "./WebsiteLogos.css";

export default function WebsiteLogos({
  github,
  linkedIn,
  gmail,
  medium,
  tableau,
  youtube,
  website,
}) {
  return (
    <ul className="social-media-list">
      {/* Render website logos based on provided links */}
      {github && (
        <li>
          <a href={github} target="_blank" rel="noopener noreferrer" className="icons">
            <FaGithub />
          </a>
        </li>
      )}

      {linkedIn && (
        <li>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="icons">
            <FaLinkedin />
          </a>
        </li>
      )}

      {gmail && (
        <li>
          <a href={`mailto:${gmail}`} className="icons">
            <FaEnvelope />
          </a>
        </li>
      )}

      {medium && (
        <li>
          <a href={medium} target="_blank" rel="noopener noreferrer" className="icons">
            <FaMedium />
          </a>
        </li>
      )}

      {tableau && (
        <li>
          <a href={tableau} target="_blank" rel="noopener noreferrer" className="icons">
            <SiTableau />
          </a>
        </li>
      )}

      {youtube && (
        <li>
          <a href={youtube} target="_blank" rel="noopener noreferrer" className="icons">
            <IoLogoYoutube />
          </a>
        </li>
      )}

      {website && (
        <li>
          <a href={website} target="_blank" rel="noopener noreferrer" className="icons">
            <AiOutlineGlobal />
          </a>
        </li>
      )}
    </ul>
  );
}
