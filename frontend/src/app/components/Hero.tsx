"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
  badge: string;
  title: string;
  description: string;
  backgroundImage?: string;
  children?: ReactNode;
  className?: string;
}

export function Hero({
  badge,
  title,
  description,
  backgroundImage = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  children,
  className = "",
}: HeroProps) {
  return (
    <section className={`relative py-20 lg:py-24 overflow-hidden min-h-[400px] flex items-center ${className}`}>
      {/* Image de fond */}
      <div
        className="absolute inset-0"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-offset="0"
        data-aos-once="true"
      >
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        
        {/* Overlay sombre intégré */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" 
          style={{ zIndex: 2 }}
        ></div>
        
        {/* Overlay couleur primaire subtil intégré */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/20" 
          style={{ zIndex: 3 }}
        ></div>
      </div>

      {/* Effets géométriques subtils */}
      <div 
        className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" 
        style={{ zIndex: 4 }}
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-offset="0"
        data-aos-once="true"
      ></div>
      <div 
        className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" 
        style={{ zIndex: 4 }}
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="600"
        data-aos-offset="0"
        data-aos-once="true"
      ></div>

      <div className="relative container mx-auto px-4 text-center w-full" style={{ zIndex: 10 }}>
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-offset="0"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
          className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-6"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
        >
          {badge}
        </div>

        <h1
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="600"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
          className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
        >
          {title}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="600"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
          className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
        >
          {description}
        </p>

        {children && (
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="600"
            data-aos-offset="0"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
            className="mt-8"
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
} 