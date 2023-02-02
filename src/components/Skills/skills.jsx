import React, { useState, useEffect } from "react";
import backendLogo from "../../assets/images/backend-logo.png";
import frontendLogo from "../../assets/images/frontend-logo.png";
import "./skills.css";
import rubyLogo from "../../assets/images/skills-ruby.png";
import railsLogo from "../../assets/images/skills-rails.png";
import PgLogo from "../../assets/images/skills-pg.png";
import sqlLogo from "../../assets/images/skills-sql.png";
import htmlLogo from "../../assets/images/skills-html5.png";
import cssLogo from "../../assets/images/skills-css3.png";
import sassLogo from "../../assets/images/skills-sass.png";
import javascriptLogo from "../../assets/images/skills-js.png";
import reactLogo from "../../assets/images/skills-react.png";
import  AOS  from 'aos';
import "aos/dist/aos.css";

const Skills = () => {
  const [lineWidth, setLineWidth] = useState("0vw");
  const [isOnTargetDiv, setIsOnTargetDiv] = useState(true);
  const [line1Width, setLine1Width] = useState(0);
  const [line2Width, setLine2Width] = useState(0);
  const [line3Width, setLine3Width] = useState(0);
  const [line4Width, setLine4Width] = useState(0);
  const [line5Width, setLine5Width] = useState(0);
  const [line6Width, setLine6Width] = useState(0);
  const [line7Width, setLine7Width] = useState(0);
  const [line8Width, setLine8Width] = useState(0);
  const [line9Width, setLine9Width] = useState(0);

  useEffect(() => {
    function handleScroll() {
      AOS.init({
        duration: 1200
    });
      if(window.scrollY > 1000 && window.scrollY < 1700) {
        setLine1Width("95%");
        setLine2Width("95%");
        setLine3Width("90%");
        setLine4Width("85%");
      } else if(isOnTargetDiv) {
        setLine1Width("0%");
        setLine2Width("0%");
        setLine3Width("0%");
        setLine4Width("0%");
        setIsOnTargetDiv(false);
      }
      if(window.scrollY > 1500 && window.scrollY < 1700) {
        setLine5Width("100%");
        setLine6Width("100%");
        setLine7Width("80%");
        setLine8Width("95%");
        setLine9Width("98%");
      } else if(isOnTargetDiv) {
        setLine5Width("0%");
        setLine6Width("0%");
        setLine7Width("0%");
        setLine8Width("0%");
        setLine9Width("0%");
        setIsOnTargetDiv(false);
      }
      if (window.scrollY > 750 && window.scrollY < 1600) {
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
        <div data-aos="zoom-in" className="backend-container">
            <div className="type-title-container">
                <img id="database-logo" src={backendLogo} alt="database-logo" />
                <h1 className="type-title">Backend</h1>
            </div>
            <div className="skills-matrix">
                <div className="matrix">
                    <div className="skills-name-container">
                    <img className="skills-logo" src={rubyLogo} alt="ruby-logo"/>
                    <h3 className="skills-name">Ruby</h3>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: line1Width}}></div>
                    </div>
                </div>
                <div className="matrix">
                <div className="skills-name-container">
                    <img className="skills-logo" src={railsLogo} alt="rails-logo"/>
                    <h3 className="skills-name">RoR</h3>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: line2Width}}></div>
                    </div>
                </div>
                <div className="matrix">
                <div className="skills-name-container">
                    <img className="skills-logo" src={PgLogo} alt="pg-logo"/>
                    <h3 className="skills-name">PostgreSQL</h3>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: line3Width}}></div>
                    </div>
                </div>
                <div className="matrix">
                <div className="skills-name-container">
                    <img className="skills-logo" src={sqlLogo} alt="sql-logo"/>
                    <h3 className="skills-name">SQL</h3>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: line4Width}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" className="frontend-container">
            <div className="type-title-container">
                <img id="frontend-logo" src={frontendLogo} alt="code-source-logo" />
                <h1 className="type-title">Frontend</h1>
            </div>
            <div className="skills-matrix">
                <div className="matrix">
                    <div className="skills-name-container">
                    <img className="skills-logo" src={htmlLogo} alt="html5-logo"/>
                    <h3 className="skills-name">HTML5</h3>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: line5Width}}></div>
                    </div>
                </div>
                <div className="matrix">
                <div className="skills-name-container">
                    <img className="skills-logo" src={cssLogo} alt="css3-logo"/>
                    <h3 className="skills-name">CSS3</h3>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: line6Width}}></div>
                    </div>
                </div>
                <div className="matrix">
                <div className="skills-name-container">
                    <img className="skills-logo" src={sassLogo} alt="sass-logo"/>
                    <h3 className="skills-name">Sass</h3>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: line7Width}}></div>
                    </div>
                </div>
                <div className="matrix">
                <div className="skills-name-container">
                    <img className="skills-logo" src={javascriptLogo} alt="javascript-logo"/>
                    <h3 className="skills-name">Javascript</h3>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: line8Width}}></div>
                    </div>
                </div>
                <div className="matrix">
                <div className="skills-name-container">
                    <img className="skills-logo" src={reactLogo} alt="react-logo"/>
                    <h3 className="skills-name">React.js</h3>
                    </div>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: line9Width}}></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
