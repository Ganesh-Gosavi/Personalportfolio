import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ganesh Gosavi </span>
            from <span className="purple"> Pune, India.</span>
            <br />  I am a motivated and enthusiastic Information Technology student currently pursuing my B.E at D. Y. Patil College Of Engineering, Akurdi. 
            <br />
            With a strong foundation in web development and a keen interest in Machine Learning
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Public Speaking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make The World A Better Place With Developer."{" "}
          </p>
          <footer className="blockquote-footer">Ganesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
