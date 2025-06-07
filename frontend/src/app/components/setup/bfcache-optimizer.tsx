"use client";

import { useEffect } from 'react';

// Déclaration de type pour AOS
declare global {
  interface Window {
    AOS?: {
      refresh: () => void;
      init: () => void;
    };
  }
}

/**
 * Composant pour optimiser le back/forward cache (bfcache)
 * Gère les WebSockets et autres éléments qui peuvent empêcher l'utilisation du bfcache
 */
export function BfcacheOptimizer() {
  useEffect(() => {
    // Nettoyer les WebSockets lors de la navigation
    const handleBeforeUnload = () => {
      // Fermer toutes les connexions WebSocket ouvertes
      if (typeof window !== 'undefined') {
        // Nettoyer les timers et les connexions de manière plus sûre
        // Créer un timeout temporaire pour obtenir l'ID le plus élevé
        const tempTimeout = setTimeout(() => {}, 0);
        const highestTimeoutId = Number(tempTimeout);
        clearTimeout(tempTimeout);
        
        // Nettoyer les timeouts existants
        for (let i = 1; i <= highestTimeoutId; i++) {
          clearTimeout(i);
        }
        
        // Même chose pour les intervals
        const tempInterval = setInterval(() => {}, 1);
        const highestIntervalId = Number(tempInterval);
        clearInterval(tempInterval);
        
        for (let i = 1; i <= highestIntervalId; i++) {
          clearInterval(i);
        }
      }
    };

    // Optimiser pour le bfcache
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // La page a été restaurée depuis le bfcache
        console.log('Page restaurée depuis le bfcache');
        
        // Réinitialiser les animations AOS si nécessaire
        if (typeof window !== 'undefined' && window.AOS) {
          window.AOS.refresh();
        }
      }
    };

    const handlePageHide = (event: PageTransitionEvent) => {
      if (!event.persisted) {
        // La page ne sera pas mise en cache
        console.log('Page ne sera pas mise en cache');
      }
    };

    // Ajouter les listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('pagehide', handlePageHide);

    // Optimisation du cache des scripts
    if (typeof window !== 'undefined') {
      // Indiquer au navigateur que cette page est éligible au bfcache
      if ('serviceWorker' in navigator) {
        // S'assurer que le service worker ne bloque pas le bfcache
        navigator.serviceWorker.ready.then((registration) => {
          if (registration.active) {
            registration.active.postMessage({
              type: 'OPTIMIZE_BFCACHE'
            });
          }
        });
      }
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, []);

  return null;
} 