import React, { useState, useEffect } from "react";
import achievement from '../../Assets/Projects/achi1.jpg'
import achievement2 from '../../Assets/Projects/achi2.jpg'
import achievement3 from '../../Assets/Projects/achi3.jpg'
import background from '../../Assets/Projects/img13.jpg'
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Achievement() {
  const [width, setWidth] = useState(1200);

  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <h1 style={{ color: "white", marginBottom: "50px" }}>My Achievements</h1>
        <CardGroup className="achievement" style={{ fontFamily: " Parkinsans, sans-serif" }}>
          <Card style={{ backgroundColor: "" }}>
            <Card.Img variant="top" src={achievement} style={{ height: "310px" }} />
            <Card.Body>
              <Card.Title style={{ fontSize: "32px" }}>Policy Bazar</Card.Title>
              <Card.Text>
                Star Performer of the quarter Q4, 2023-2024.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 1 week ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={achievement2} />
            <Card.Body>
              <Card.Title style={{ fontSize: "32px" }}>Lenskart</Card.Title>
              <Card.Text>
                3rd Position in generating highest revenue in May 2022.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 1 week ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={achievement3} />
            <Card.Body>
              <Card.Title style={{ fontSize: "32px" }}>Lenskart</Card.Title>
              <Card.Text>
                2nd Position during OJT in the April 2022.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 1 week ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        );


      </Container >
    </div >
  );
}

export default Achievement;
