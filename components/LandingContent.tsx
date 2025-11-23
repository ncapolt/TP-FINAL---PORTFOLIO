'use client'

export default function LandingContent() {
  return (
    <div className="landing-content">
      <section id="sobre-mi" className="hero-section">
        <h1 className="hero-title">Hola! Soy Nico</h1>
        
        <div className="content-wrapper">
          <div className="text-content">
            <p className="intro-text">
              Tengo 17 años y soy un apasionado de los autos, la ingeniería y el diseño. 
              Vengo de una familia de fotógrafos y cineastas, lo que me llevó naturalmente 
              al mundo del carspotting. Empecé sacando fotos casuales de autos, 
              subiéndolas a TikTok, y luego comencé a usar una cámara Nikon para eventos 
              como Autoclásica en 2022.
            </p>
            <p className="intro-text">
              Desde entonces me dediqué exclusivamente a la fotografía de autos, 
              perfeccionando mis técnicas y habilidades de edición. Ahora trabajo con 
              concesionarios de alta gama y cubro diversos eventos automotrices como 
              Stance Society o RuteadasARG.
            </p>
          </div>
          
          <div className="image-placeholder">
            <div className="diagonal-line"></div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .landing-content {
          margin-left: 280px;
          min-height: 100vh;
          background-color: #ffffff;
        }
        .hero-section {
          padding: 4rem 4rem 4rem 6rem;
          max-width: 1400px;
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 3rem;
          line-height: 1.1;
        }
        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .text-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .intro-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333333;
          font-weight: 300;
        }
        .image-placeholder {
          width: 100%;
          aspect-ratio: 4 / 5;
          background-color: #e8e8e8;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }
        .diagonal-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #ff0000;
          top: 50%;
          left: 0;
          transform: translateY(-50%) rotate(-45deg);
          transform-origin: center;
        }
        @media (max-width: 1024px) {
          .landing-content {
            margin-left: 0;
          }
          .hero-section {
            padding: 2rem 2rem 2rem 2rem;
          }
          .hero-title {
            font-size: 3rem;
            margin-bottom: 2rem;
          }
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .image-placeholder {
            aspect-ratio: 16 / 9;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            padding: 1.5rem;
          }
          .hero-title {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }
          .intro-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

