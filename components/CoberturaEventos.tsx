'use client'

import { Slider } from './ImageGallery'

export default function CoberturaEventos() {
  // Datos de los eventos
  const eventos = [
    {
      name: 'Autoclasica',
      images: [
        // Agrega aquí las rutas de tus imágenes de Autoclasica
        // Ejemplo:
       '/images/autoclasica-1.jpg',
         '/images/autoclasica-2.jpg',
         '/images/autoclasica-3.jpg',
         '/images/autoclasica-4.jpg',
         '/images/autoclasica-5.jpg',
         '/images/autoclasica-6.jpg',
      ]
    },
    {
      name: 'Ruteada del MAL',
      images: [
        '/images/ruteada-1.jpg',
        '/images/ruteada-2.jpg',
        '/images/ruteada-3.jpg',
        '/images/ruteada-4.jpg',
        '/images/ruteada-5.jpg',
        '/images/ruteada-6.jpg',
        '/images/ruteada-7.jpg',
      ]
    }
  ]

  return (
    <section id="cobertura-eventos" className="services-section">
      <div className="services-container">
        <h1 className="services-main-title">
          Mis Servicios: <span className="services-subtitle">COBERTURA EN EVENTOS</span>
        </h1>
        
        <p className="services-description">
          Cada evento automotriz es una oportunidad para mostrar una marca en acción. Mi trabajo combina estética, 
          timing y narrativa visual para capturar la esencia del momento: la pasión por los autos, la energía del 
          público y la presencia de las marcas. Ofrezco cobertura profesional pensada para generar contenido que 
          destaque en redes, potencie la comunicación post-evento y proyecte la imagen premium que las empresas 
          del sector necesitan.
        </p>

        {eventos.map((evento, index) => (
          <div key={index} className="event-section">
            <h2 className="event-title">Eventos: {evento.name}</h2>
            {evento.images.length > 0 ? (
              <Slider images={evento.images} />
            ) : (
              <div className="no-images-message">
                <p>Imágenes próximamente</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .services-section {
          margin-left: 280px;
          min-height: 100vh;
          background-color: #ffffff;
          padding: 4rem 4rem 4rem 6rem;
        }
        .services-container {
          max-width: 1400px;
        }
        .services-main-title {
          font-size: 2rem;
          font-weight: 400;
          color: #000000;
          margin-bottom: 2rem;
          line-height: 1.3;
        }
        .services-subtitle {
          font-size: 2.5rem;
          font-weight: 700;
          text-transform: uppercase;
          display: block;
          margin-top: 0.5rem;
        }
        .services-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333333;
          font-weight: 300;
          max-width: 900px;
          margin-bottom: 4rem;
        }
        .event-section {
          margin-bottom: 4rem;
        }
        .event-section:last-child {
          margin-bottom: 0;
        }
        .event-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #000000;
          margin-bottom: 1.5rem;
        }
        .no-images-message {
          padding: 3rem;
          text-align: center;
          color: #999;
          font-style: italic;
        }
        @media (max-width: 1024px) {
          .services-section {
            margin-left: 0;
            padding: 2rem;
          }
          .services-main-title {
            font-size: 1.5rem;
          }
          .services-subtitle {
            font-size: 2rem;
          }
          .services-description {
            font-size: 1rem;
            margin-bottom: 3rem;
          }
        }
        @media (max-width: 768px) {
          .services-section {
            padding: 1.5rem;
          }
          .services-main-title {
            font-size: 1.3rem;
          }
          .services-subtitle {
            font-size: 1.6rem;
          }
          .event-section {
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  )
}

