import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SearchIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16.5 16.5L21 21M6 11.5H12M18 11.5C18 15.6421 14.6421 19 10.5 19C6.35786 19 3 15.6421 3 11.5C3 7.35786 6.35786 4 10.5 4C14.6421 4 18 7.35786 18 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 