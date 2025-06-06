import type { MetadataRoute } from 'next'
import { languages } from './locales/routes'
import { missionSlugs, getLocalizedMissionSlug, type MissionKey } from './locales/missionSlugs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://managetransport.fr'
  
  // Obtenir les clés de missions réelles depuis le fichier de configuration
  const missionKeys = Object.keys(missionSlugs.fr) as MissionKey[]
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // Date courante pour lastModified
  const currentDate = new Date()
  
  // Ajouter les routes principales pour chaque langue
  languages.forEach(lang => {
    // 1. Homepage - Priorité maximale
    sitemap.push({
      url: `${baseUrl}/${lang}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    })
    
    // 2. Pages principales - Haute priorité
    const routes = lang === 'fr' 
      ? ['nos-missions', 'nos-valeurs', 'qui-sommes-nous', 'contact']
      : ['our-missions', 'our-values', 'about-us', 'contact']
      
    routes.forEach(route => {
      // Ajuster les priorités selon l'importance business
      let priority = 0.8
      if (route.includes('missions')) priority = 0.9 // Missions = cœur de métier
      if (route.includes('contact')) priority = 0.7   // Contact important mais moins
      if (route.includes('valeurs') || route.includes('values')) priority = 0.6
      if (route.includes('qui-sommes-nous') || route.includes('about')) priority = 0.5
      
      sitemap.push({
        url: `${baseUrl}/${lang}/${route}`,
        lastModified: currentDate,
        changeFrequency: route.includes('missions') ? 'weekly' : 'monthly',
        priority,
      })
    })
    
    // 3. Pages de missions individuelles - Utiliser les vrais slugs traduits
    const missionsRoute = lang === 'fr' ? 'nos-missions' : 'our-missions'
    
    missionKeys.forEach(missionKey => {
      const localizedSlug = getLocalizedMissionSlug(missionKey, lang)
      
      sitemap.push({
        url: `${baseUrl}/${lang}/${missionsRoute}/${localizedSlug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7, // Priorité élevée car pages de conversion
      })
    })
  })
  
  // 4. Routes de redirection legacy (pour compatibilité)
  // Ajouter les anciennes routes /nos-missions/[slug] pour éviter les 404
  missionKeys.forEach(missionKey => {
    sitemap.push({
      url: `${baseUrl}/nos-missions/${missionKey}`,
      lastModified: currentDate,
      changeFrequency: 'never', // Pages de redirection
      priority: 0.1, // Très faible priorité
    })
  })
  
  // 5. Page racine (redirection vers /fr)
  sitemap.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'never',
    priority: 0.9, // Haute priorité car point d'entrée
  })
  
  return sitemap.sort((a, b) => (b.priority || 0) - (a.priority || 0)) // Trier par priorité décroissante
} 