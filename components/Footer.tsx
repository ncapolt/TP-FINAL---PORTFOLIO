export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section id="sobre" className="about-section">
          <h2 className="section-title">Sobre</h2>
          <p className="section-text">
            Especializado en capturar la esencia y la belleza de los automóviles.
            Cada fotografía cuenta una historia única de diseño, potencia y elegancia.
          </p>
        </section>
        <section id="contacto" className="contact-section">
          <h2 className="section-title">Contacto</h2>
          <p className="section-text">
            ¿Interesado en una sesión? Contáctame para más información.
          </p>
          <div className="contact-info">
            <a href="mailto:tu@email.com" className="contact-link">tu@email.com</a>
            <a href="https://instagram.com/tuinstagram" className="contact-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </section>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fotografía Automotriz. Todos los derechos reservados.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #fafafa;
          border-top: 1px solid #e0e0e0;
          padding: 4rem 0 2rem;
        }
        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .about-section,
        .contact-section {
          margin-bottom: 3rem;
        }
        .section-title {
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .section-text {
          font-size: 1rem;
          line-height: 1.8;
          color: #666;
          max-width: 600px;
          margin-bottom: 1rem;
        }
        .contact-info {
          display: flex;
          gap: 2rem;
          margin-top: 1rem;
        }
        .contact-link {
          color: #000;
          text-decoration: none;
          font-size: 0.95rem;
          transition: opacity 0.3s ease;
        }
        .contact-link:hover {
          opacity: 0.6;
        }
        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #e0e0e0;
          text-align: center;
        }
        .footer-bottom p {
          font-size: 0.85rem;
          color: #999;
        }
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }
          .footer-container {
            padding: 0 1.5rem;
          }
          .contact-info {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  )
}

