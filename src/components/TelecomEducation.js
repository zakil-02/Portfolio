import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FiBook, FiAward, FiChevronDown } from 'react-icons/fi';
import '../App.css';


export const EducationComponent = () => {
  const subjects1A = [
    "Signal Processing for AI and Medical Imaging",
    "Advanced Statistics and Monte Carlo Approaches",
    "Optimization for Machine Learning",
    "Nonlinear Programming (NLP)",
    "Time Series and Forecasting",
    "Information Theory",
    "Nano-physics",
    "Programming Languages Theory",
    "Optical Communication and Holography",
    "Web Development",
    "Radiomics",
    "Mathematical Morphology",
    "Medical Image Registration",
    "Multi-dimensional Markov Model and Gibbs Sampling",
    "Bayesian Analysis and Markov Random Field",
    "Graph Cut Optimization",
    "Statistical Shape Analysis in Images",
    "Waiting Queue Applied in Telecommunication",
    "C++ Programming Contest",
    "Programming paradigms C++/Java ",
    "..."
  ];

  const Ima_subjects = [
    "Image processing fundamentals",
    "Variational and Bayesian Methods & Discrete Optimization",
    "Medical & Biological Imaging ",
    "Learning For Image",
    "Computational Imaging & Generative Models",
    "3D & Video",
    "Teledection & Source Separation",
  ];
  const tsia_subjects= [
    "Signal Processing",
    "Time Series",
    "Linear Models",
    "Machine Learning",
    "Optimization For Machine Learning",
    "Deep Learning",
    "Advanced Statistics",
    "Music & Sound Processing",
  ];

  const M2Ds_courses= [
    "Cooperative Optimization for Data Science",
    "ML for Energy and Climate",
    "Hidden Markov models and Sequential Monte Carlo methods : From MCMC to DL",
    "Big Data Framework",
    "DATA stream processing",
    "Operator Learning, applications in dynamical systems and uncertainty quantification",
    "Machine Leaning with Graphs",
    "Optimal Transport: Theory, Computations, Statistics, and ML Applications",
    "Stochastic approximation and reinforcement learning", 
    "Deep learning for Computer Vision"
  ];



  return (
    <section className="education" id="education">
      <Container>
        <h2 className="section-title">Education</h2>
        
        <Row className="g-4">
          {/* Telecom Paris */}
          <Col xs={12} lg={6}>
            <Card className="education-card">
              <Card.Body>
                <div className="edu-header">
                  <FiBook className="edu-icon" />
                  <div>
                    <h3 className="edu-institution">Télécom ParisTech</h3>
                    <p className="edu-degree">Master of Engineering</p>
                  </div>
                </div>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      First Year: Generalist Curriculum
                      <FiChevronDown className="accordion-arrow" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <SubjectList items={subjects1A} columns={2} />
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Second Year: Double Major
                      <FiChevronDown className="accordion-arrow" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <h4 className="major-title">Computer Vision & Medical Imaging</h4>
                      <SubjectList items={Ima_subjects} />
                      
                      <h4 className="major-title mt-4">Signal Processing for AI</h4>
                      <SubjectList items={tsia_subjects} />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>

          {/* École Polytechnique */}
          <Col xs={12} lg={6}>
            <Card className="education-card">
              <Card.Body>
                <div className="edu-header">
                  <FiAward className="edu-icon" />
                  <div>
                    <h3 className="edu-institution">École Polytechnique</h3>
                    <p className="edu-degree">MSc Data Science</p>
                  </div>
                </div>

                <SubjectList items={M2Ds_courses} columns={1} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Helper component
const SubjectList = ({ items, columns = 1 }) => (
  <Row className={`subject-list columns-${columns}`}>
    {items.map((subject, index) => (
      <Col key={index} xs={12} md={columns > 1 ? 6 : 12}>
        <div className="subject-item">
          <span className="bullet">•</span>
          {subject}
        </div>
      </Col>
    ))}
  </Row>
);