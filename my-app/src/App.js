import './styling/App.css';
import { useRef } from "react"
import "bootswatch/dist/minty/bootstrap.min.css"
import Home from './sections/Home';
import About from './sections/About'
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import style from "./styling/Header.module.css"
import "../src/styling/App.css"


function App() {

  const home = useRef(null);
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

  const getHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu= document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    })

  };

  const openPDF = () => {
    window.open("images/resume/resume.pdf","_blank");
  }


  return (

    <div className="App">
       <header className='header'>
          <h1 className='title' onClick={() => scrollToSection(home)}><button>Tiffany Codes</button></h1>
            <nav className="navbar">
              <ul className="nav-menu">

                <li className="nav-link" onClick={() => scrollToSection(home)}>Home</li>
                <li className="nav-link" onClick={() => scrollToSection(about)}>About</li>
                <li className="nav-link" onClick={() => scrollToSection(projects)}>Projects</li>
                <li className="nav-link" onClick={() => openPDF()}>Resume</li>
                <li className="nav-link" onClick={() => scrollToSection(contact)}>Contact</li>
              
              </ul>

            </nav>
        
            <div className="hamburger" ref={getHamburger}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
               
        </header>

      <div ref={home} className="home">
        <Home />
        <div class="arrow"><span class="bounce" onClick={() => scrollToSection(about)}></span></div>
      </div>

      <div ref={about} className="about">
        <About />
      </div>

      <div ref={projects} className="projects">
        <Projects />
      </div>
      
      <div ref={contact} className="contact">
        <Contact />
      </div>

    </div>
    
  )
}

export default App;
