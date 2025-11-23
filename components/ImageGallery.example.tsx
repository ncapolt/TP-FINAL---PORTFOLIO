'use client'

import Image from 'next/image'

// Ejemplo de cómo usar imágenes reales en lugar de placeholders
export default function ImageGallery() {
  // Array con las rutas de tus imágenes
  const images = [
    { src: '/images/foto1.jpg', alt: 'Automóvil deportivo' },
    { src: '/images/foto2.jpg', alt: 'Clásico restaurado' },
    { src: '/images/foto3.jpg', alt: 'Superdeportivo' },
    // Agrega más imágenes aquí
  ]

  return (
    <section id="galeria" className="gallery">
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="gallery-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .gallery {
          padding-top: 100px;
          padding-bottom: 80px;
        }
        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        .image-wrapper {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border: 1px solid #e0e0e0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .image-wrapper:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .gallery-image {
          width: 100%;
          height: 100%;
        }
        @media (max-width: 768px) {
          .gallery {
            padding-top: 80px;
            padding-bottom: 60px;
          }
          .gallery-container {
            padding: 0 1.5rem;
          }
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 2rem;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1025px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  )
}

