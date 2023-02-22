import './styling/App.css';
import {Link, Route, Routes, Router } from "react-router-dom";
import "bootswatch/dist/minty/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './components/Navigation';
import Offcanvas from 'react-bootstrap/Offcanvas';
import About from './components/About';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { useRef } from "react";

function App() {

  return (

    <div>
      <Navigation />
      <About />
    </div>
    
  )
}

export default App;
