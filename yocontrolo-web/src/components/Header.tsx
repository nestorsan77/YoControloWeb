'use client';

import React from 'react';
import CTAButton from './CTAButtons';

const Header: React.FC = () => {
  return (
    <header className="pt-24 pb-20 px-4 transition-all duration-300 relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="sr-only">Aplicación de finanzas personales</span>
            Bienvenido a{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
              YoControlo
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            La aplicación de finanzas personales que te ayuda a{' '}
            <strong>gestionar tus gastos e ingresos</strong>, controlar{' '}
            <strong>pagos recurrentes</strong>, analizar tu{' '}
            <strong>ahorro con gráficos</strong> y mantener tu{' '}
            <strong>tranquilidad financiera</strong>. Todo con un diseño moderno,
            seguro y fácil de usar.
          </p>
        </div>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton text="Comenzar Gratis" href="/registro" variant="primary" />
          <CTAButton text="Ver Funcionalidades" href="/caracteristicas" variant="secondary" />
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
    </header>
  );
};

export default Header;
