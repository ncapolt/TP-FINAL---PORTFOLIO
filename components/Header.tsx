export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Fotografía Automotriz</h1>
        <nav className="header-nav">
          <a href="#galeria" className="nav-link">Galería</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-title {
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .header-nav {
          display: flex;
          gap: 2.5rem;
        }
        .nav-link {
          text-decoration: none;
          color: #000000;
          font-size: 0.9rem;
          font-weight: 400;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: opacity 0.3s ease;
        }
        .nav-link:hover {
          opacity: 0.6;
        }
        @media (max-width: 768px) {
          .header-container {
            padding: 1rem 1.5rem;
          }
          .header-title {
            font-size: 1.2rem;
          }
          .header-nav {
            gap: 1.5rem;
          }
          .nav-link {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  )
}

