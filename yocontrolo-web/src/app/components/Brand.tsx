import Image from 'next/image';
import Link from 'next/link';
import { commonMessages, type Locale } from '../i18n';

type BrandProps = {
  compact?: boolean;
  inverse?: boolean;
  locale?: Locale;
};

export default function Brand({ compact = false, inverse = false, locale = 'es' }: BrandProps) {
  const messages = commonMessages[locale];
  return (
    <Link href="/" className={`yc-brand ${inverse ? 'is-inverse' : ''}`} aria-label={`YoControlo, ${messages.home}`}>
      <Image src="/brand/gato-custodio-app.svg" width={48} height={48} alt="" priority />
      {!compact && (
        <span className="yc-brand-copy">
          <strong>Yo<span>Controlo</span></strong>
          <small>{messages.tagline}</small>
        </span>
      )}
    </Link>
  );
}
