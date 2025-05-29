import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const HandshakeIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.5 12L8.5 17L6 14.5M21 12C21 7.03 16.97 3 12 3S3 7.03 3 12C3 16.97 7.03 21 12 21C14.5 21 16.73 19.96 18.24 18.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8L10 14L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 