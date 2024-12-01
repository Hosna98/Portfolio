import  { useState } from "react";
import '../sass/Navbar.scss';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <nav className="navbar"> 
        <a className="title" href="/">Portfolio</a>
        <div className="menu">
            {/* Ici on change l'image en fonction de l'état du menu */}
            <img
                className="menuBtn"
                src={menuOpen 
                    ?( "/assets/nav/closeIcon.png")
                    : ("/assets/nav/menuIcon.png")
                }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)} // On change l'état du menu au clic
            />
            <ul className={`menuitems ${menuOpen ? "open" : ""}`}> {/* Ajout de classe pour les animations ou affichages */} 
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#compétences" onClick={() => setMenuOpen(false)}> Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </div>
      </nav>
    );
};