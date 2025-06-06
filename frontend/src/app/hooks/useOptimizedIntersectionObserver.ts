import { useEffect, useRef, useState, useCallback } from 'react';

interface UseOptimizedIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useOptimizedIntersectionObserver(
  options: UseOptimizedIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -20px 0px',
    triggerOnce = true
  } = options;

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<Map<number, Element>>(new Map());

  // Optimisation : utiliser un Set pour éviter les doublons et améliorer les performances
  const addVisibleItem = useCallback((index: number) => {
    setVisibleItems(prev => {
      if (prev.has(index)) return prev;
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  }, []);

  // Fonction pour observer un élément
  const observeElement = useCallback((element: Element, index: number) => {
    if (!element) return;
    
    const currentElements = elementsRef.current;
    const currentObserver = observerRef.current;
    
    currentElements.set(index, element);
    
    if (currentObserver) {
      currentObserver.observe(element);
    }
  }, []);

  // Fonction pour ne plus observer un élément
  const unobserveElement = useCallback((index: number) => {
    const currentElements = elementsRef.current;
    const currentObserver = observerRef.current;
    
    const element = currentElements.get(index);
    if (element && currentObserver) {
      currentObserver.unobserve(element);
      currentElements.delete(index);
    }
  }, []);

  // Initialisation de l'observer
  useEffect(() => {
    const currentObserver = observerRef.current;
    if (currentObserver) {
      currentObserver.disconnect();
    }

    const newObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute('data-index') || '0');
            
            // Utiliser requestAnimationFrame pour les animations plus fluides
            requestAnimationFrame(() => {
              addVisibleItem(index);
            });

            // Si triggerOnce est activé, arrêter d'observer après la première intersection
            if (triggerOnce && newObserver) {
              newObserver.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observerRef.current = newObserver;

    // Observer tous les éléments déjà enregistrés
    const currentElements = elementsRef.current;
    currentElements.forEach((element) => {
      newObserver.observe(element);
    });

    return () => {
      newObserver.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, addVisibleItem]);

  // Nettoyage lors du démontage
  useEffect(() => {
    return () => {
      const currentObserver = observerRef.current;
      const currentElements = elementsRef.current;
      
      if (currentObserver) {
        currentObserver.disconnect();
      }
      currentElements.clear();
    };
  }, []);

  return {
    visibleItems,
    observeElement,
    unobserveElement,
    isVisible: (index: number) => visibleItems.has(index),
  };
} 