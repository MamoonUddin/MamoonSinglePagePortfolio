import React from 'react';
import "./NavBar.css";
import Resume from "../../assets/MamoonGeneralResume.pdf"

export default function Navbar() {
  return (
    <div className="nav-row">
      <div className="nav">
        <div className="nav__items"> 
          <p className="nav__item"><a href="#home" className='nav__link'>Home</a></p>
          <p className="nav__item"><a href="#certificates" className='nav__link'>Certificates</a></p>
          <p className="nav__item"><a href="#project" className='nav__link'>Projects</a></p>
          <p className="nav__item"><a href="#contact" className='nav__link'>Contact</a></p>
          <p className="nav__item"><a href={Resume} download="MamoonUddinResume" className='nav__link'>Resume</a></p>
        </div>
      </div>
    </div>
  );
};
