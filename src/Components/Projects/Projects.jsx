/*
  import { useState } from "react";
import Modal from "../Modal/Modal"; // Importer la modale
import ProjectsData from "../../data/travaux";
import "../../sass/Projects/Projects.scss";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null); // État pour le projet sélectionné

  const handleCardClick = (project) => {
    setSelectedProject(project); // Ouvre la modale avec le projet sélectionné
  };

  const closeModal = () => {
    setSelectedProject(null); // Ferme la modale
  };

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {ProjectsData.map((project, id) => (
          <div
            key={id}
            className="project-card"
            onClick={() => handleCardClick(project)} // Ouvre la modale au clic
          >
            <img
              className="projetct-image"
              src={project.image}
              alt={`Image of ${project.name}`}
            />
            <h3 className="projet-title-name">{project.name}</h3>
            <p className="project-text">{project.text}</p>
          </div>
        ))}
      </div>
    
      
      <Modal project={selectedProject} onClose={closeModal} /> 
    </section>
  );
};



*/

























import { useState } from "react"; // Importation de useState depuis React
import Modal from "../Modal/Modal"; // Importer la modale
import ProjectsData from "../../data/travaux"; // Importer les données des projets
import "../../sass/Projects/Projects.scss"; // Importer les styles SCSS

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null); // État pour le projet sélectionné

  const handleCardClick = (project) => {
    setSelectedProject(project); // Ouvre la modale avec le projet sélectionné
  };

  const closeModal = () => {
    setSelectedProject(null); // Ferme la modale
  };

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {ProjectsData.map((project, id) => (
          <div
            key={id}
            className="project-card"
            onClick={() => handleCardClick(project)} // Ouvre la modale au clic
          >
            {/* Suppression de l'image */}
            {/* <img
              className="project-image" // Correction du nom de classe
              src={project.image}
              alt={`Image of ${project.name}`} // Description de l'image
            /> */}
            <img className="project-image"src="/assets/image/code.png" alt="Code"/>
            <h3 className="project-title-name">{project.name}</h3> {/* Affiche le nom du projet */}
          
          </div>
        ))}
      </div>
    
      {/* Afficher la modale si un projet est sélectionné */}
      <Modal project={selectedProject} onClose={closeModal} /> 
    </section>
  );
};