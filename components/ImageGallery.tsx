'use client'

export default function ImageGallery() {
  // Array de espacios para fotos - puedes reemplazar estos con tus imágenes
  const imageSpots = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <section id="galeria" className="gallery">
      <div className="gallery-container">
        <div className="gallery-grid">
          {imageSpots.map((spot) => (
            <div key={spot} className="image-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-text">Foto {spot}</span>
              </div>
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
        .image-placeholder {
          width: 100%;
          aspect-ratio: 4 / 3;
          background-color: #f5f5f5;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .image-placeholder:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .placeholder-content {
          text-align: center;
        }
        .placeholder-text {
          color: #999;
          font-size: 0.9rem;
          font-weight: 300;
          letter-spacing: 1px;
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

