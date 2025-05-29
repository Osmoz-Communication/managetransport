import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const EarIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 8.5C6 5.46243 8.46243 3 11.5 3C14.5376 3 17 5.46243 17 8.5C17 11.5376 14.5376 14 11.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.5 21V14M11.5 14C9.567 14 8 12.433 8 10.5V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 18C4 16.5 5 15.5 6.5 15.5C8 15.5 9 16.5 9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 