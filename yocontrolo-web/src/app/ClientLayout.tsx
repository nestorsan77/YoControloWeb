"use client"

import NavMenu from '@/app/components/NavMenu'
import React, { useEffect } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
useEffect(() => {
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(/theme=(dark|light)/);
    if (match) {
      document.documentElement.classList.toggle('dark', match[1] === 'dark');
    }else{
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }
}, []);

  return (
    <>

      <NavMenu />      
      <main className="pt-24" role="main" aria-label="Contenido principal">
        <div className="">{children}</div>
      </main>

      <footer className="w-full bg-gray-50 dark:bg-[var(--bg)] border-t border-gray-200 dark:border-gray-700 mt-16 transition-colors duration-500" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-500">
            &copy; {new Date().getFullYear()} YoControlo. Todos los derechos reservados.
          </p>
          <nav aria-label="Enlaces legales">
            <ul className="flex gap-4">
              <li>
                <a href="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-500 transition">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-500 transition">
                  Términos de uso
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}
