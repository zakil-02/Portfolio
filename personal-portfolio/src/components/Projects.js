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

export const Projects = () => {
  const projects = [
    {
      title: "Maze Game",
      description: "Design & Development",
      imgUrls: [maze, projImg2],
    },
    {
      title: "Maze Game",
      description: "Design & Development",
      imgUrls: [maze, projImg2],
    },
    {
      title: "Maze Game",
      description: "Design & Development",
      imgUrls: [maze, projImg2],
    },
    {
      title: "Maze Game",
      description: "Design & Development",
      imgUrls: [maze, projImg2],
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
                        <h3>{project.title}</h3>
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
