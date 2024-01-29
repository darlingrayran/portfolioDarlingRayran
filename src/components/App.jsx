// Fichero src/components/App.jsx
/* componente principal de nuestra web */
import '../styles/App.scss'; //importa los estilos de un componente

function App() {
  return (
    <div> 
      <header className="header">
        <div className="container">
          <div className="btn-menu">
            <label htmlFor="btn-menu">☰</label>
          </div>
          <nav className="menu">
            <a href="#" target="_blank"><i class="fab fa-github"></i></a>
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="#" target="_blank"><i class="fab fa-whatsapp"></i></a>
          </nav>
        </div>
      </header>
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
    <body>
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
      <div className='header_banner'>
      <section className='banner_title'>
        <h1> Darling Rayran Castro </h1>
        <h2> Full Stack Developer || Environmental Engineer </h2>
        <a href="#" className='cv'> Download CV </a>
      </section>
      </div>
      <section className='about'>
        <h2 className='about_title'> Sobre mí </h2>
        <h3> Resolutiva, Creativa, Adaptación al cambio </h3>
        <img className='family' src='./src/images/family.png' alt='Foto Familia'></img>
        <p> Me Destaco por mi capacidad para ofrecer soluciones creativas y efectivas, marcando una diferencia palpable en cualquier entorno profesional. </p>
        <p> En este viaje, descubro que el amor por la familia no solo enriquece mi vida personal, sino que también aporta una perspectiva valiosa que potencia mi crecimiento y éxito profesional. </p>
        <p> Esta combinación única de habilidades técnicas y valores familiares me impulsa a alcanzar logros excepcionales y a dejar una huella positiva en todo lo que me proponga.</p>
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
    </body>
    <footer className='footer'>
      <p>Creado por Darling Rayran @2024</p>
    </footer>
  </div>

  );
}

export default App;
