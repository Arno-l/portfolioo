import React from "react";
import "./home.css";
import HeroBanner from "../../components/HeroBanner/heroBanner";
import About from "../../components/About/about";
import Skills from "../../components/Skills/skills";
import Navbar from "../../components/Navbar/navbar";
import Projects from "../../components/Projects/projects";

const Home = () => {

    return(
        <>
        <div id="outer-container">
        <main id="page-wrap">
        <Navbar/>
        <HeroBanner/>
        <About/>
        <Skills/>
        <Projects/>
        </main>
        </div>
        </>
    )
}

export default Home;