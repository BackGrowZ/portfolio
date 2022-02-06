import React from "react";
import { PopupWidget } from "react-calendly";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import { URLCalendly } from "./constante";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Projets/Project";

function App() {
  return (
    <div className="App">
      <Experience />
      <Project />
      <Contact />
      <PopupWidget color="#00a2ff" text="Prendre RDV" textColor="#ffffff" url={URLCalendly} />
    </div>
  );
}

export default App;
