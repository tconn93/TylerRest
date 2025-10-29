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
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <header className="hero">
        <div className="hero-content">
          <h1 className="glitch" data-text="Tyler Rest">Tyler Rest</h1>
          <p className="subtitle">AI & Software Engineer</p>
          <div className="tagline">Building intelligent solutions for the modern web</div>
        </div>
      </header>

      <main className="main-content">
        <section className="services">
          <h2 className="section-title">
            <span className="title-accent">&lt;</span>
            Services & Products
            <span className="title-accent">/&gt;</span>
          </h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="card-glow"></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={service.link} className="cta-button">
                  Learn More
                  <span className="arrow">→</span>
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
