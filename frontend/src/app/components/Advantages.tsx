import { AdvantagesIcon, CalendarIcon, CompassIcon, SearchIcon } from "../icons";

const advantages = [
  {
    icon: <AdvantagesIcon className="w-12 h-12 text-primary" />,
    title: "Expertise",
    description: "Plus de 30 ans d'expérience dans le secteur du transport",
  },
  {
    icon: <CalendarIcon className="w-12 h-12 text-primary" />,
    title: "Disponibilité",
    description: "Présent dès que vous en avez besoin",
  },
  {
    icon: <CompassIcon className="w-12 h-12 text-primary" />,
    title: "Économique",
    description: "Un prix juste et adapté à tous vos projets",
  },
  {
    icon: <SearchIcon className="w-12 h-12 text-primary" />,
    title: "Accompagnement",
    description: "À vos côtés du début à la fin",
  },
];

export const Advantages = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-down"
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            POURQUOI NOUS ?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nos avantages
          </h3>
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                {advantage.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {advantage.title}
              </h4>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-3 bg-white p-4 rounded-xl shadow-lg">
            <span className="flex-shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M3 3V21M3 21H21M3 21L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div className="text-left">
              <h4 className="font-semibold">English speaker</h4>
              <p className="text-sm text-gray-600">
                Profitez d&apos;une expérience entièrement bilingue pour vos missions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 