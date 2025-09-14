// src/components/Hamburger.tsx
'use client'

interface HamburgerProps {
  isOpen: boolean
  toggle: () => void
}

export default function Hamburger({ isOpen, toggle }: HamburgerProps) {
  return (
    <button
      className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
      onClick={toggle}
      aria-label="Abrir menú"
      aria-expanded={isOpen}
    >
      <span
        className={`block w-6 h-0.5 bg-gray-900 dark:bg-white rounded transition-transform duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-gray-900 dark:bg-white rounded my-1 transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-gray-900 dark:bg-white rounded transition-transform duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      ></span>
    </button>
  )
}
