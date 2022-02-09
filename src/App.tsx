import React, { useState } from "react";
import { PopupWidget } from "react-calendly";
import "./App.css";
import { URLCalendly } from "./constante";

import Menu from "./Components/Navigation/Menu";
import Ecran from "./Container/Ecran";

export enum Page {
  PRESENTATION,
  EXPERIENCE,
  LABS,
  CONTACT,
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEcran, setShowEcran] = useState(0);

  return (
    <div className="App">
      <Menu open={menuOpen} setShowEcran={setShowEcran} showEcran={showEcran} setOpen={() => setMenuOpen((e) => !e)} />
      {!menuOpen && <Ecran idEcran={showEcran} />}
      <PopupWidget color="#00a2ff" text="Prendre RDV" textColor="#ffffff" url={URLCalendly} />
    </div>
  );
}

export default App;
