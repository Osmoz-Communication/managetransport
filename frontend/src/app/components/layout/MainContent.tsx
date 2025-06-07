"use client";

import { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main 
      className="w-full"
      style={{
        paddingTop: 'var(--header-height)',
        minHeight: '100vh'
      }}
    >
      {children}
    </main>
  );
} 