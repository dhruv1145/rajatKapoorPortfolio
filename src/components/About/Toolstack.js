import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        communication skills
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Active listening
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Peruasive skills
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        problem solving
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Adaptability
      </Col>
    </Row>
  );
}

export default Toolstack;
