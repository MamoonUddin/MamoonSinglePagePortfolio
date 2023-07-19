import React from "react";
import "./SkilllSection.css";
import {SiMysql, SiPython , SiRstudio, SiJavascript , SiCplusplus , SiHtml5 , SiCss3 , SiTensorflow , SiPytorch , SiPandas  , SiReact, SiKeras} from "react-icons/si";



export default function SkillsSection() {

  return (
    <section>
      <h1>What i have worked with</h1>
      <div className="dev-icons">
        <ul>
          <li className="software-skill-inline">
            <SiPython />
            <p>Python</p>
          </li>
          <li className="software-skill-inline">
            <SiReact />
            <p>React</p>
          </li>
          <li className="software-skill-inline">
            <SiJavascript />
            <p>JavaScript</p>
          </li>
          <li className="software-skill-inline">
            <SiHtml5 />
            <p>HTML5</p>
          </li>
          <li className="software-skill-inline">
            <SiCss3 />
            <p>CSS3</p>
          </li>
          <li className="software-skill-inline">
            <SiCplusplus />
            <p>C++</p>
          </li>
          <li className="software-skill-inline">
            <SiRstudio />
            <p>R</p>
          </li>
          <li className="software-skill-inline">
            <SiTensorflow />
            <p>TensorFlow</p>
          </li>
          <li className="software-skill-inline">
            <SiKeras />
            <p>keras</p>
          </li>
          <li className="software-skill-inline">
            <SiPandas />
            <p>Pandas</p>
          </li>
          <li className="software-skill-inline">
            <SiMysql />
            <p>MySQL</p>
          </li>

        </ul>
      </div>

    </section>

  );
}


