import './App.css'
import Nav from './nav/Nav'
import Header from './header/Header';
import Skills from './skills/Skills';
import Project from './projects/projects';
import Education from './Education/Education';
import Footer from './footer/Footer';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark-mode" : "light-mode"}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Header />
      <Skills />
      <Project />
      <Education />
      <Footer />
    </div>
  );
}

export default App