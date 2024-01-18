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
              <a href="#"> About me </a>
              <a href="#"> Projects </a>
              <a href="#"> Other </a>
              <a href="#"> Social Networks </a>
            </nav>
          </div>
          
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
            <a href="#" className='contact'> Contact me </a>
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

      </header>
      <body>
        <div className="page">
          <h1 className="title1">About me </h1> 
          <h2> Proje </h2>
          <h2></h2>
          <p>probando</p>
          <ul>
            <li>started</li>
            <li>kit</li>
            <li>react</li>
          </ul>
        </div>
    </body>

    <footer>
      <img src="./src/images/logoDR.png" alt="Logo" />
    </footer>
  </div>
  );
}

export default App;

/*funcion APP retorna el HTML que queremos mostrar en la web, no se cambia de nombre, ni de carpeta*/ 