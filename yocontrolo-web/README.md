# YoControlo Web

Sitio público de YoControlo. Presenta el producto, sus funciones y condiciones sin incluir la aplicación financiera autenticada.

## Identidad visual

La versión 1.0.0 estrena el sistema **Gato Custodio**:

- tinta `#17212B`
- menta `#58C6A5`
- oro `#F2B84B`
- coral `#EF786A`
- crema `#F7F3EA`

Los SVG de marca viven en `public/brand/`. La web incluye modos claro y oscuro, navegación responsive, preferencias de movimiento reducido y experiencia de cookies accesible.

## Idiomas

La interfaz pública está disponible en español e inglés. En la primera visita, el servidor utiliza `Accept-Language` para elegir español cuando el navegador prefiere `es` e inglés cuando prefiere `en`. Cualquier idioma no soportado utiliza inglés como alternativa segura.

El desplegable de idiomas del encabezado muestra todas las opciones disponibles, identifica el idioma activo y guarda la elección durante un año en la cookie esencial `yocontrolo-locale`. La cookie elegida siempre prevalece sobre el idioma del navegador y se aplica también al contenido, metadatos, páginas legales y preferencias de cookies.

## Rutas

- `/`: presentación y propuesta de valor
- `/gestion-finanzas-personales`: funciones actuales del producto
- `/precios`: disponibilidad real de los planes
- `/sobre-nosotros`: historia y principios
- `/blog` y `/blog/[slug]`: contenidos
- `/contacto`: soporte, privacidad y seguridad
- `/privacy` y `/terms`: información legal

Los botones de acceso y registro llevan a `https://app.yocontrolo.net`.

## Desarrollo local

Requiere Node.js 24 y npm.

```bash
npm ci
npm run dev
```

La web queda disponible en [http://localhost:3000](http://localhost:3000).

## Verificación

```bash
npm test
npm run lint
npm run build
npm run test:smoke
```

`npm test` protege la paleta, activos de marca, navegación, detección ES/EN con fallback inglés, contenido coherente con la arquitectura cliente-servidor, carga de analítica condicionada al consentimiento y la configuración de entrega. `npm run test:smoke` levanta la compilación real y recorre las rutas, idiomas, cookies, SEO nativo de Next.js, respuestas 404 y cabeceras de seguridad.

## CI/CD y Vercel

La web pública se mantiene aislada de la aplicación autenticada:

- repositorio: `YoControloWeb`;
- proyecto y variables propios en Vercel;
- dominio público canónico: `www.yocontrolo.net` (`yocontrolo.net` redirige a él);
- la app continúa en `app.yocontrolo.net` y no comparte este despliegue.

Cada pull request y cada cambio en `main` pasan tres capas independientes: auditoría npm, tests/lint/build/smoke y Gitleaks. El job `Release gate` es el único check que debe configurarse como obligatorio en la protección de `main`.

Los despliegues automáticos de la integración Git de Vercel están desactivados en `vercel.json`. Cuando el CI de un `push` a `main` termina correctamente, GitHub Actions:

1. recupera únicamente la revisión aprobada;
2. solicita a la API de Vercel que construya exactamente ese commit con la configuración de producción del proyecto web;
3. espera a que el despliegue termine correctamente;
4. ejecuta smoke tests contra la URL inmutable generada;
5. vuelve a verificar `www.yocontrolo.net`.

El entorno `Production` del repositorio de la web necesita exclusivamente estos secretos:

- `VERCEL_TOKEN`: token personal con lectura y despliegue limitado exclusivamente al proyecto web;
- `VERCEL_ORG_ID`: identificador de esa cuenta o equipo;
- `VERCEL_PROJECT_ID`: identificador del proyecto Vercel de la web pública.

No se deben copiar a este repositorio secretos del backend, Firebase Admin, bases de datos ni de la aplicación. Las variables públicas o de compilación, como `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`, permanecen en el proyecto web de Vercel y se inyectan allí durante su propia construcción.

`.env.local`, cualquier variante `.env.*` y la carpeta `.vercel/` están excluidos tanto en la raíz como en la aplicación. Solo `.env.example`, sin valores sensibles, se mantiene como referencia. `VERCEL_TOKEN` nunca debe incluirse en un archivo versionado ni utilizar el prefijo `NEXT_PUBLIC_`.

Configuración inicial en GitHub:

1. En **Settings → Environments**, utiliza `Production` y añade los tres secretos anteriores. El entorno solo permite despliegues desde `main`; también es recomendable exigir aprobación manual si el plan de GitHub lo permite.
2. En la protección o ruleset de `main`, exige pull request y el check **Release gate** antes de integrar cambios.
3. En **Settings → Code security**, activa Dependabot alerts y Dependabot security updates.
4. Mantén las variables de compilación en **Vercel → proyecto de la web → Settings → Environment Variables**, nunca en los archivos del repositorio.

`VERCEL_ORG_ID` y `VERCEL_PROJECT_ID` aparecen en los metadatos locales de `.vercel/` después de enlazar el repositorio con `vercel link`; esa carpeta permanece ignorada y no debe subirse. El token se crea en los ajustes de cuenta de Vercel y debe limitar sus recursos al proyecto `yo-controlo-web`. El CD usa directamente la API de despliegues para conservar ese mínimo privilegio; no necesita acceso al proyecto de la aplicación ni descargar sus variables.

Dependabot revisa semanalmente npm y GitHub Actions. Las versiones menores y parches se agrupan; las versiones mayores quedan en pull requests separadas para poder evaluar migraciones incompatibles. También deben estar habilitados en GitHub los avisos y las actualizaciones de seguridad de Dependabot.

## Privacidad y analítica

Google Analytics solo se carga tras consentimiento explícito. La preferencia se puede revisar desde el botón de cookies. Los textos legales describen el funcionamiento actual con autenticación, API y almacenamiento en servidor; deben someterse a revisión jurídica antes de una publicación comercial definitiva.

## Versión

Versión actual: **1.2.0**. Consulta [CHANGELOG.md](./CHANGELOG.md) para conocer el alcance del rediseño.
