// Fichero src/components/App.jsx
/* componente principal de nuestra web */
import '../styles/App.scss'; //importa los estilos de un componente

function App() {
  return (
    <div>
      <header className='header'>
          <div className='header_div'>
            <nav>
              <a href="#"> Home </a>
              <a href="#"> Sobre mi </a>
              <a href="#"> Proyectos </a>
              <a href="#"> Other </a>
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
          </div>
      </header>

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
    </body>

    <footer>
    </footer>
  </div>
  );
}

export default App;

/*funcion APP retorna el HTML que queremos mostrar en la web, no se cambia de nombre, ni de carpeta*/ 