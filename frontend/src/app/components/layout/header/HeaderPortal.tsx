"use client";

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface HeaderPortalProps {
  children: React.ReactNode;
}

export default function HeaderPortal({ children }: HeaderPortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Rendu côté serveur ou avant montage : on rend les enfants directement
    // pour que Next.js puisse hydrater correctement la page.
    return <>{children}</>;
  }

  // Côté client, une fois monté, on téléporte le header dans le body
  // pour l'isoler des contextes de superposition.
  return createPortal(children, document.body);
} 