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

### Opción 1: Desde GitHub (Recomendado)

1. **Asegúrate de tener tu proyecto en GitHub:**
   ```bash
   git add .
   git commit -m "Preparado para Vercel"
   git push origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub
   - Haz clic en "Add New Project"
   - Selecciona tu repositorio `TP-FINAL---PORTFOLIO`
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Revisa la configuración (debería detectar automáticamente):
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`
   - Haz clic en "Deploy"

3. **¡Listo!** Tu portfolio estará en línea en minutos. Vercel te dará una URL única.

### Opción 2: Usando Vercel CLI

1. **Instala Vercel CLI globalmente:**
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión en Vercel:**
   ```bash
   vercel login
   ```

3. **Despliega el proyecto:**
   ```bash
   vercel
   ```
   - Sigue las instrucciones en la terminal
   - Para producción, ejecuta: `vercel --prod`

### Opción 3: Desde la interfaz web (sin GitHub)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "Add New Project"
3. Selecciona "Import Git Repository" o "Upload" si prefieres subir el código directamente
4. Sigue los pasos de configuración

### Configuración automática

El proyecto ya incluye `vercel.json` con la configuración optimizada:
- Framework: Next.js
- Región: iad1 (US East)
- Comandos de build y desarrollo configurados

### Variables de entorno (si las necesitas)

Si tu proyecto requiere variables de entorno:
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega las variables necesarias
4. Vuelve a desplegar

### Actualizaciones automáticas

Si conectaste desde GitHub, cada push a `main` desplegará automáticamente una nueva versión.

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

