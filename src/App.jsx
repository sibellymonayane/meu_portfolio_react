import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efeito para adicionar/remover a classe 'dark' no body sempre que o estado mudar
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <div className="blob one"></div>
      <div className="blob two"></div>
      
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main>
        <About />
        <Projects />
      </main>
      
      <Footer />
    </>
  );
}

export default App;