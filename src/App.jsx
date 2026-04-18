import './App.css'
import Nav from './nav/Nav'
import Header from './header/Header';
import Skills from './skills/Skills';
import Project from './projects/projects';
import Education from './Education/Education';
import Footer from './footer/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Skills />
      <Project />
      <Education />
      <Footer />
    </div>
  );
}

export default App