import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";

import Resume from "./components/Resume";
import Footer from "./components/Footer";

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
