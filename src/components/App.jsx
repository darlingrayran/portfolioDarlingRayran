/* componente principal de nuestra web */
import '../styles/App.scss'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router>
      <div> 
        < Menu />
        < SubMenu />
        < Animation />
        <Routes>
          <Route path="/banner" element={< Banner /> } />
          <Route path="/about" element={ < About /> } />
          <Route path="/projects" element={< Projects />} />
          <Route path="/certifications" element={<Certifications/>} />
          <Route path="/contact" element={< Form/>} />
        </Routes>
        <Footer />
    </div>
  </Router>

  );
}

export default App;
