import React from 'react'
import "../../styles/body/projects.scss";
import adams from "../../images/adamsCards.png";
import detective from "../../images/detectiveCards.png";



function Projects() {

  const landingAdams = [adams];
  const landingDet = [detective];

  return (
    <div>
    <section className='projects'>
        <h2 className='subtitle'>Proyectos</h2>
        <p className='text'> Durante mi formación con el Bootcamp de Adalab, tuve la oportunidad de colaborar en diversos proyectos con mujeres con un talento increible; las cuales me motivaron a seguir aprendiendo y lo cual ha sido esencial para mi desarrollo profesional en el ámbito tecnológico. Estos trabajos reflejan mi capacidad de aprendizaje y adaptación a las nuevas tecnologías. Actualmente, me encuentro en una etapa de creación activa, trabajando en el desarrollo de nuevo contenido que espero compartir próximamente. </p>
    </section >
    <section className='adams'>
        <div className="projectAdams">
          <h3 className='names'> Create Cards </h3>
          <img className='landing' src={landingAdams} alt='Landing'></img>
          <a href="https://github.com/darlingrayran/createCards-Adams" class="button-link" target="_blank" rel="noopener noreferrer"> Descubre cada detalle </a>
        </div>
    </section>
    <section className='pro'>
        <div className="projectDetective">
          <h3 className='names'> Detective Cards </h3>
          <img className='landing' src={landingDet} alt='Landing'></img>
          <a href="https://reactives-detectives.onrender.com/" class="button-link" target="_blank" rel="noopener noreferrer" > Emprende el recorrido </a>
        </div>
    </section>
    <section className='other'>
        <h3 className='names'> Otros proyectos </h3>
        <div class="loader-container">
          <div class="loader-bar"></div>
          <span class="loading-text"> Loading...</span>
        </div>
    </section>   
    </div>
  )
}

export default Projects;