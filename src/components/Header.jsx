export default function Header({ toggleTheme, isDarkMode }) {
  return (
    <header className="glass-panel">
      <h3>Monayane Sibelly Mota Torquato</h3>
      <nav>
        <a href="#sobre">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <button id="theme-toggle" onClick={toggleTheme}>
          <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
        </button>
      </nav>
    </header>
  );
}