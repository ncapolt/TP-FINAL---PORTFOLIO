'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface ImageLightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function ImageLightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev 
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen || !images[currentIndex]) return null

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {currentIndex > 0 && (
          <button className="lightbox-nav lightbox-prev" onClick={onPrev} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        <div className="lightbox-image-wrapper">
          <Image
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="lightbox-image"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {currentIndex < images.length - 1 && (
          <button className="lightbox-nav lightbox-next" onClick={onNext} aria-label="Siguiente">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        <div className="lightbox-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <style jsx>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.95);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .lightbox-container {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 1400px;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-image-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background-color 0.3s ease;
        }
        .lightbox-close:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          border: none;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background-color 0.3s ease;
        }
        .lightbox-nav:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .lightbox-prev {
          left: 1rem;
        }
        .lightbox-next {
          right: 1rem;
        }
        .lightbox-counter {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 0.9rem;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }
        @media (max-width: 768px) {
          .lightbox-overlay {
            padding: 1rem;
          }
          .lightbox-close {
            top: 0.5rem;
            right: 0.5rem;
            width: 40px;
            height: 40px;
          }
          .lightbox-nav {
            width: 44px;
            height: 44px;
          }
          .lightbox-prev {
            left: 0.5rem;
          }
          .lightbox-next {
            right: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}

