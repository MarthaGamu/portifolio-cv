import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";

import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Navbar />
        <About />
        <Resume />
        <Footer />
      </div>
    </div>
  );
}

export default App;
