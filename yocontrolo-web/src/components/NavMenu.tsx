'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home,  ShoppingBag, Moon, Sun, Wallet, BookOpen } from 'lucide-react';
import Hamburger from './Hamburger';
import Image from 'next/image';

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Precios', href: '/precios', icon: ShoppingBag },
    { name: 'GestionFinanzasPersonales', href: '/gestion-finanzas-personales', icon: Wallet },
    { name: 'Contacto', href: '/contacto', icon: BookOpen },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros', icon: BookOpen },
    { name: 'Blog', href: '/blog', icon: BookOpen },
  ];

  // Detecta modo oscuro
  const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

const toggleTheme = () => {
  if (typeof document !== 'undefined') {
    const html = document.documentElement;
    html.classList.toggle('dark');

    const theme = html.classList.contains('dark') ? 'dark' : 'light';

    // Guardar en localStorage (opcional)
    localStorage.setItem('theme', theme);

    // Guardar en cookie por 10 años
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 10);
    document.cookie = `theme=${theme}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  }
};


  return (
    <header>
      <nav
        aria-label="Menú principal"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--background)]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" aria-label="Ir a inicio" className="flex-shrink-0 flex items-center">
              <Image src="/images/dinero.png" alt="Logo YoControlo" width={32} height={32} className="h-8 w-8 mr-2" />
              <h1 className="text-2xl font-bold gradient-text">YoControlo</h1>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex ml-10 space-x-8">
              {menuItems.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <Link
                    href={href}
                    title={name}
                    className="group flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-[var(--foreground)] hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle + Hamburger */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                aria-label="Cambiar tema"
                className="p-2 rounded-lg transition-all duration-200 text-[var(--foreground)] hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-104 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-[var(--background)]`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
            {menuItems.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <Link
                  href={href}
                  title={name}
                  className="group flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium text-[var(--foreground)] hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;
