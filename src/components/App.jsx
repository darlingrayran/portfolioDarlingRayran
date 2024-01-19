// Fichero src/components/App.jsx
/* componente principal de nuestra web */
import '../styles/App.scss'; //importa los estilos de un componente

function App() {
  return (
    <div>
      <header className='header'>
          <div className='header_div'>
            <nav>
              <a href="#"><i class="fa-solid fa-house"></i></a>
              <a href="#"> Sobre mi </a>
              <a href="#"> Proyectos </a>
              <a href="#"> Certificaciones </a>
              <a href="#"> Contacto </a>
            </nav>
          </div>
          <div className='header_banner'>
            <section className='banner'>
            <section className='banner_title'>
              <h1> Darling Rayran Castro </h1>
              <h2> Full Stack Developer </h2>
            </section>
            <ul>
              <li><i class="fas fa-code"></i> </li>
              <li><i class="fas fa-paint-brush"></i></li>
              <li><i class="fab fa-js"></i></li>
              <li><i class="fab fa-react"></i></li>
              <li><i class="fas fa-database"></i></li>
              <li><i class="fab fa-github"></i></li>
            </ul>
            <a href="#" className='cv'> Download CV </a>
            </section>
            <div className='burbujas'>
              <div className='burbuja'></div>
              <div className='burbuja'></div>
              <div className='burbuja'></div>
              <div className='burbuja'></div>
              <div className='burbuja'></div>
              <div className='burbuja'></div>
              <div className='burbuja'></div>
              <div className='burbuja'></div>
            </div>
          </div>
      </header>
      <body>
        <section className='about'>
          <h2 className='about_title'> Sobre mí </h2>
          <h3> Resolutiva, Creativa, Adaptación al cambio </h3>
          <img className='family' src='./src/images/family.png' alt='Foto Familia'></img>
          <p> Me Destaco por mi capacidad para ofrecer soluciones creativas y efectivas, marcando una diferencia palpable en cualquier entorno profesional. </p>
          <p> En este viaje, descubro que el amor por la familia no solo enriquece mi vida personal, sino que también aporta una perspectiva valiosa que potencia mi crecimiento y éxito profesional. </p>
          <p> Esta combinación única de habilidades técnicas y valores familiares me impulsa a alcanzar logros excepcionales y a dejar una huella positiva en todo lo que me proponga.</p>
          <ul>
            <li><a href="#" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="#" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
          </ul>
        </section>
        <section className='projects'>
          <h2 className='subtitle'>Proyectos</h2>
          <div id="loading"></div>
        </section>
        <section className='certification'>
          <h2 className='subtitle'>Certificaciones</h2>
          <div className="diplomas">
            <img className="diploma" src="./src/images/diploma1.png" alt="Certificado Estudio"></img>
            <img className="diploma" src="./src/images/diploma2.png" alt="Certificado Estudio"></img>
            <img className="diploma" src="./src/images/diploma3.png" alt="Certificado Estudio"></img>
            <img className="diploma" src="./src/images/diploma4.png" alt="Certificado Estudio"></img>
          </div>
        </section>
        <section className='contact-section'>
          <div className='contact-content'>
            <h2>Contacto</h2>
            <p>¿Estas buscando una persona Junior Web Developer para tu equipo de trabajo?</p>
            <p>¡Aquí estoy yo!</p>
            <p>Estoy en la búsqueda de nuevas oportunidades que me permitan seguir creciendo profesionalmente. ¡Estoy completamente dispuesta, entusiasmada y con ideas nuevas que aportarán significativamente en su empresa!</p>
            <p>El momento es ahora!</p>
            <ul>
             <li><i className="fas fa-map-marker-alt"></i> Ubicación</li>
              <li><i className="far fa-envelope"></i> Correo</li>
              <li><i className="fas fa-phone-alt"></i> Teléfono</li>
            </ul>
          </div>
          <form className='contact-form' action='#' method='post'>
            <label htmlFor="name"> Nombre: </label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email"> Correo electrónico: </label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message"> Déjame un mensaje: </label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit"> Enviar </button>
          </form>
        </section>
    </body>
    <footer className='footer'>
      <img className="logo" src="./src/images/logoDR.png" alt="Logo"></img>
      <p>Creado con amor @2024</p>
    </footer>
  </div>
  );
}

export default App;

/*funcion APP retorna el HTML que queremos mostrar en la web, no se cambia de nombre, ni de carpeta*/ 