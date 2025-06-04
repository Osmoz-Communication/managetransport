export interface Mission {
  slug: string;
  title: string;
  image: string;
  short: string;
  intro: string;
  details: string[];
  more?: string;
}

export const missions: Mission[] = [
  {
    slug: "organisation-appels-offres",
    title: "Organisation et gestion d'appels d'offres",
    image: "/images/home/missions/appel_offre.webp",
    short: "Optimisez vos appels d'offres pour gagner en efficacité et en compétitivité.",
    intro: "Profitez de notre expérience pour optimiser l'organisation et la gestion de vos appels d'offres. ManageTransport vous accompagne dans la mise en place d'un appel d'offre dédié et spécifique à votre activité:",
    details: [
      "État des lieux et diagnostic (réalisation, si besoin, d'audits clients)",
      "Collecte et analyse des données",
      "Rédaction de l'appel d'offres",
      "Consultation des prestataires",
      "Analyse et négociation des offres",
      "Accompagnement dans la prise de décision et mise en production",
      "Réalisation des contrats"
    ],
    more: "Nous vous accompagnons de A à Z dans la structuration de vos appels d'offres, en vous aidant à définir vos besoins, à rédiger des cahiers des charges précis, à sélectionner les meilleurs prestataires et à sécuriser vos contrats. Notre expertise vous garantit des processus transparents, des économies substantielles et une gestion de projet sans faille."
  },
  {
    slug: "plan-de-transport",
    title: "Diagnostic de plan de transport",
    image: "/images/home/missions/plan-transport.webp",
    short: "Construisez un plan de transport performant et adapté à vos enjeux.",
    intro: "Profitez de notre expérience pour vous aider à réaliser des plans de transport organisés et optimisés. ManageTransport vous accompagne dans la construction de votre nouveau plan de transport du début à la fin.",
    details: [],
    more: "Nous analysons vos flux, vos contraintes et vos objectifs pour concevoir un plan de transport sur-mesure. Notre approche intègre l'optimisation des itinéraires, la réduction des coûts, la fiabilité des délais et l'intégration des nouvelles technologies logistiques."
  },
  {
    slug: "optimisation-conditionnement",
    title: "Optimisation de conditionnement",
    image: "/images/home/missions/budget.webp",
    short: "Réduisez vos coûts et améliorez la sécurité grâce à un emballage optimisé.",
    intro: "Profitez de notre expérience pour optimiser votre conditionnement. ManageTransport vous aide à améliorer votre stratégie d'emballage et ainsi optimiser :",
    details: [
      "Vos coûts de transport",
      "Vos cadences et votre capacité à livrer plus vite",
      "Votre espace de stockage",
      "Vos coûts d'achat d'emballage",
      "La satisfaction de vos clients"
    ],
    more: "Nous vous conseillons sur les meilleurs matériaux, les techniques d'emballage innovantes et la gestion des volumes pour maximiser la sécurité de vos marchandises tout en réduisant vos dépenses logistiques."
  },
  {
    slug: "enquetes-satisfaction",
    title: "Réalisation d'enquêtes de satisfaction",
    image: "/images/home/missions/satisfaction.webp",
    short: "Mesurez et améliorez la satisfaction de vos clients avec des enquêtes sur-mesure.",
    intro: "Profitez de notre expérience pour vous aider à organiser vos enquêtes de satisfaction. ManageTransport réalise pour vous une enquête :",
    details: [
      "Élaboration de questionnaire(s)",
      "Cadrage de l'enquête",
      "Diffusion de l'enquête",
      "Analyse des résultats",
      "Communication des résultats et préconisation d'un plan d'actions"
    ],
    more: "Nous concevons des enquêtes personnalisées, analysons les retours clients et vous aidons à mettre en place des plans d'action concrets pour renforcer la fidélité et la qualité de service."
  },
  {
    slug: "gestion-litiges-transport",
    title: "Gestion des litiges transport",
    image: "/images/home/missions/litiges.webp",
    short: "Minimisez les risques et gérez efficacement les litiges liés au transport.",
    intro: "Profitez de notre expérience pour vous accompagner dans la gestion de vos dommages de transport. ManageTransport vous accompagne dans :",
    details: [
      "L'analyse de vos taux dommages transport (mise en place d'indicateurs)",
      "L'identification des sources de dommages transport (conditionnement de vos marchandises, manutention, choix des prestataires)",
      "La mise en place d'un traitement efficace des dommages transport et contentieux",
      "Les règles et conditions de recevabilité des réserves",
      "Les bonnes pratiques des règles fiscales",
      "La mise en place de campagnes de communication visant à sensibiliser vos clients lors de la réception des marchandises"
    ],
    more: "Nous vous aidons à structurer vos procédures, à former vos équipes et à négocier avec les parties prenantes pour une résolution rapide et équitable des litiges."
  },
  {
    slug: "assurance-securisation-marchandises",
    title: "Assurer et sécuriser vos marchandises",
    image: "/images/home/missions/assurance.webp",
    short: "Sécurisez vos flux et protégez vos biens avec des solutions d'assurance adaptées.",
    intro: "Profitez de notre expérience pour vous accompagner dans l'assurance et la sécurisation de vos marchandises. ManageTransport analyse avec vous vos besoins et vous propose :",
    details: [
      "Des prestataires assureurs spécialisés",
      "La mise en place de transports sécurisés avec véhicules d'escorte, pour des expéditions à hautes valeurs ajoutées"
    ],
    more: "Nous sélectionnons pour vous les meilleures offres d'assurance et mettons en place des dispositifs de sécurité adaptés à la valeur et à la sensibilité de vos marchandises."
  },
  {
    slug: "mise-en-place-kpi",
    title: "Mise en place de KPI pour votre entreprise",
    image: "/images/home/missions/kpi.webp",
    short: "Pilotez votre performance grâce à des indicateurs sur-mesure.",
    intro: "Profitez de notre expérience pour mettre en place votre KPI.",
    details: [],
    more: "Nous vous aidons à définir, suivre et exploiter les indicateurs clés de performance adaptés à votre activité pour un pilotage efficace et une prise de décision éclairée."
  },
  {
    slug: "choix-prestataires-qualite",
    title: "Choisir des prestataires de qualité",
    image: "/images/home/missions/emballage.webp",
    short: "Sélectionnez les meilleurs partenaires pour garantir la qualité de vos services.",
    intro: "Profitez de notre expérience pour choisir des prestataires dignes de confiance. ManageTransport vous accompagne vers une intégration progressive des nouveaux modes de distribution (modes doux, collaboratifs…) liés à la mutation de nos modes de consommation (E-commerce….) et des contraintes associées. Nous vous ferons découvrir de nouveaux acteurs qui intègrent progressivement le monde du transport ainsi que les innovations et nouvelles technologies associées.",
    details: [],
    more: "Nous auditons, sélectionnons et suivons vos partenaires pour garantir la fiabilité, la compétitivité et l'innovation dans votre chaîne logistique."
  },
  {
    slug: "distribution-urbaine",
    title: "Intégrer les contraintes de la distribution urbaine",
    image: "/images/home/missions/distribution-urbaine.webp",
    short: "Réussissez vos livraisons urbaines malgré les contraintes réglementaires et environnementales.",
    intro: "Profitez de notre expérience dans la gestion des contraintes de la distribution urbaine. ManageTransport est là pour vous aider à trouver des solutions innovantes de livraison malgré le coût élevé du transport et les problématiques actuelles (saturation et réglementation des centres villes, accroissement des zones à faibles émissions…).",
    details: [],
    more: "Nous vous accompagnons dans l'adaptation de votre logistique urbaine : solutions de livraison verte, mutualisation, gestion des ZFE, et innovations pour répondre aux nouveaux défis de la ville."
  }
]; 