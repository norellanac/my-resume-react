import React, { useState } from "react";
import i18n from "./utils/i18n";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import WorkExperience from "./workExperience";





function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (language) => {
    i18n.locale = language;
    setCurrentLanguage(language);
  };
  return (
    <div className="App">
          <div>
            <h1>{i18n.t("hello")}</h1>
            <div>
              <Button variant="primary" onClick={() => changeLanguage("en")}>English!</Button>
                <button onClick={() => changeLanguage("es")}>Spanish</button>
            </div>
          </div>
        
      <Container>
        <Row>
        
          <Col > 
            <div style={{color:"#1C8EB5",fontSize:"23px", textAlign:"left", border:'0px'}}>{i18n.t("experience-title")}</div>
            < WorkExperience />
          
          </Col>

        </Row>
      
      </Container>
    </div>
  );
}

export default App;
