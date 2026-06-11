import React, { useState } from "react";
import CharacterInput from "./components/characterInput";
import CharacterStats from "./components/characterStats";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="app-container">
      <div className="card">
        <h1>Live Character Counter</h1>
        <CharacterInput text={text} setText={setText} />
        <br />
        <CharacterStats text={text} setText={setText} />
      </div>
    </div>
  );
}

export default App;