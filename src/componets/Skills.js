import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react'
import i18n from "../utils/i18n";

export default function Skills() {
  return (
    <div>
      <p style={{width:"20rem", fontSize:"15px", fontFamily:"Poppins", textAlign:"left"}}>
      {i18n.t("skills[0].title")},
      {i18n.t("skills[1].title")}, 
      {i18n.t("skills[2].title")}, 
      {i18n.t("skills[3].title")},
      <br></br> 
      {i18n.t("skills[4].title")}, 
      {i18n.t("skills[5].title")}, 
      {i18n.t("skills[6].title")}, 
      {i18n.t("skills[7].title")}, 
      <br></br>
      {i18n.t("skills[8].title")}, 
      {i18n.t("skills[9].title")}, 
      {i18n.t("skills[10].title")}, 
      {i18n.t("skills[11].title")}, 
      {i18n.t("skills[12].title")},
      <br></br> 
      {/* dejar espacio */}
      {i18n.t("skills[13].title")},
      <br></br> 
      {/* dejar espacio */}
      {i18n.t("skills[14].title")}  
      <br></br>
      {/* {[...Array(i18n.t("skills[0].level"))].map((e, i) => <span className="busterCards" key={i}>*</span>)} */}
      </p>
    </div>
  
  );
}
