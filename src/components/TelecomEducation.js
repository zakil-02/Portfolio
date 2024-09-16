import React from 'react';
import { Container, Row} from "react-bootstrap";
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
    <section className="telecom" id="telecom">
      <Container>
        <Row>
          <h2>Education</h2>
          <h2 style={{ color: 'red' }}>MEng at Télécom ParisTech</h2>
          <ul className='SubjectList'>
            <h3> I - First Year: Generalist year </h3>
            {subjects1A.map((subject, index) => (
              <li _ngcontent-app-root="">
              <div class="course">
                <p key={index} class="title">- {subject};</p>
              </div>
              </li>
            ))}
            <h3> II- Second Year: Double major </h3>
            <h4>Computer Vision & Medical Imaging Major </h4>
            {Ima_subjects.map((subject, index) => (
              <li _ngcontent-app-root="">
              <div class="course">
                <p key={index} class="title">- {subject};</p>
              </div>
              </li>
            ))}
            <h4>Signal Processing for AI Major </h4>
            {tsia_subjects.map((subject, index) => (
              <li _ngcontent-app-root="">
              <div class="course">
                <p key={index} class="title">- {subject};</p>
              </div>
              </li>
            ))}
          </ul>
          <h2 style={{ color: 'red' }}>M2 Data Science at Ecole Polytechnique</h2>
          <ul className='SubjectList'>
            {M2Ds_courses.map((subject, index) => (
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
