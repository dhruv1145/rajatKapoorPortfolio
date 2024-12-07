import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/lenlogo.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/pblogo.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few companies I've worked with.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Policybazar UAE (Associate Sales Consultant)"
              line1="Conduct Outbound calls to prospective clients to promote products and services"
              line2="Achieved daily KRAs, provided weekly audit reports, and ensured documentation and compliance."
              line3="Sold a variety of insurance plans, including offerings from Dubai Insurance Company, Abu Dhabi National
              Insurance Company, Cigna Health , Sukoon Insurance,Takaful Emaraat among others."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Lenskart - (Fashion Consultant)"
              line1="Managed Inbound Sales through chat and calls, selling Sunglasses, Eyeglasses, and Contact Lenses to customers across India and occasionally to International clients."
              line2="Maintained customer data in Excel, achieved daily KRAs with weekly audit reporting."
              line3="Delivered exceptional customer service, resolved issues, and ensured client satisfaction, while following up on potential clients to drive conversions."

            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
