import React from 'react'
import '../../styles/body/form.scss';

function form() {
  return (
    <div>
    <section className='contact-section'>
        <div className='contact-content'>
            <h2>Contacto</h2>
            <p>¿Estas buscando una persona Junior Web Developer para tu equipo de trabajo?</p>
            <p>¡Aquí estoy yo!</p>
            <p>Estoy en la búsqueda de nuevas oportunidades que me permitan seguir creciendo profesionalmente. ¡Estoy completamente dispuesta, entusiasmada y con ideas nuevas que aportarán significativamente en su empresa!</p>
            <p>El momento es ahora!</p>
            <ul>
            <li><i className="fas fa-map-marker-alt"></i> Valencia, Spain</li>
            <li><i className="far fa-envelope"></i> darlingrayran@hotmail.com</li>
            <li><i className="fas fa-phone-alt"></i> (+34)670845172</li>
            </ul>
            <p> Tambien puedes rellenar el formulario y me podre en contacto en la mayor brevedad posible </p>
        </div>
        <form className='contact-form' action='#' method='post'>
            <label htmlFor="name"> Nombre: </label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="phone"> Telefono </label>
            <input type="text" id="phone" name="phone" required />

            <label htmlFor="email"> Correo electrónico: </label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message"> Déjame un mensaje: </label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit"> Enviar </button>
        </form>
    </section>
    </div>
  )
}

export default form;