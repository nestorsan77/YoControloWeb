import Link from 'next/link';
import './globals.css';

export default function GlobalNotFound() {
  return <html lang="es"><body><main className="yc-page-body"><h1>Página no encontrada</h1><p>Esta dirección no existe en YoControlo.</p><Link href="/">Volver al inicio</Link></main></body></html>;
}
