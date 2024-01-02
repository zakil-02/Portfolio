import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import maze from "../assets/img/maze1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Carousel from "react-bootstrap/Carousel";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

//Maze Project
import maze1 from "../assets/img/0.png";
import maze2 from "../assets/img/1.png";
import maze3 from "../assets/img/2.png";
import mazel from "../assets/img/mazelogo.png";

//RISs project
import poster from "../assets/img/paf.png";
//Interpactif

//Radiomique
import rad1 from "../assets/img/radiomique1.png";
import rad2 from "../assets/img/radiomique2.png";
//Levitate
import levi1 from "../assets/img/levitate1.png";
import levi2 from "../assets/img/levitate2.png";
export const Projects = () => {
  const projects = [
    {
      title: "Maze Game",
      description: "Design, Development & Optimization",
      imgUrls: [mazel, maze1, maze2, maze3],
    },
    {
      title: "RISs Beam Alignement with ML",
      description: "ML, Applied Maths & Information Theory",
      imgUrls: [poster],
    },
    {
      title: "Radiomique",
      description: "Medical imaging & Statistics",
      imgUrls: [rad1, rad2],
    },
    {
      title: "Levitate",
      description: "Design & Development",
      imgUrls: [levi1, levi2],
    },
  ];

  const [activeTab, setActiveTab] = useState("first");

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Projects</h2>
            <p>Here are some of the projects I contributed to.</p>
            <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                {projects.map((project, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={`tab-${index + 1}`}>{project.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                {projects.map((project, index) => (
                  <Tab.Pane key={index} eventKey={`tab-${index + 1}`}>
                    <Row>
                      <Col md={6}>
                        <Carousel>
                          {project.imgUrls.map((imgUrl, imgIndex) => (
                            <Carousel.Item key={imgIndex}>
                              <img src={imgUrl} alt={`Project ${index + 1} image ${imgIndex + 1}`} className="img-fluid" />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </Col>
                      <Col md={6}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        {/* Additional project details can be added here */}
                      </Col>
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

export default Projects;
