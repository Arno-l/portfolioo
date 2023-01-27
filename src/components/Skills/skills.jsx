import React, { useState, useEffect } from "react";
import backendLogo from "../../assets/images/backend-logo.png";
import "./skills.css";

const Skills = () => {
  const [lineWidth, setLineWidth] = useState("0vw");
  const [isOnTargetDiv, setIsOnTargetDiv] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 750 && window.scrollY < 1200) {
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
      <div className="skills-title">
        <h1>COMPÉTENCES</h1>
        <div className="line" style={{ width: lineWidth }} />
      </div>
      <div className="skills-container">
        <p className="skills-intro">
          Elles sont en constantes améliorations car pour moi la joie de ce
          métier fait que l’on en apprend tous les jours, d’autant plus en étant
          impliqué, curieux et passionné.
        </p>
      </div>
      <div className="skills-types">
        <div className="backend-container">
            <div className="type-title-container">
                <img id="database-logo" src={backendLogo} alt="database-logo" />
                <h1 className="type-title">Backend</h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
