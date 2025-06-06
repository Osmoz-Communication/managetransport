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
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 list-none m-0 p-0">
        {navRoutes.map(({ route, key }) => {
          const href = getLocalizedPath(route, lang as Language);
          const isActive = pathname === href;
          return (
            <li key={route} className="text-center md:text-left">
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
                {t(key) as string}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
} 