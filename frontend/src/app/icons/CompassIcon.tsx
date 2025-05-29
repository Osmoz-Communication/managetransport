import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CompassIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 14.5C9.5 14.5 7.5 12.5 7.5 10C7.5 7.5 9.5 5.5 12 5.5C14.5 5.5 16.5 7.5 16.5 10C16.5 12.5 14.5 14.5 12 14.5ZM12 14.5V17.5M12 17.5H9M12 17.5H15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
); 