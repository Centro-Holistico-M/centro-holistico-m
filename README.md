# Centro Holístico M

Aplicación web para Centro Holístico M, construida con React y Vite. Lista para despliegue en Vercel.

## Instalación y Desarrollo Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   Esto iniciará el servidor de desarrollo local de Vite.

3. **Construir para producción (Build):**
   ```bash
   npm run build
   ```
   Los archivos estáticos generados se guardarán en la carpeta `dist/`.

## Despliegue en Vercel

Este proyecto está configurado para un despliegue automático fluido en Vercel a través de GitHub.

### Pasos para desplegar:
1. Asegúrate de hacer commit e impulsar (push) todos los cambios a tu repositorio en GitHub: `https://github.com/Centro-Holistico-M/centro-holistico-m`.
2. En el panel de Vercel, importa tu repositorio de GitHub.
3. Vercel detectará que es un proyecto de Vite y configurará automáticamente:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Haz clic en "Deploy". Vercel instalará las dependencias de forma segura e iniciará la construcción. Cualquier nuevo "push" a la rama `main` de GitHub actualizará el sitio de producción automáticamente.
