'use client';

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SkipLink({ href, children, className = '' }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={`
        sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
        bg-blue-600 text-white px-4 py-2 rounded-md z-50
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-all duration-200 font-medium
        ${className}
      `}
      onFocus={(e) => {
        // S'assurer que le lien devient visible au focus
        e.currentTarget.classList.remove('sr-only');
      }}
      onBlur={(e) => {
        // Remettre sr-only après la perte de focus
        setTimeout(() => {
          e.currentTarget.classList.add('sr-only');
        }, 100);
      }}
    >
      {children}
    </a>
  );
} 