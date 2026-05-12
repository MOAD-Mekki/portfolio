import './App.css'
import Nav from './nav/Nav'
import Header from './header/Header';
import Skills from './skills/Skills';
import Project from './projects/projects';
import Education from './Education/Education';
import Footer from './footer/Footer';
import { ThemeContext, ThemeProvider } from './theme/ThemeProvider';
import { useContext, useState } from 'react';

function AppContent() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isDark ? "dark" : "light"}>
      <Nav />
      <Header />
      <Skills />
      <Project />
      <Education />
      <Footer />
    </div>
  );
}

function App() {

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App