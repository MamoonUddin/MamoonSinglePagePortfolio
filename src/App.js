import React from "react";
import NavBar from "./component/NavBar/Navbar";
import Header from "./container/Header/Header";
import SkillsSection from "./container/SkillSection/SkillSection";
import ProjectSection from "./container/ProjectSection/ProjectSection";
import Footer from "./container/Footer/Footer";

export default function App(){
  return (
    <div>
      <NavBar />
      <Header />
      <SkillsSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
