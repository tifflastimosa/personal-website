import './styling/App.css';
import {Link, Route, Routes, Router } from "react-router-dom";
import { useState, useEffect, useLayoutEffect, useRef } from "react"
import "bootswatch/dist/minty/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import About from './sections/About'
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import style from "./styling/Header.module.css"

function App() {

  const about = useRef(null);
  const projects = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (

    <div className="App">
       <header className={style.header}>
            <div className={style.container}>
                <div className={style.navContainer}>
                    <h1>Tiffany Codes</h1>

                    <nav>
                        <ul>
                          <li>
                            <button onClick={() => scrollToSection(about)}>About</button>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <button onClick={() => scrollToSection(projects)}>Projects</button>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <button onClick={() => scrollToSection(resume)}>Resume</button>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <button onClick={() => scrollToSection(contact)}>Contact</button>
                          </li>
                        </ul>
                    </nav>
                    
                </div>
            </div>

        </header>
      {/* <Header /> */}

      <div ref={about} className="about">
        <About />
      </div>

      <div ref={projects} className="projects">
        <Projects />
      </div>
      
      <div ref={resume} className="Resume">
        <Resume />
      </div>

      <div ref={contact} className="Contact">
        <Contact />
      </div>

    </div>
    
  )
}

export default App;
