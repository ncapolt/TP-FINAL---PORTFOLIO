'use client'

export default function Contacto() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-main-title">Contacto</h1>
        
        <p className="contact-intro">
          ¿Interesado en trabajar juntos? Estoy disponible para proyectos de fotografía automotriz, 
          cobertura de eventos y servicios para concesionarias. Contáctame y conversemos sobre tu proyecto.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-subtitle">Información de Contacto</h2>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Email</h3>
                <a href="mailto:nicolowtanne@gmail.com" className="contact-link">nicolowtanne@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-label">WhatsApp</h3>
                <a href="https://wa.me/5491160031958" target="_blank" rel="noopener noreferrer" className="contact-link">
                  +54 9 11 6003-1958
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2v4M6 6h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Redes Sociales</h3>
                <div className="social-contact-links">
                  <a 
                    href="https://instagram.com/nicoph__" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-contact-link"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.tiktok.com/@nicoph__" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-contact-link"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-message">
            <h2 className="contact-subtitle">Envíame un mensaje</h2>
            <p className="contact-text">
              Prefieres escribir directamente? Puedes contactarme a través de cualquiera de los medios 
              mencionados arriba. Estoy disponible para responder consultas sobre proyectos, presupuestos 
              y disponibilidad.
            </p>
            <p className="contact-text">
              Trabajo principalmente con concesionarias de alta gama y cobertura de eventos automotrices, 
              pero estoy abierto a escuchar propuestas de otros proyectos relacionados con fotografía automotriz.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-section {
          margin-left: 280px;
          min-height: 100vh;
          background-color: #ffffff;
          padding: 4rem 4rem 4rem 6rem;
        }
        .contact-container {
          max-width: 1400px;
        }
        .contact-main-title {
          font-size: 3rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        .contact-intro {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333333;
          font-weight: 300;
          max-width: 800px;
          margin-bottom: 4rem;
        }
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .contact-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: #000000;
          margin-bottom: 2rem;
        }
        .contact-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .contact-icon {
          color: #000000;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        .contact-details {
          flex: 1;
        }
        .contact-label {
          font-size: 0.9rem;
          font-weight: 400;
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        .contact-link {
          font-size: 1.1rem;
          color: #000000;
          text-decoration: none;
          transition: opacity 0.3s ease;
          display: inline-block;
        }
        .contact-link:hover {
          opacity: 0.6;
        }
        .social-contact-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .social-contact-link {
          font-size: 1.1rem;
          color: #000000;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }
        .social-contact-link:hover {
          opacity: 0.6;
        }
        .contact-message {
          padding-top: 0;
        }
        .contact-text {
          font-size: 1rem;
          line-height: 1.8;
          color: #333333;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }
        .contact-text:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 1024px) {
          .contact-section {
            margin-left: 0;
            padding: 2rem;
          }
          .contact-main-title {
            font-size: 2.5rem;
          }
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-intro {
            margin-bottom: 3rem;
          }
        }
        @media (max-width: 768px) {
          .contact-section {
            padding: 1.5rem;
          }
          .contact-main-title {
            font-size: 2rem;
          }
          .contact-subtitle {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
          }
          .contact-item {
            gap: 1rem;
          }
          .contact-info {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

