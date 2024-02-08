import React, { useState } from 'react';
import '../../styles/body/form.scss';
import emailjs from 'emailjs-com';

function Form() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    let location = "Gandia, Valencia, Spain";
    let contactEmail = "darlingrayran@hotmail.com";
    let contactPhone = "(+34)670845172";
  
    const sendEmail = (e) => {
      e.preventDefault();
      
      if (!name.trim() || name.length < 2) {
        alert("Por favor, ingresa un nombre válido de al menos 2 caracteres.");
        return;
      }
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
      }
      if (!phone.trim() || phone.length < 7) {
        alert("Por favor, ingresa un número de teléfono válido.");
        return;
      }
      if (!message.trim() || message.length < 10) {
        alert("Por favor, ingresa un mensaje de al menos 10 caracteres.");
        return;
      }
    
      emailjs.sendForm('service_42dcnya', 'template_aklh8sb', e.target, '_ZeB41AmWbxPuSnqW')
        .then((result) => {
          console.log(result.text);
          alert('Gracias por enviar tu mensaje!');
          
          setName('');
          setPhone('');
          setEmail('');
          setMessage('');
        }, (error) => {
          console.log(error.text);
          alert('Error al enviar el mensaje, por favor intenta de nuevo.');
        });
    };
    
    
  
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
            <li className='box'><i className="fas fa-map-marker-alt"></i> {location} </li>
            <li className='box'><i className="far fa-envelope"></i> {contactEmail} </li>
            <li className='box'><i className="fas fa-phone-alt"></i> {contactPhone} </li>
            </ul>
            <p> Dejame tus datos y me podre en contacto en la mayor brevedad posible. </p>
        </div>
        <form className='contact-form' onSubmit={sendEmail}>
            <label htmlFor="name"> Nombre: </label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required 
              minLength="3"
              />

            <label htmlFor="phone"> Telefono </label>
            <input 
              type="text" 
              id="phone" 
              name="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} 
              required />

            <label htmlFor="email"> Correo electrónico: </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Por favor, introduce una dirección de correo electrónico válida."
              />

            <label htmlFor="message"> Déjame un mensaje: </label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              minLength="10"
              ></textarea>

            <button type="submit"> Enviar </button>
        </form>
    </section>
    </div>
  )
}

export default Form;