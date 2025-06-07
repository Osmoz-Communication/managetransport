"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";

type LogoProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Logo({ className, style }: LogoProps) {
  const { lang } = useLanguage();
  
  return (
    <Link href={`/${lang}`} aria-label="Accueil Manage Transport" className="block">
      <Image
        src="/logo_managetransport.webp"
        alt="Logo Manage Transport"
        width={250}
        height={100}
        className={className}
        style={{
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          ...style
        }}
        priority
        sizes="(max-width: 768px) 150px, 250px"
        quality={90}
      />
    </Link>
  );
} 