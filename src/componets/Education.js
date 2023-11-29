import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import i18n from "../utils/i18n";

function Education() {
  return (
    <div>
      <Card style={{ textAlign:"left",border:0 }}>
        <Card.Body>
          <Card.Title style={{color:"#222"}}>{i18n.t("education[0].title")}</Card.Title>
          <Card.Text style={{color:"#797979",fontFamily:"Prata"}}>
            -{i18n.t("education[0].school")}, {i18n.t("education[0].start_date")} - {i18n.t("education[0].end_date")}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ textAlign:"left",border:0 }}>
        <Card.Body>
          <Card.Title style={{color:"#222"}}>{i18n.t("education[1].title")}</Card.Title>
          <Card.Text style={{color:"#797979" ,fontFamily:"Prata"}}>
            -{i18n.t("education[1].school")}, {i18n.t("education[1].start_date")} - {i18n.t("education[1].end_date")}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ textAlign:"left",border:0 }}>
        <Card.Body>
          <Card.Title style={{color:"#222"}}>{i18n.t("education[2].title")}</Card.Title>
          <Card.Text style={{color:"#797979" ,fontFamily:"Prata"}}>
            -{i18n.t("education[2].school")}, {i18n.t("education[1].start_date")} - {i18n.t("education[1].end_date")}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ textAlign:"left",border:0 }}>
        <Card.Body>
          <Card.Title style={{color:"#222"}}>{i18n.t("education[3].title")}</Card.Title>
          <Card.Text style={{color:"#797979" ,fontFamily:"Prata"}}>
            -{i18n.t("education[3].school")}, {i18n.t("education[1].start_date")} - {i18n.t("education[1].end_date")}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ textAlign:"left",border:0 }}>
        <Card.Body>
          <Card.Title style={{color:"#222"}}>{i18n.t("education[4].title")}</Card.Title>
          <Card.Text style={{color:"#797979" ,fontFamily:"Prata"}}>
            -{i18n.t("education[4].school")}, {i18n.t("education[1].start_date")} - {i18n.t("education[1].end_date")}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ textAlign:"left",border:0 }}>
        <Card.Body>
          <Card.Title style={{color:"#222"}}>{i18n.t("education[5].title")}</Card.Title>
          <Card.Text style={{color:"#797979" ,fontFamily:"Prata"}}>
            -{i18n.t("education[5].school")}, {i18n.t("education[1].start_date")} - {i18n.t("education[1].end_date")}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ textAlign:"left",border:0 }}>
        <Card.Body>
          <Card.Title style={{color:"#222"}}>{i18n.t("education[6].title")}</Card.Title>
          <Card.Text style={{color:"#797979" ,fontFamily:"Prata"}}>
            -{i18n.t("education[6].school")}, {i18n.t("education[1].start_date")} - {i18n.t("education[1].end_date")}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export { Education }