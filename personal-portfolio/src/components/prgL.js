
import React from 'react';
//import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
//import { ProjectCard } from "./ProjectCard";
import 'animate.css';
//import TrackVisibility from 'react-on-screen';

//import './ProgrammingLanguages.css'; // Make sure this points to your CSS file
import reactImage from '../assets/img/react.png';
import jImage from '../assets/img/java.png';
import jsImage from '../assets/img/js.png';
import cImage from '../assets/img/c.png';
import cplusImage from '../assets/img/c++.png';
import cssImage from '../assets/img/css.png';
import htmlImage from '../assets/img/html.png';
import soliImage from '../assets/img/solidity.png';
import rImage from '../assets/img/R.svg.png';
import pyImage from '../assets/img/py.png';
import matlabImage from '../assets/img/Matlab.png'


const languages = [
  { name: 'Python', image: pyImage },
  { name: 'R language', image: rImage },
  { name: 'matlab', image: matlabImage },
  { name: 'Java', image: jImage },
  { name: 'C', image: cImage },
  { name: 'C++', image: cplusImage },
  { name: 'html', image: htmlImage },
  { name: 'css', image: cssImage },
  { name: 'JavaScript', image: jsImage },
  { name: 'React', image: reactImage },
  { name: 'Solidity', image: soliImage },
  
  
];

const ProgrammingLanguages = () => {
  return (
    <div className="language-container">
      <div className="title-container"> {/* Added container for title */}
        <h2 className="title">Programming Languages</h2>
      </div>
      
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

