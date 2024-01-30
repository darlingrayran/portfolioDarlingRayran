import React from 'react'
import "../../styles/header/subMenu.scss"

function subMenu() {
  return (
    <div>
        <div className="capa"></div>

        <input type="checkbox" id="btn-menu" />
        <div className="container-menu">
        <div className="cont-menu">
            <nav>
            <a href="#">Inicio</a>
            <a href="#">Sobre mí</a>
            <a href="#">Proyectos</a>
            <a href="#">Certificaciones</a>
            <a href="#">Contacto</a>
            </nav>
            <label htmlFor="btn-menu"> X </label>
        </div>
        </div>
    </div>
  )
}

export default subMenu;