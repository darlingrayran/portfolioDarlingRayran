import React from 'react'
import "../../styles/header/subMenu.scss"
import { Link } from 'react-router-dom';

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
        </div>
        <nav className="menu">
                    <a href="https://github.com/darlingrayran" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://twitter.com/darling_rayran" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/feed/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://wa.me/+34670845172" target="_blank"><i class="fab fa-whatsapp"></i></a>
        </nav>
        </div>
    </div>
  )
}

export default SubMenu;