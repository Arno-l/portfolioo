import React, { useState, useEffect } from "react";
import "./navbar.css";
import myLogo from "../../assets/images/logo-aLDev.png";
import { styles } from "../../assets/burgerMenuStyle";
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";
import burger from "../../assets/images/burger.svg";
import { Typewriter } from "react-simple-typewriter";
import  AOS  from 'aos';
import "aos/dist/aos.css";

const Navbar = () => {

    const [ menuOpen, setMenuOpen ] = useState(false);


    /*useEffect(() => {
        AOS.init({
            duration: 1200
        });
    },[])*/
  
  
    
    function closeMenu() {
        console.log("hehe");
        setMenuOpen(false);
    }

    function handleStateChange(state) {
        setMenuOpen(state)
    }

    return(
        <>
            <nav  className="navbar">
            <div  className="navbar-logo-ctn">
            <img  src={myLogo} className="navbar-logo" alt="logo aLDev"/>  
            <span  id="navbar-underscore">_</span>  
            </div>
            
            <Menu right 
            pageWrapId={"page-wrap"} 
            outerContainerId={"outer-container"} 
            width={'45%'}
            isOpen={menuOpen}
            customBurgerIcon={<img src={burger} alt="burger-icon"/>}
            onStateChange={(e) => handleStateChange(e.target)}
            styles={styles}
            >
            <Link to=""  style={{textDecoration:"none"}}><div id="typewriter"><span id="menu-iam" style={{marginLeft:"10px"}}>Hi, I'&nbsp;Am&nbsp;</span><span id="menu-name">
            <Typewriter
                  loopcursor
                  loop
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={[
                    "ARNAUD",
                    "28",
                    "CODE BUFF",
                    "DEV"
                  ]}
                />
                </span></div></Link>
            <Link to="" onClick={closeMenu} style={{textDecoration:"none"}} className="menu-item"><div className="menu-layer"><span style={{marginLeft:"20px"}}>A propos</span></div></Link>
            <Link to="" onClick={closeMenu} style={{textDecoration:"none"}} className="menu-item"><div className="menu-layer"><span style={{marginLeft:"20px"}}>Compétences</span></div></Link>
            <Link to="" onClick={closeMenu} style={{textDecoration:"none"}} className="menu-item"><div className="menu-layer"><span style={{marginLeft:"20px"}}>Projets</span></div></Link>
            <Link to="" onClick={closeMenu} style={{textDecoration:"none"}} className="menu-item"><div className="menu-layer"><span style={{marginLeft:"20px"}}>Contact</span></div></Link>
           </Menu>

            <div className="navbar-links">
            <Link  id="about"  style={{textDecoration:"none"}} className="navbar-link"><div className="layer"><span>A propos</span></div></Link>
            <Link  id="skills"  style={{textDecoration:"none"}} className="navbar-link"><div className="layer"><span>Compétences</span></div></Link>
            <Link  id="projects"  style={{textDecoration:"none"}} className="navbar-link"><div className="layer"><span>Projets</span></div></Link>
            <Link  id="contact"  style={{textDecoration:"none"}} className="navbar-link"><div className="layer"><span>Contact</span></div></Link>
            </div>
            </nav>
        </>
    )
}

export default Navbar;