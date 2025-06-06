"use client";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library so they can be used by name
library.add(faFacebookF, faLinkedinIn, faInstagram);

type SocialBrand = 'facebook' | 'linkedin' | 'instagram';

interface SocialIconProps {
  brand: SocialBrand;
  className?: string;
  variant?: 'default' | 'header' | 'footer';
}

const socialLinks = {
  facebook: {
    href: "https://fr-fr.facebook.com/people/Jean-claude-Ravineau/100011211398278/",
    label: "Facebook",
    ariaLabel: "Visitez notre page Facebook (nouvel onglet)",
    icon: faFacebookF,
    color: "hover:text-[#1877F3]"
  },
  linkedin: {
    href: "https://fr.linkedin.com/in/jean-claude-ravineau-496498195",
    label: "LinkedIn", 
    ariaLabel: "Visitez notre profil LinkedIn (nouvel onglet)",
    icon: faLinkedinIn,
    color: "hover:text-[#0077B5]"
  },
  instagram: {
    href: "https://www.instagram.com/jeanclauderavineau/",
    label: "Instagram",
    ariaLabel: "Visitez notre compte Instagram (nouvel onglet)",
    icon: faInstagram,
    color: "hover:text-[#E4405F]"
  }
};

const variantStyles = {
  default: "",
  header: "w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100",
  footer: "w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
};

export function SocialIcon({ brand, className = "", variant = 'default' }: SocialIconProps) {
  const { href, label, icon, color, ariaLabel } = socialLinks[brand];
  const variantStyle = variantStyles[variant];
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center text-xl transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none rounded ${color} ${variantStyle} ${className}`}
      title={label}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(href, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <FontAwesomeIcon 
        icon={icon} 
        className="[&>svg]:bg-transparent [&>svg]:hover:bg-transparent"
        aria-hidden="true"
        role="img"
        title=""
      />
      <span className="sr-only">{ariaLabel}</span>
    </a>
  );
} 