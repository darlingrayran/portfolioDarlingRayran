import React from 'react'
import "../../styles/header/subMenu.scss"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function SubMenu() {
  return (
    <div>
        <div className="capa"></div>

        <input type="checkbox" id="btn-menu" />
        <div className="container-menu">
        <div className="cont-menu">
            <nav>
              <Link to="/banner"> Inicio </Link>
              <Link to="/about">Sobre mí</Link>
              <Link to="/projects">Proyectos</Link>
              <Link to="/certifications">Certificaciones</Link>
              <Link to="/contact">Contacto</Link>
            </nav>
            <label htmlFor="btn-menu"> X </label>
            
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