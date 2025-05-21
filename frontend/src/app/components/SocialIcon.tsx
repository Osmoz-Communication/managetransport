import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
    icon: faFacebookF,
    color: "hover:text-[#1877F3]"
  },
  linkedin: {
    href: "https://fr.linkedin.com/in/jean-claude-ravineau-496498195",
    label: "LinkedIn",
    icon: faLinkedinIn,
    color: "hover:text-[#0077B5]"
  },
  instagram: {
    href: "https://www.instagram.com/jeanclauderavineau/",
    label: "Instagram",
    icon: faInstagram,
    color: "hover:text-[#E4405F]"
  }
};

const variantStyles = {
  default: "",
  header: "w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100",
  footer: "w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
};

export default function SocialIcon({ brand, className = "", variant = 'default' }: SocialIconProps) {
  const { href, label, icon, color } = socialLinks[brand];
  const variantStyle = variantStyles[variant];
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center text-xl transition-all duration-200 ${color} ${variantStyle} ${className}`}
      title={label}
    >
      <FontAwesomeIcon 
        icon={icon} 
        className="[&>svg]:bg-transparent [&>svg]:hover:bg-transparent"
      />
    </a>
  );
} 