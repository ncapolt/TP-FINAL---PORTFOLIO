'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Sidebar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
      if (window.innerWidth > 1024) {
        setMenuOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleNavClick = () => {
    if (isMobile) {
      setMenuOpen(false)
    }
  }

  return (
    <>
      {isMobile && (
        <>
          <button 
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
          {menuOpen && (
            <div 
              className="mobile-overlay"
              onClick={() => setMenuOpen(false)}
            />
          )}
        </>
      )}
      <aside className={`sidebar ${isMobile && !menuOpen ? 'sidebar-hidden' : ''}`}>
      <div className="sidebar-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <Image
              src="/images/profile.jpeg"
              alt="Nico - Fotografía Automotriz"
              width={180}
              height={180}
              className="profile-image"
              priority
              onError={() => setImageError(true)}
            />
            {imageError && (
              <div className="profile-placeholder">N</div>
            )}
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#sobre-mi" className="nav-item" onClick={handleNavClick}>SOBRE MI</a>
          <a href="#galeria" className="nav-item" onClick={handleNavClick}>GALERIA</a>
          <div className="nav-item-wrapper">
            <button 
              className="nav-item nav-item-button"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              SERVICIOS {servicesOpen ? '−' : '+'}
            </button>
            {servicesOpen && (
              <div className="dropdown-menu">
                <a 
                  href="#cobertura-eventos" 
                  className="dropdown-item"
                  onClick={() => {
                    setServicesOpen(false)
                    handleNavClick()
                  }}
                >
                  Cobertura en eventos
                </a>
                <a 
                  href="#servicios-concesionarias" 
                  className="dropdown-item"
                  onClick={() => {
                    setServicesOpen(false)
                    handleNavClick()
                  }}
                >
                  Servicios para concesionarias
                </a>
              </div>
            )}
          </div>
          <a href="#contacto" className="nav-item" onClick={handleNavClick}>CONTACTO</a>
        </nav>

        <div className="social-links">
          <a 
            href="https://instagram.com/nicoph__" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
            </svg>
          </a>
          <a 
            href="https://wa.me/5491160031958" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
            </svg>
          </a>
          <a 
            href="https://www.tiktok.com/@nicoph__" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="TikTok"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
      <style jsx>{`
        .mobile-menu-button {
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 1001;
          background-color: #2a2a2a;
          color: #ffffff;
          border: none;
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .mobile-menu-button:hover {
          background-color: #3a3a3a;
        }
        .mobile-menu-button:active {
          transform: scale(0.95);
        }
        .mobile-menu-button svg {
          width: 28px;
          height: 28px;
        }
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 99;
        }
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          width: 280px;
          height: 100vh;
          background-color: #2a2a2a;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 2rem;
          z-index: 100;
          transition: transform 0.3s ease;
        }
        .sidebar-hidden {
          transform: translateX(-100%);
        }
        .sidebar-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          justify-content: space-between;
        }
        .profile-section {
          margin-top: 2rem;
        }
        .profile-image-container {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Ajusta la posición: valores más altos (60-70%) muestran más de la parte inferior dentro del círculo */
          object-position: center 65%;
        }
        .profile-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #3a3a3a;
          color: #ffffff;
          font-size: 4rem;
          font-weight: 300;
          z-index: 1;
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 3rem;
        }
        .nav-item {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: opacity 0.3s ease;
          text-align: center;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
        }
        .nav-item:hover {
          opacity: 0.7;
        }
        .nav-item-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .nav-item-button {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dropdown-menu {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: slideDown 0.3s ease-out;
          width: 100%;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .dropdown-item {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 300;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.5rem 1rem;
          text-align: center;
          transition: all 0.3s ease;
          opacity: 0.9;
          border-left: 2px solid transparent;
        }
        .dropdown-item:hover {
          opacity: 1;
          border-left-color: #ffffff;
          padding-left: 1.5rem;
        }
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: auto;
          padding-bottom: 2rem;
        }
        .social-icon {
          color: #ffffff;
          transition: opacity 0.3s ease;
        }
        .social-icon:hover {
          opacity: 0.7;
        }
        @media (max-width: 1024px) {
          .mobile-menu-button {
            display: flex;
          }
          .sidebar {
            width: 280px;
            height: 100vh;
            position: fixed;
            padding: 3rem 2rem;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
          }
          .sidebar-content {
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }
          .profile-section {
            margin-top: 2rem;
          }
          .profile-image-container {
            width: 120px;
            height: 120px;
          }
          .sidebar-nav {
            flex-direction: column;
            gap: 2rem;
            margin-top: 3rem;
            width: 100%;
          }
          .nav-item {
            font-size: 0.9rem;
            text-align: center;
          }
          .nav-item-wrapper {
            position: relative;
            width: 100%;
          }
          .dropdown-menu {
            position: static;
            transform: none;
            margin-top: 1rem;
            background-color: rgba(0, 0, 0, 0.2);
            padding: 1rem;
            border-radius: 4px;
            width: 100%;
            box-shadow: none;
          }
          .social-links {
            flex-direction: column;
            margin-top: auto;
            padding-bottom: 2rem;
            gap: 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .mobile-menu-button {
            width: 56px;
            height: 56px;
            top: 0.75rem;
            left: 0.75rem;
          }
          .mobile-menu-button svg {
            width: 28px;
            height: 28px;
          }
          .sidebar {
            width: 100%;
            padding: 2rem 1.5rem;
          }
          .profile-image-container {
            width: 100px;
            height: 100px;
          }
          .sidebar-nav {
            gap: 1.5rem;
          }
          .nav-item {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </aside>
    </>
  )
}

