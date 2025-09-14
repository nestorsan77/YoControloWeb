// src/components/Logo.tsx
import Link from 'next/link'


export default function Logo() {
  return (
    <Link
      href="../../public/images/dinero.png"
      className="text-2xl font-extrabold text-gray-900 dark:text-white hover:text-orange-500 transition-colors"
    >
      YoControlo
    </Link>
  )
}
