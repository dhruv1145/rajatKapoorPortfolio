import React, { useState, useEffect } from "react";
import achievement from '../../Assets/Projects/achi1.jpg'
import achievement2 from '../../Assets/Projects/achi2.jpg'
import achievement3 from '../../Assets/Projects/achi3.jpg'
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <div className="title">My achievements</div>
        <div className="service">


          <div className="content-new" style={{ display: "flex", textAlign: "center", }}>
            <div><img style={{ height: "200px", width: "300px" }} src={achievement} /></div>
            <div> <h2>Policy Bazar</h2>
              <h1 style={{ color: "white", fontSize: "22px" }}>Star Performer of the quarter Q4, 2023-2024.</h1></div>

          </div>

          <div className="content-new" style={{ display: "flex", textAlign: "center", }}>
            <div><img style={{ height: "200px", width: "300px" }} src={achievement2} /></div>
            <div><h2>Lenskart</h2>
              <h1 style={{ color: "white", fontSize: "22px" }}>3rd Position in generating highest revenue in May 2022.</h1></div>

          </div>

          <div className="content-new" style={{ display: "flex", textAlign: "center", }}>
            <div><img style={{ height: "200px", width: "300px" }} src={achievement3} /></div>
            <div><h2>Lenskart</h2>
              <h1 style={{ color: "white", fontSize: "22px" }}>2nd Position during OJT in the April 2022.</h1></div>

          </div>






        </div>
      </Container >
    </div >
  );
}

export default ResumeNew;
