import React from 'react';
import { Container, Row} from "react-bootstrap";
export const EducationComponent = () => {
  const subjects = [
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

  return (
    <section className="telecom" id="telecom">
      <Container>
        <Row>
          <h2>Education</h2>
          <p>Here is a description of my studies at Télécom ParisTech</p>
          <h2 style={{ color: 'red' }}>MEng at Télécom ParisTech</h2>
          <ul className='SubjectList'>
            {subjects.map((subject, index) => (
              <li _ngcontent-app-root="">
              <div class="course">
                <p key={index} class="title">- {subject};</p>
              </div>
              </li>
            ))}
          </ul>
        </Row>
      </Container>
    </section>
  );
};
