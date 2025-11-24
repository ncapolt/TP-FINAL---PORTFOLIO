'use client'

import Image from 'next/image'

export default function LandingContent() {
  return (
    <div className="landing-content">
      <section id="sobre-mi" className="hero-section">
        <h1 className="hero-title">Hola! Soy Nico</h1>
        
        <div className="content-wrapper">
          <div className="text-content">
            <p className="intro-text">
            Bienvenido! Soy Nicolás, un chico de 17 años, que desde chico,  me apasionan puramente los autos, la ingenieria y el diseño. Siempre me gusto el tema de fotografia, ya que vengo de una familia donde mi padre es fotografo hace varios años, y mi hermana esta terminando la carrera de direccion de cine. Debido a esto, cuando surgio el termino de "carspotters", me quise sumar. Primero empece sacando fotos casuales a los autos que me cruzaba en el dia a dia, hasta que me surgio la idea de romper el hielo y subir mi primer tiktok. A este le fue bien, y con el tiempo segui subiendo mis fotos! De esta manera me gusta a veces remontar para atras para ver mi progreso. Luego, en 2022, decidi sacar fotos con la Nikon en Autoclasica. Esto marco un punto de ida, y desde ahi que me dedico exclusivamente a sacar las fotos con ella. Con el tiempo perfeccione tecnicas, aprendi a editar y a mejorar mis herramientas. 


            </p>
            <p className="intro-text">
            Hoy en dia, trabajo principalmente con consecionarias de alta gama, pero tambien hago cobertura en distintos eventos de autos, como en Stance Society o RuteadasARG. 
            </p>
          </div>
          
          <div className="image-container">
            <Image
              src="/images/hero-image.jpeg"
              alt="Nico - Fotografía Automotriz"
              width={600}
              height={750}
              className="hero-image"
              priority
              style={{
                objectFit: 'cover',
              }}
            />
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
        .image-container {
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          background-color: #e8e8e8;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
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
          .image-container {
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

