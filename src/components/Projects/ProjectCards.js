import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title style={{ marginBottom: "15px", fontSize: "22px" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "" }}>
          <ul style={{ textAlign: "left" }}>
            <li >{props.line1}</li>
            <li>{props.line2}</li>
            <li>{props.line3}</li>
          </ul>
        </Card.Text>

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}


      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
