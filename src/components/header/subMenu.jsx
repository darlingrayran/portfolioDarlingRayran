import React, { useState } from 'react';
import "../../styles/header/subMenu.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function SubMenu() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div>
        <div className="capa" onClick={() => setMenuOpen(false)}></div>

        <input type="checkbox" id="btn-menu" checked={menuOpen} onChange={toggleMenu} />
        <div className="container-menu">
        <div className="cont-menu">
            <nav>
              <Link to="/banner" onClick={() => setMenuOpen(false)}>Inicio</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>Sobre mí</Link>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>Proyectos</Link>
              <Link to="/certifications" onClick={() => setMenuOpen(false)}>Certificaciones</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
            </nav>
            <label htmlFor="btn-menu" onClick={toggleMenu}></label>
            
            <div className='icons'>
              <nav className='icons_red'>
                  <a href="https://github.com/darlingrayran" target="_blank"><FontAwesomeIcon icon={faGithub} /> </a>
                  <a href="https://twitter.com/darling_rayran" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                  <a href="https://www.linkedin.com/feed/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> </a>
                  <a href="https://wa.me/+34670845172" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
              </nav>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SubMenu;