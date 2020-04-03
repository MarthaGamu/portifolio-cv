import React from "react";
import { Container, Row, Col } from "react-grid-system";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import NamedBanner from "./components/NamedBanner";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Navbar />
        <NamedBanner />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
