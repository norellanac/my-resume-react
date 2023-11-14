import React, { useState } from "react";
import i18n from "./utils/i18n";
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (language) => {
    i18n.locale = language;
    setCurrentLanguage(language);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>{i18n.t("hello")}</h1>
          <div>
          <Button variant="primary" onClick={() => changeLanguage("en")}>English!</Button>
            <button onClick={() => changeLanguage("es")}>Spanish</button>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
