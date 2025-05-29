import Link from "next/link";
import { useTranslation } from "../../hooks/useTranslation";
import { usePathname } from "next/navigation";

const navKeys = [
  { href: "/", key: "nav.home" },
  { href: "/nos-missions", key: "nav.missions" },
  { href: "/nos-valeurs", key: "nav.valeurs" },
  { href: "/qui-sommes-nous", key: "nav.equipe" },
  { href: "/contact", key: "nav.contact" },
];

export default function Nav({ lang }: { lang: 'fr' | 'en' }) {
  const { t } = useTranslation(lang);
  const pathname = usePathname();

  return (
    <nav aria-label={lang === 'fr' ? "Navigation principale" : "Main navigation"}>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 list-none m-0 p-0">
        {navKeys.map(({ href, key }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="text-center md:text-left">
              <Link 
                href={href} 
                className={`
                  nav-link
                  text-gray-900 font-bold text-base md:text-lg 
                  focus:outline-none
                  rounded-lg px-3 py-2 block
                `}
                aria-current={isActive ? 'page' : undefined}
              >
                {t(key)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
} 