// Fichero src/components/App.jsx
/* componente principal de nuestra web */
import '../styles/App.scss'; //importa los estilos de un componente
import Footer from './footer/footer';
import Menu from './header/menu';
import SubMenu from './header/subMenu';
import Animation from './body/animation';
import Banner from './body/banner';
import About from './body/about';
import Projects from './body/projects';
import Certifications from './body/certifications';
import Form from './body/form';

function App() {
  return (
    
    <div> 
      < Menu />
      < SubMenu />    
    <body>
      < Animation />
      < Banner />
      < About />
      < Projects />
      < Certifications />
      < Form />
    </body>
    < Footer />
  </div>

  );
}

export default App;
