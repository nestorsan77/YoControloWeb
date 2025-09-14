'use client';
import React from 'react';

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href, variant = 'primary' }) => {
  const baseClasses = 'px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-500/25 transition-colors duration-500',
    secondary: 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-800 transition-colors duration-500',
  };

  return (
    <a href={href} aria-label={text} className={`${baseClasses} ${variants[variant]}`}>
      {text}
    </a>
  );
};

export default CTAButton;
