
import "../../sass/Modal/Modal.scss"; // Crée un fichier SCSS pour styliser la modale

const Modal = ({ project, onClose }) => {
  if (!project) return null; // Ne rien afficher si aucun projet n'est sélectionné

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-image-container">
         <img src={project.image} alt={project.name} className="modal-image" />
        </div>
        <h3>{project.name}</h3>
        <p>{project.text}</p>
        <ul>
          {project.competences.map((competence, index) => (
            <li key={index}>{competence}</li>
          ))}
        </ul>
        <div className="modal-links">
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          {project.site && (
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            Site
          </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;