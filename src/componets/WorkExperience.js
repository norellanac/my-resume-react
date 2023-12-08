import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import i18n from "../utils/i18n";
import esData from './../assets/translations/es.json'

export default function WorkExperience() {
  const { workExperience_info } = esData;
  console.error(workExperience_info);
  return (
    <Row>
      <Col>
      {workExperience_info.map((workExperience,index) => (
        <div key={index} className='m-1'>
          <Card style={{ textAlign:"left",border:0 }}>
            <Card.Body>
              <Card.Title style={{color:"#222"}}>{workExperience.title}</Card.Title>
              <Card.Text style={{color:"#797979",fontFamily:"Prata"}}>
                {workExperience.experience},  {workExperience.start_date} - {workExperience.end_date}
                <br/>
                {workExperience.summary}
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          ))}
        </Col>
    </Row>
  );
}


