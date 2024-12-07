import React from "react";
import { Col, Row } from "react-bootstrap";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center" }}>
      <Col xs={4} md={2} className="tech-icons" >
        Matrix Dashboard
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Sprinklr Dashboard
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Freshdesk
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        MS Excel
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        MS Word
      </Col>


    </Row>
  );
}

export default Techstack;
