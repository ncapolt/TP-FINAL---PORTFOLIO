'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface GallerySection {
  title: string
  images: string[]
}

interface SliderProps {
  images: string[]
}

export function Slider({ images }: SliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canGoPrev, setCanGoPrev] = useState(false)
  const [canGoNext, setCanGoNext] = useState(true)

  const updateButtons = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const { scrollLeft, scrollWidth, clientWidth } = container
      setCanGoPrev(scrollLeft > 10)
      setCanGoNext(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const getImageWidth = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const firstImage = container.querySelector('.slider-image-wrapper') as HTMLElement
      if (firstImage) {
        return firstImage.offsetWidth + 24 // width + gap
      }
    }
    return 400 // fallback
  }

  const nextSlide = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = getImageWidth() * 3 // Avanzar 3 imágenes
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const prevSlide = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = getImageWidth() * 3 // Retroceder 3 imágenes
      
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    updateButtons()
    const timer = setTimeout(updateButtons, 100)
    return () => clearTimeout(timer)
  }, [images])

  return (
    <div className="slider-container">
      {canGoPrev && (
        <button className="slider-arrow slider-arrow-left" onClick={prevSlide} aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      <div 
        className="slider-wrapper" 
        ref={scrollContainerRef}
        onScroll={updateButtons}
      >
        <div className="slider-track">
          {images.map((image, index) => (
            <div key={index} className="slider-image-wrapper">
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                width={400}
                height={300}
                className="slider-image"
                onError={(e) => {
                  // Si la imagen no existe, mostrar placeholder
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = '<div class="image-placeholder-fallback">Foto</div>'
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {canGoNext && (
        <button className="slider-arrow slider-arrow-right" onClick={nextSlide} aria-label="Siguiente">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      <style jsx>{`
        .slider-container {
          position: relative;
          width: 100%;
          margin-top: 1.5rem;
        }
        .slider-wrapper {
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .slider-wrapper::-webkit-scrollbar {
          display: none;
        }
        .slider-track {
          display: flex;
          gap: 1.5rem;
          padding: 0 1rem;
        }
        .slider-image-wrapper {
          flex: 0 0 calc(33.333% - 1rem);
          min-width: 300px;
          background-color: #e8e8e8;
          border-radius: 8px;
          overflow: visible;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .slider-image {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: contain;
          object-position: center center;
          background-color: #f5f5f5;
          border-radius: 8px;
        }
        .image-placeholder-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #e8e8e8;
          color: #999;
          font-size: 0.9rem;
        }
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background-color 0.3s ease;
        }
        .slider-arrow:hover {
          background-color: rgba(0, 0, 0, 0.9);
        }
        .slider-arrow-left {
          left: 0;
        }
        .slider-arrow-right {
          right: 0;
        }
        @media (max-width: 768px) {
          .slider-image-wrapper {
            flex: 0 0 calc(50% - 0.75rem);
            min-width: 250px;
          }
          .slider-arrow {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </div>
  )
}

export default function ImageGallery() {
  // Datos de ejemplo - reemplaza con tus imágenes reales
  const gallerySections: GallerySection[] = [
    {
      title: 'Consecionarias: CH MOTORS',
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
       title: 'Eventos: Turismo Carretera (galvez 2022)',
       images: [
      '/images/turismo-1.jpeg',
      '/images/turismo-2.jpeg',
      '/images/turismo-3.jpeg',
      '/images/turismo-4.jpeg',
      '/images/turismo-5.jpeg',
      ]
     },
     {
       title: 'Eventos: Ruteada del MAL',
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
    <section id="galeria" className="gallery">
      <div className="gallery-container">
        {gallerySections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="gallery-section">
            <h2 className="section-title">{section.title}</h2>
            <Slider images={section.images} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .gallery {
          margin-left: 280px;
          min-height: 100vh;
          background-color: #ffffff;
          padding: 4rem 4rem 4rem 6rem;
        }
        .gallery-container {
          max-width: 1400px;
        }
        .gallery-section {
          margin-bottom: 4rem;
        }
        .gallery-section:last-child {
          margin-bottom: 0;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #000000;
          margin-bottom: 1rem;
        }
        @media (max-width: 1024px) {
          .gallery {
            margin-left: 0;
            padding: 2rem;
          }
          .section-title {
            font-size: 1.3rem;
          }
        }
        @media (max-width: 768px) {
          .gallery {
            padding: 1.5rem;
          }
          .gallery-section {
            margin-bottom: 3rem;
          }
          .section-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}
