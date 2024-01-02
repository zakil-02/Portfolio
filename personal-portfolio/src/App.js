
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ProgrammingLanguages from './components/prgL';
import Softwares from './components/Software';
import { EducationComponent } from './components/TelecomEducation.js';
import { Loader } from './components/Loader.js';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Simulating a 5-second loading time

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Banner />
          <Skills />
          <ProgrammingLanguages/>
          <Softwares/>
          <EducationComponent />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
      
    </div>
  );
}

export default App;
