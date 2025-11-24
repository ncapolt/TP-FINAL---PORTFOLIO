'use client'

import { Slider } from './ImageGallery'

export default function ServicesConcesionarias() {
  // Datos de las concesionarias
  const dealerships = [
    {
      name: 'CH MOTORS',
      images: [
        '/images/ch-motors-1.jpg',
        '/images/ch-motors-2.jpg',
        '/images/ch-motors-3.jpg',
        '/images/ch-motors-5.jpg',
        '/images/ch-motors-6.jpg',
        '/images/ch-motors-7.jpg',
        '/images/ch-motors-8.jpg',
        '/images/ch-motors-9.jpg',
      ]
    },
    {
      name: 'Ve.Doce',
      images: [
        // Agrega las imágenes de Ve.Doce aquí cuando las tengas
        // '/images/vedoce-1.jpg',
        // '/images/vedoce-2.jpg',
      ]
    }
  ]

  return (
    <section id="servicios-concesionarias" className="services-section">
      <div className="services-container">
        <h1 className="services-main-title">
          Mis Servicios: <span className="services-subtitle">SERVICIOS PARA CONSECIONARIAS</span>
        </h1>
        
        <p className="services-description">
          Cada concesionaria necesita destacarse. Mis producciones visuales convierten autos premium en protagonistas, 
          generando contenido que impulsa ventas, mejora presencia digital y refuerza la identidad de marca. 
          No es solo fotografía: es una herramienta de marketing visual pensada para el segmento de lujo.
        </p>

        {dealerships.map((dealership, index) => (
          <div key={index} className="dealership-section">
            <h2 className="dealership-title">Consecionarias: {dealership.name}</h2>
            {dealership.images.length > 0 ? (
              <Slider images={dealership.images} />
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
        .dealership-section {
          margin-bottom: 4rem;
        }
        .dealership-section:last-child {
          margin-bottom: 0;
        }
        .dealership-title {
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
          .dealership-section {
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  )
}

