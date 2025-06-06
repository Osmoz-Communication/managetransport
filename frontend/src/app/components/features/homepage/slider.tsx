import Image from "next/image";
import Link from "next/link";
import { SLIDER_INTERVAL } from "../../../../constants";
import { useSlider } from "../../../hooks/useSlider";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { getLocalizedPath } from "../../../locales/routes";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: Slide[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  
  const {
    currentIndex: currentSlide,
    nextSlide: goToNextSlide,
    prevSlide: goToPrevSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    isDragging,
  } = useSlider({
    itemsCount: slides.length,
    slidesPerView: 1,
    autoPlayInterval: SLIDER_INTERVAL,
  });

  return (
    <div className="relative group">
      {/* Container principal du slider */}
      <div 
        className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" style={{ zIndex: 2 }}></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4" style={{ zIndex: 10 }}>
              <h1 
                data-aos="fade-down"
                data-aos-delay="200"
                className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white text-center"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
              >
                {slide.title}
              </h1>
              <p 
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-8 max-w-3xl mx-auto text-white text-center"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
              >
                {slide.description}
              </p>
              <Link
                href={getLocalizedPath('missions', lang)}
                data-aos="zoom-in"
                data-aos-delay="600"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-lg"
              >
                {t("homepage.slider.button") as string}
              </Link>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="hidden sm:block absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="hidden sm:block absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-primary w-4 sm:w-6"
                  : "bg-white bg-opacity-50 hover:bg-opacity-70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 