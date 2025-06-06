import Link from "next/link";
import { useTranslation } from "../../../hooks/useTranslation";
import { usePathname } from "next/navigation";
import { getLocalizedPath, type Language } from "../../../locales/routes";

const navRoutes = [
  { route: "home" as const, key: "nav.home" },
  { route: "missions" as const, key: "nav.missions" },
  { route: "values" as const, key: "nav.valeurs" },
  { route: "about" as const, key: "nav.equipe" },
  { route: "contact" as const, key: "nav.contact" },
];

export default function Nav({ lang }: { lang: 'fr' | 'en' }) {
  const { t } = useTranslation(lang);
  const pathname = usePathname();

  return (
    <nav aria-label={lang === 'fr' ? "Navigation principale" : "Main navigation"}>
      <ul 
        className="flex flex-col md:flex-row gap-4 md:gap-8 list-none m-0 p-0"
        role="menubar"
      >
        {navRoutes.map(({ route, key }, index) => {
          const href = getLocalizedPath(route, lang as Language);
          const isActive = pathname === href;
          return (
            <li 
              key={route} 
              className="text-center md:text-left"
              role="none"
            >
              <Link 
                href={href} 
                className={`
                  nav-link
                  text-gray-900 font-bold text-base md:text-lg 
                  focus:outline-none
                  rounded-lg px-3 py-2 block
                `}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
                tabIndex={index === 0 ? 0 : -1}
                onKeyDown={(e) => {
                  // Navigation au clavier
                  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextIndex = (index + 1) % navRoutes.length;
                    const nextLink = document.querySelector(`[role="menuitem"]:nth-child(${nextIndex + 1}) a`) as HTMLElement;
                    nextLink?.focus();
                  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevIndex = index === 0 ? navRoutes.length - 1 : index - 1;
                    const prevLink = document.querySelector(`[role="menuitem"]:nth-child(${prevIndex + 1}) a`) as HTMLElement;
                    prevLink?.focus();
                  }
                }}
              >
                <span className={isActive ? 'sr-only' : 'hidden'}>
                  {lang === 'fr' ? 'Page actuelle: ' : 'Current page: '}
                </span>
                {t(key) as string}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
} 