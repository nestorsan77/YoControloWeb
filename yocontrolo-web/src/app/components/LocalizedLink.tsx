 'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';
import { localizedPath } from '../localized-path';

export default function LocalizedLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const locale = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
  return <Link {...props} href={typeof props.href === 'string' ? localizedPath(props.href, locale) : props.href} />;
}
