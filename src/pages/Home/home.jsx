import React from "react";
import "./home.css";
import HeroBanner from "../../components/HeroBanner/heroBanner";
import About from "../../components/About/about";
import Skills from "../../components/Skills/skills";
import Navbar from "../../components/Navbar/navbar";

const Home = () => {

    return(
        <>
        <div id="outer-container">
        <main id="page-wrap">
        <Navbar/>
        <HeroBanner/>
        <About/>
        <Skills/>
        </main>
        </div>
        </>
    )
}

export default Home;