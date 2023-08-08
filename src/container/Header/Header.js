import React from "react";
import "./Header.css";
import Typewriter from 'typewriter-effect';
import WebsiteLogos from "../WebsiteLogos/WebsiteLogos";
import Resume from "../../assets/MamoonGeneralResume.pdf"

export default function Header() {
  return (
    <section id="home" className="container fill-height">
      <div className="header-row">
        <div>
          <h1 className="display-4 primary--text">Muhammad Mamoon Uddin</h1>
          <h2 className="primary--text">
            <Typewriter
              options={{
                strings: ["Data Engineer", "Machine Learning Engineer", "Data Analyst", "FrontEnd Developer", "Software Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="p-header">
            Greetings! I'm Mamoon, a coding enthusiast since high school. I kick-started my journey by creating a Unity and C# game for a high school coding competition, and ever since, I've been hooked on coding. I've ventured into various domains, including web development, Python, and even participated in coding competitions. Now, as a Computer Science graduate, my passion lies in data science and software development, and I'm always eager to expand my knowledge and skills in these exciting fields.
          </p>
          <div className="button-section">
            <a href="#contact"><button className="header-button">Contact</button></a>
            <a href="#project"><button className="header-button">Project</button></a>
            <a href={Resume} download="MamoonUddinResume"><button className="header-button">Resume</button></a>
          </div>
          
          <WebsiteLogos
            github="https://github.com/MamoonUddin"
            linkedIn="https://www.linkedin.com/in/mamoon-uddin/"
            gmail="mamoonuddin17@gmail.com"
            medium="https://medium.com/@mamoonuddin17"
          />
        </div>
      </div>
    </section>
  );
}

