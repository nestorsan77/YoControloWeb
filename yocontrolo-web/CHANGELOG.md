# Historial de cambios

## 1.2.1 — 2026-09-28

### Cuentas centralizadas y automatización

- Publicado un artículo bilingüe sobre cómo reunir cuentas, tarjetas, efectivo y movimientos en una vista clara sin mezclar saldos ni conectar credenciales bancarias.
- Explicada la automatización de Apple Wallet con Atajos para registrar pagos compatibles sin introducirlos a mano, con sus límites de asignación por cuenta y privacidad.
- Incluida la nueva entrada en las pruebas de rutas y en la comprobación de sitemap.

## 1.2.0 — 2026-08-16

### Entrega independiente y verificable

- Separadas las auditorías de dependencias, las pruebas de calidad y la detección de secretos del despliegue.
- Añadidos smoke tests sobre la compilación real para rutas, idiomas, cookies, sitemap, robots, respuestas 404 y cabeceras de seguridad.
- Sustituido el generador externo que producía un sitemap vacío por las rutas SEO nativas de Next.js, incluyendo todos los artículos del blog.
- Unificados sitemap, robots, metadatos y verificación final bajo el dominio canónico `www.yocontrolo.net`.
- Añadido un despliegue por la API de Vercel que publica únicamente la revisión exacta aprobada por CI con un token restringido al proyecto web.
- Desactivados los despliegues Git automáticos de Vercel para impedir duplicados y evitar que se omita la puerta de calidad.
- Añadido Dependabot semanal para npm y GitHub Actions, agrupando parches y versiones menores.
- Fijadas las GitHub Actions por hash y Node.js 24 para reducir cambios imprevistos de la cadena de suministro.
- Documentados los secretos mínimos del proyecto web y su aislamiento respecto a la aplicación y al backend.
- Limitada la exposición de credenciales de Vercel a los pasos que las necesitan, sin acceso a la app ni descarga de variables, y validada la URL generada antes de reutilizarla.
- Reforzadas las exclusiones de `.env`, credenciales y metadatos locales de Vercel en todo el repositorio, manteniendo únicamente una plantilla pública sin valores.
- Añadida una política de comunicación responsable de vulnerabilidades.

### Seguridad HTTP

- Ocultada la cabecera identificativa de Next.js.
- Añadidas protecciones contra MIME sniffing, embedding en marcos y filtración innecesaria de referencias.
- Restringidos permisos del navegador no utilizados y aplicado HSTS al dominio y sus subdominios.

## 1.1.1 — 2026-08-16

### Selector de idioma móvil

- Sustituido el cambio de idioma directo por un desplegable que muestra Español y English.
- Añadida una indicación visual y accesible del idioma activo.
- Corregidos el centrado del icono, el código de idioma y la adaptación a pantallas estrechas.
- Añadidos cierre exterior, cierre con Escape y exclusión mutua con el menú principal.
- Ampliadas las pruebas de navegación para proteger la semántica y las opciones del selector.

## 1.1.0 — 2026-08-16

### Navegación e idiomas

- Añadido Inicio a la navegación para que la página principal `/` sea accesible desde cualquier sección.
- Rediseñado el menú móvil y aplicado formato de botón secundario al acceso “Entrar”.
- Añadido selector persistente ES/EN en escritorio y móvil.
- Detección inicial del idioma mediante las preferencias del navegador, con inglés como idioma alternativo para idiomas no soportados.
- Traducidas la portada, las páginas de producto, precios, proyecto, ayuda, blog, privacidad, términos, pie y experiencia de cookies.
- Añadidas pruebas de regresión para la navegación, la detección de idioma, el fallback inglés y el atributo `lang` del documento.

## 1.0.0 — 2026-08-16

### Nueva identidad pública

- Rediseño completo con el sistema visual Gato Custodio y la paleta oficial.
- Nuevos logotipo, marca circular e icono de aplicación en SVG.
- Experiencia responsive completa para móvil, tableta y escritorio.
- Modos claro y oscuro con preferencia persistente.

### Contenido y producto

- Nueva portada centrada en la organización de varias cuentas, los gastos recurrentes y los grupos.
- Páginas de producto, precios, contacto, historia y blog unificadas visualmente.
- Mensajes corregidos para explicar la arquitectura actual cliente-servidor sin prometer almacenamiento exclusivamente local.
- Planes todavía no disponibles identificados claramente como próximos.

### Privacidad y calidad

- Consentimiento granular antes de cargar Google Analytics.
- Políticas de privacidad y términos actualizados al funcionamiento real del servicio.
- Eliminación de la escena 3D anterior y sus dependencias para reducir peso y complejidad.
- Pruebas de regresión de marca, navegación, contenido y consentimiento.
- CI con Node.js 24, auditoría, lint, pruebas, compilación y Gitleaks sin licencia de organización.
