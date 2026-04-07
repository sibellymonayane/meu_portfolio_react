const projectsData = [
  { 
    img: 'https://storage.googleapis.com/operfluxo/projetos_gerais/capa_sibelly.png', 
    titulo: 'Meu Portfólio', 
    link: 'https://github.com/sibellymonayane/meu_portfolio' 
  },
  {
    img: 'https://storage.googleapis.com/operfluxo/projetos_gerais/capa_sibelly.png',
    titulo: 'Meu Portfólio em React',
    link: 'https://github.com/sibellymonayane/meu_portfolio_react'
  }
];

export default function Projects() {
  return (
    <section id="projetos">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Meus Projetos</h2>
      <div className="cards-wrapper">
        {projectsData.map((item, index) => (
          <div className="glass-panel p-card" key={index}>
            <img src={item.img} alt={item.titulo} />
            <h3>{item.titulo}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Ver GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
