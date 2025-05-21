import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" aria-label="Accueil Manage Transport" className="block">
      <Image
        src="/logo_managetransport.png"
        alt="Logo Manage Transport"
        width={250}
        height={100}
        className={`${className} transition-all duration-300`}
        priority
        unoptimized
      />
    </Link>
  );
} 