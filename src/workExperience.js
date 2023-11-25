import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import i18n from "./utils/i18n";

export default function WorkExperience(){
  return (
    <Row>
      <Col>
        <div>
          <Card style={{ width: '30rem',textAlign:"right",border:0 }}>
            <Card.Body>
              <Card.Title style={{color:"#222"}}>{i18n.t("workExperience[0].title")}</Card.Title>
              <Card.Text style={{color:"#797979",fontFamily:"Prata"}}>
                -{i18n.t("workExperience[0].experience")}, -{i18n.t("workExperience[1].summary")}, {i18n.t("workExperience[0].start_date")} - {i18n.t("workExperience[0].end_date")}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '30rem',textAlign:"right",border:0 }}>
            <Card.Body>
              <Card.Title style={{color:"#222"}}>{i18n.t("workExperience[1].title")}</Card.Title>
              <Card.Text style={{color:"#797979" ,fontFamily:"Prata"}}>
                -{i18n.t("workExperience[1].experience")}, -{i18n.t("workExperience[1].summary")}, {i18n.t("workExperience[1].start_date")} - {i18n.t("workExperience[1].end_date")}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '30rem',textAlign:"right",border:0 }}>
            <Card.Body>
              <Card.Title style={{color:"#222"}}>{i18n.t("workExperience[2].title")}</Card.Title>
              <Card.Text style={{color:"#797979" ,fontFamily:"Prata"}}>
                -{i18n.t("workExperience[2].experience")}, -{i18n.t("workExperience[1].summary")}, {i18n.t("workExperience[1].start_date")} - {i18n.t("workExperience[1].end_date")}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '30rem',textAlign:"right",border:0 }}>
            <Card.Body>
              <Card.Title style={{color:"#222"}}>{i18n.t("workExperience[3].title")}</Card.Title>
              <Card.Text style={{color:"#797979" ,fontFamily:"Prata"}}>
                -{i18n.t("workExperience[3].experience")}, -{i18n.t("workExperience[1].summary")}, {i18n.t("workExperience[1].start_date")} - {i18n.t("workExperience[1].end_date")}
              </Card.Text>
            </Card.Body>
          </Card>
         
        </div>
      </Col>
    </Row>
  );
}


