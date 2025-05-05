# ABBMX Freestyle - Landing Page

Este proyecto es una landing page divertida y juvenil para una escuela de BMX Freestyle, desarrollada con Next.js y Tailwind CSS.

## Características

- Diseño responsive y mobile-first orientado a niños y adolescentes
- Estilo casual y divertido con colores vibrantes
- Secciones: Hero con video, Horarios, Galería, Testimonios, Mapa y Contacto
- Animaciones al hacer scroll
- Integración con Google Maps
- Formulario de inscripción
- Botón de WhatsApp flotante
- SEO básico

## Tecnologías utilizadas

- Next.js 14
- React
- Tailwind CSS
- Shadcn/UI (componentes)
- Lucide React (iconos)

## Requisitos previos

- Node.js 18.0 o superior
- npm o yarn

## Instalación

1. Clona este repositorio:
\`\`\`bash
git clone https://github.com/tu-usuario/abbmx-freestyle-landing.git
cd abbmx-freestyle-landing
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
# o
yarn install
\`\`\`

3. Crea un archivo `.env.local` en la raíz del proyecto y añade tu API key de Google Maps:
\`\`\`
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aquí
\`\`\`

4. Inicia el servidor de desarrollo:
\`\`\`bash
npm run dev
# o
yarn dev
\`\`\`

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Despliegue

Para desplegar la aplicación en producción:

1. Construye la aplicación:
\`\`\`bash
npm run build
# o
yarn build
\`\`\`

2. Inicia el servidor de producción:
\`\`\`bash
npm start
# o
yarn start
\`\`\`

También puedes desplegar fácilmente en Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftu-usuario%2Fabbmx-freestyle-landing)

## Personalización

- Modifica los colores en `tailwind.config.js`
- Actualiza el contenido en `app/page.tsx`
- Añade tus propias imágenes en la carpeta `public/images`
- Personaliza los componentes en la carpeta `components`

## Licencia

Este proyecto está bajo la Licencia MIT.
