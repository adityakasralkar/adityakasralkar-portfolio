import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import SocialLink from "./Components/SocialLink";
import Technology from "./Components/Technology";

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Home/>
      <About/>
      <Project/>
      <Technology/>
      <Contact/>

      <SocialLink/>
    </div>
  );
}

export default App;
