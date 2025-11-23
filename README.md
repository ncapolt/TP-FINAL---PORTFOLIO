# Portfolio - Fotografía Automotriz

Portfolio profesional para mostrar trabajos de fotografía automotriz.

## 🚀 Características

- Diseño minimalista y elegante
- Totalmente responsive
- Optimizado para Vercel
- Fácil de personalizar

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🖼️ Agregar tus fotos

Para agregar tus propias fotos:

1. Coloca tus imágenes en la carpeta `public/images/`
2. Edita el archivo `components/ImageGallery.tsx`
3. Reemplaza los placeholders con tus imágenes usando el componente `Image` de Next.js:

```tsx
import Image from 'next/image'

// En lugar del placeholder:
<Image 
  src="/images/tu-foto.jpg" 
  alt="Descripción"
  width={400}
  height={300}
  className="gallery-image"
/>
```

## 🌐 Despliegue en Vercel

1. Asegúrate de tener tu proyecto en GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Haz clic en "Deploy"

¡Listo! Tu portfolio estará en línea en minutos.

## 📝 Personalización

- **Colores y estilos**: Edita los archivos de componentes para cambiar los estilos
- **Información de contacto**: Actualiza `components/Footer.tsx` con tu información
- **Título y metadata**: Modifica `app/layout.tsx`

## 🛠️ Tecnologías

- Next.js 14
- React 18
- TypeScript
- CSS-in-JS (styled-jsx)

## 📄 Licencia

MIT

