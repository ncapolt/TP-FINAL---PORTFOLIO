'use client'

import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import LandingContent from '@/components/LandingContent'
import ImageGallery from '@/components/ImageGallery'
import ServicesConcesionarias from '@/components/ServicesConcesionarias'
import CoberturaEventos from '@/components/CoberturaEventos'
import Contacto from '@/components/Contacto'

export default function Home() {
  const [activeSection, setActiveSection] = useState('sobre-mi')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'sobre-mi'
      setActiveSection(hash)
    }

    // Verificar hash inicial
    handleHashChange()

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case 'galeria':
        return <ImageGallery />
      case 'servicios-concesionarias':
        return <ServicesConcesionarias />
      case 'cobertura-eventos':
        return <CoberturaEventos />
      case 'contacto':
        return <Contacto />
      default:
        return <LandingContent />
    }
  }

  return (
    <main>
      <Sidebar />
      {renderContent()}
    </main>
  )
}
