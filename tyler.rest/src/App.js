import './App.css';

function App() {
  const services = [
    {
      title: "Facebook Webhook Proxy",
      description: "Secure webhook proxy for Facebook Messenger integrations. Live demo: https://fb.tyler.rest",
      link: "https://fb.tyler.rest",
      tags: ["API", "Integration", "Real-time"]
    },
    {
      title: "eCommerce Solutions",
      description: "Custom eCommerce platforms with seamless payment integration. Live demo: https://moonwake.tyler.ag",
      link: "https://moonwake.tyler.ag",
      tags: ["Web Development", "Full-Stack", "Cloud"]
    }
  ];

  return (
    <div className="App">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Tyler Rest</h1>
          <p className="subtitle">AI & Software Engineer</p>
          <p className="tagline">Building intelligent solutions for the modern web</p>
          <div className="hero-cta">
            <a href="#services" className="cta-button large">Explore My Work</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section id="services" className="services">
          <h2 className="section-title">
            <span className="title-accent">&lt;</span>
            Featured Applications
            <span className="title-accent">/&gt;</span>
          </h2>
          <p className="section-subtitle">Click below to experience my latest creations</p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <div className="tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={service.link} className="cta-button prominent" target="_blank" rel="noopener noreferrer">
                  Launch App → 
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Tyler Rest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
