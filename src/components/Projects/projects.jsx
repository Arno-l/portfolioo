import React, { useState, useEffect } from "react";
import "./projects.css";
import portfolioScreen from "../../assets/images/portfolio-screen.png";
import clvScreen from "../../assets/images/clv-screen.png";
import scoreitScreen from "../../assets/images/scoreit-screen.png";

const Projects = () => {
  const [lineWidth, setLineWidth] = useState("0vw");
  const [isOnTargetDiv, setIsOnTargetDiv] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 2200 && window.scrollY < 3200) {
        setLineWidth("20vw");
        setIsOnTargetDiv(true);
      } else if (isOnTargetDiv) {
        setLineWidth("0vw");
        setIsOnTargetDiv(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOnTargetDiv]);

  return (
    <>
      <div className="general-title">
        <h1>PROJETS</h1>
        <div className="line" style={{ width: lineWidth }} />
      </div>
      <div className="projects-container">
        <div className="project-cards">
          <div className="project-card">
            <img
              className="screenshot"
              src={portfolioScreen}
              alt="portfolio screenshot"
            />
            <div className="project-title-container">
              <h1 className="project-title">Mon site web</h1>
            </div>
          </div>
          <div className="project-card">
            <img
              className="screenshot"
              src={clvScreen}
              alt="portfolio screenshot"
            />
            <div className="project-title-container">
              <h1 className="project-title">CLV association</h1>
            </div>
          </div>
          <div className="project-card">
            <img
              className="screenshot"
              src={scoreitScreen}
              alt="portfolio screenshot"
            />
            <div className="project-title-container">
              <h1 className="project-title">Score it</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
