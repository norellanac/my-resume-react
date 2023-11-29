import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import i18n from "../utils/i18n";
import Photo from "./../PHOTO.png";
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    return (

        <CardGroup>
            <div style={{width:'66%'}}>
                <Card style={{ backgroundColor: 'rgba(228, 246, 251, 0.75)', color: 'black', border:'none'}}>
                    <Card.Body>
                        <Row>
                            <Col md={4}>
                                <Image src={Photo} roundedCircle style={{height:'120px', width:'125px'}}/>
                            </Col>
                            <Col md={8}>
                                
                                    <Card.Title style={{color: '#222222', fontSize: '40px', fontStyle: 'normal', textAlign:'left', lineHeight: '34px', fontFamily: 'Poppins', fontWeight: '600', left: '200px', top: '32px'}}>{i18n.t("header[0].name")}</Card.Title>
                                    <Card.Text style={{textAlign:'justify'}}></Card.Text> 

                                    <Card.Title style={{color: '#1C8EB5', fontSize: '30px', fontStyle: 'normal', textAlign:'left', lineHeight: '24px', fontFamily: 'Poppins', fontWeight: '500', left: '200px', top: '75px'}}>{i18n.t("header[0].role")}</Card.Title>
                                    <Card.Text style={{textAlign:'justify'}}></Card.Text>
                            </Col> 
                            
                            <Row style={{ marginTop:'10px', marginBottom:'10px'}}>
                                <Card.Title style={{color: '#222', fontSize: '15px', fontStyle: 'normal', textAlign:'left', lineHeight: '25px', fontFamily: 'Poppins', fontWeight: '400', textAlign:'justify'}}>{i18n.t("header[0].summary")}</Card.Title>
                                <Card.Text ></Card.Text> 
                            </Row>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div style={{width:'33%'}}>
                <Card style={{ backgroundColor: 'rgba(228, 246, 251, 0.75)', color: 'black', border: 'none',}}>
                    <Card.Body>
                        <Row>
                            <Card.Title style={{color:"#1C8EB5", textAlign:'left'}}>{i18n.t("header[1].email-title")}</Card.Title>
                            <Card.Text style={{color:"#222",fontFamily:"Poppins", textAlign:'left', fontWeight: 'bold', textDecoration: 'underline'}}>{i18n.t("header[1].email")}</Card.Text>

                            <Card.Title style={{color:"#1C8EB5", textAlign:'left'}}>{i18n.t("header[1].linkedin-title")}</Card.Title>
                            <Card.Text style={{color:"#222",fontFamily:"Poppins", textAlign:'left', fontWeight: 'bold', textDecoration: 'underline'}}>{i18n.t("header[1].linkedin")}</Card.Text>

                            <Card.Title style={{color:"#1C8EB5", textAlign:'left'}}>{i18n.t("header[1].phone-title")}</Card.Title>
                            <Card.Text style={{color:"#222",fontFamily:"Poppins", textAlign:'left', fontWeight: 'bold', textDecoration: 'underline'}}>{i18n.t("header[1].phone")}</Card.Text>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </CardGroup>
    );
}

{/* <div style={{ width: '595px', height: '176px', left: '0px', top: '0px', position: 'absolute' }}>
      <div style={{ width: '595px', height: '176px', left: '0px', top: '0px', position: 'absolute', background: 'rgba(228, 246, 251, 0.50)' }}></div>
      <div style={{ left: '102px', top: '32px', position: 'absolute', color: '#222222', fontSize: '26px', fontFamily: 'Poppins', fontWeight: '600', lineHeight: '34px', wordWrap: 'break-word' }}>
        Kate Bishop
      </div>
      <div style={{ left: '102px', top: '66px', position: 'absolute', color: '#1C8EB5', fontSize: '16px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '24px', wordWrap: 'break-word' }}>
        Product Designer
      </div>
      <div style={{ width: '313px', left: '32px', top: '104px', position: 'absolute', color: '#222222', fontSize: '10px', fontFamily: 'Poppins', fontWeight: '400', lineHeight: '14px', wordWrap: 'break-word' }}>
        Over 5 years of professional experience conducting UX research and designing interactive end-to-end user flows.
        <br />I enjoy working in close collaboration with teams across technology, business, and design.
      </div>
      <div style={{ width: '154px', height: '108px', left: '385px', top: '40px', position: 'absolute' }}>
        <div style={{ left: '0px', top: '54px', position: 'absolute', color: 'black', fontSize: '10px', fontFamily: 'Poppins', fontWeight: '600', textDecoration: 'underline', lineHeight: '14px', wordWrap: 'break-word' }}>
          linkedin.com/in/kate-bishop
        </div>
        <div style={{ left: '0px', top: '0px', position: 'absolute', color: '#1C8EB5', fontSize: '10px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '14px', wordWrap: 'break-word' }}>
          Email
        </div>
        <div style={{ left: '0px', top: '80px', position: 'absolute', color: '#1C8EB5', fontSize: '10px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '14px', wordWrap: 'break-word' }}>
          Phone
        </div>
        <div style={{ left: '0px', top: '40px', position: 'absolute', color: '#1C8EB5', fontSize: '10px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '14px', wordWrap: 'break-word' }}>
          LinkedIn
        </div>
        <div style={{ left: '0px', top: '14px', position: 'absolute', color: '#222222', fontSize: '10px', fontFamily: 'Poppins', fontWeight: '600', textDecoration: 'underline', lineHeight: '14px', wordWrap: 'break-word' }}>
          kate.bishop@katedesign.com
        </div>
        <div style={{ left: '0px', top: '94px', position: 'absolute', color: '#222222', fontSize: '10px', fontFamily: 'Poppins', fontWeight: '600', textDecoration: 'underline', lineHeight: '14px', wordWrap: 'break-word' }}>
          +46 98-765 43 21
        </div>
      </div>
      <img
        style={{ width: '58px', height: '58px', left: '32px', top: '32px', position: 'absolute', borderRadius: '72px', border: '1px #D9D9D9 solid' }}
        src={Photo} alt="photo"
    
      />
    </div> */}
