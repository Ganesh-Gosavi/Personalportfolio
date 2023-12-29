import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tech from "../../Assets/Projectss/imgproj1.jpg";
import movie from "../../Assets/Projectss/imagproj2.jpg";
import NextPayHub from "../../Assets/Projectss/robot.352cd501.png";
import dilevero from "../../Assets/Projectss/imgproj6.gif";
import assesment from "../../Assets/Projectss/assesment.webp";
import snake from "../../Assets/Projectss/snake-ganmee.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tech}
              isBlog={false}
              title="Tech-Master"
              description="Welcome to Tech Master, your ultimate destination for solving
all your technical problems and coding challenges. Whether
you're facing issues with your devices, software, or need
assistance with complex coding conundrums, we've got you
covered.
"
              ghLink="https://github.com/Ganesh-Gosavi
"
              demoLink="https://techdada.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie-Mate"
              description="Welcome to our Movies Recommendation System! Powered
by cutting-edge APIs, our platform delivers personalized
movie suggestions tailored to your unique tastes and
preferences.It make using ReactJS, HTML, and CSS, leverages cutting-edge APIs to
provide you with personalized movie recommendations.
"
              ghLink="https://github.com/Ganesh-Gosavi"
              demoLink="https://frolicking-profiterole-e5e514.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NextPayHub}
              isBlog={false}
              title="NextPayHub.com"
              description="
Explore a modern payment experience with our Responsive Website built in React JS, adorned with a sleek UI/UX design using Tailwind CSS. "
              ghLink="https://github.com/Ganesh-Gosavi"
              demoLink="http://projecthoobank.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dilevero}
              isBlog={false}
              title="Deliveroo"
              description="Welcome to Deleveroo - your one-stop destination to order
products easier and faster! We understand the value of your
time and the importance of convenience in today's fastpaced world.
"
              ghLink="https://github.com/Ganesh-Gosavi"
              demoLink="https://splendid-lokum-6f127a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assesment}
              isBlog={false}
              title="Assesment"
              description="I created a website on Internshala as part of an assessment where I was tasked with developing a Flashfood website. Using HTML, CSS,
JavaScript, and media queries, I designed and built a fully responsive website. This project allowed me to showcase my skills in web
development and design, ensuring that the website adapts seamlessly to different screen sizes and devices.
"
              ghLink="https://github.com/Ganesh-Gosavi"
              demoLink="https://assesmentttt.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake-Game"
              description="Experience thrilling gaming with our HTML, CSS, and JavaScript Snake Game! Navigate a hungry snake through a maze, collecting food while avoiding collisions with walls and your own tail."
              ghLink="https://github.com/Ganesh-Gosavi"
              demoLink="http://snake-game-gana.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
