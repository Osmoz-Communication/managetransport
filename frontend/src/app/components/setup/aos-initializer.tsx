"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 10,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: false,
      startEvent: 'DOMContentLoaded',
    });
  }, []);

  return null; // Ce composant ne rend rien visuellement
};

export default AOSInitializer; 