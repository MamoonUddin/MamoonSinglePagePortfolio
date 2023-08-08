import React from "react";
import NavBar from "./component/NavBar/Navbar";
import Header from "./container/Header/Header";
import SkillsSection from "./container/SkillSection/SkillSection";
import ProjectSection from "./container/ProjectSection/ProjectSection";
import Footer from "./container/Footer/Footer";
import Certifications from "./container/Certification/Certifications"
import ScrollUpButton from './component/ScrollUpButton/ScrollUpButton';

export default function App(){
  return (
    <div>
      <NavBar />
      <Header />
      <Certifications />
      <SkillsSection />
      <ProjectSection />
      <Footer />
      <ScrollUpButton />
    </div>
  );
}
