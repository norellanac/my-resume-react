import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react'
import i18n from "../utils/i18n";
import esData from './../assets/translations/es.json'

export default function Skills() {
  const { skills_info } = esData;
  console.error(skills_info);
  return (
    <p style={{fontSize:"15px", fontFamily:"Poppins", textAlign:"left"}}>
      {skills_info.map((skills) => (
            skills.title + " | "
      ))}
      </p>
  );
}
