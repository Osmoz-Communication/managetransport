"use client";

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Configuration pour éviter l'ajout automatique du CSS
config.autoAddCss = false;

// Import direct et minimal - Évite le proxy.mjs problématique
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

// Ajouter uniquement les icônes nécessaires à la bibliothèque
library.add(
  faFacebookF,
  faLinkedinIn,
  faInstagram
);

/**
 * Configuration FontAwesome optimisée pour réduire la taille du bundle
 * Charge uniquement les icônes utilisées dans l'application
 */
export function FontAwesomeOptimized() {
  return null;
}

// Export des icônes pour utilisation directe (tree-shaking friendly)
export {
  faFacebookF,
  faLinkedinIn,
  faInstagram
}; 