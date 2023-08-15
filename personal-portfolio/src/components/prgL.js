
import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import './ProgrammingLanguages.css'; // Make sure this points to your CSS file
import reactImage from './assets/img/react.png'; // Replace with your image paths
import pythonImage from './assets/img/python.png';
// Import other language images here

const languages = [
  { name: 'React', image: reactImage },
  { name: 'Python', image: pythonImage },
  // Add other languages here
];

const ProgrammingLanguages = () => {
  return (
    <div className="language-container">
      {languages.map((language, index) => (
        <div className="language-item" key={index}>
          <img
            className="language-image"
            src={language.image}
            alt={language.name}
          />
          <p className="language-name">{language.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgrammingLanguages;


