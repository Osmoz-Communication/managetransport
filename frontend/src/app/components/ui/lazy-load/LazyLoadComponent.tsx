"use client";

import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazyLoadComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

/**
 * Composant de lazy loading pour optimiser les performances
 * Charge le contenu uniquement quand il devient visible
 */
export function LazyLoadComponent({
  children,
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
  rootMargin = '50px',
  threshold = 0.1,
  triggerOnce = true,
  className = ''
}: LazyLoadComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Délai pour permettre un rendu plus fluide
          setTimeout(() => {
            setIsLoaded(true);
          }, 100);

          if (triggerOnce) {
            observer.disconnect();
          }
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, triggerOnce]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? (
        <div className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      ) : (
        fallback
      )}
    </div>
  );
} 