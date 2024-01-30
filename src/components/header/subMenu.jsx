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
              <Link to="/banner">Inicio</Link>
              <Link to="/about">Sobre mí</Link>
              <Link to="/projects">Proyectos</Link>
              <Link to="/certifications">Certificaciones</Link>
              <Link to="/contact">Contacto</Link>
            </nav>
            <label htmlFor="btn-menu"> X </label>
        </div>
        </div>
    </div>
  )
}

export default SubMenu;