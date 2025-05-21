// src/hooks/useSlider.ts

import { useState, useEffect, useCallback } from 'react';

interface UseSliderProps {
  itemsCount: number;
  slidesPerView: number;
  autoPlayInterval?: number;
}

export const useSlider = ({ itemsCount, slidesPerView, autoPlayInterval }: UseSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Calculate the maximum index the slider can go to.
  // If itemsCount is 5 and slidesPerView is 3, maxIndex is 2 (0, 1, 2).
  // If itemsCount is 3 and slidesPerView is 3, maxIndex is 0.
  // If itemsCount is 2 and slidesPerView is 3, maxIndex is 0.
  const maxIndex = Math.max(0, itemsCount - slidesPerView);

  const goToSlide = useCallback((index: number) => {
    // Ensure the index is within valid bounds (0 to maxIndex)
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  }, [maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      // If we are already at the last possible slide, stay there (or loop to 0 if desired).
      // For stopping, we just return prev. For looping, uncomment the next line.
      if (prev === maxIndex) return 0; // Loop back to start
      // Or simply: if (prev === maxIndex) return prev; // Stop at end

      return prev + 1;
    });
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      // If we are already at the first slide, stay there (or loop to maxIndex if desired).
      // For stopping, we just return prev. For looping, uncomment the next line.
      if (prev === 0) return maxIndex; // Loop back to end
      // Or simply: if (prev === 0) return prev; // Stop at start

      return prev - 1;
    });
  }, [maxIndex]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    // Only set up auto-play if there are more items than can be displayed at once.
    // If itemsCount <= slidesPerView, there's no need to slide.
    if (autoPlayInterval && itemsCount > slidesPerView) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
      }, autoPlayInterval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoPlayInterval, itemsCount, slidesPerView, maxIndex]); // Dependencies include maxIndex

  // --- Dragging/Swiping Handlers (remain mostly unchanged, but will use updated nextSlide/prevSlide) ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    setScrollLeft(walk);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (scrollLeft > 50) {
      prevSlide();
    } else if (scrollLeft < -50) {
      nextSlide();
    }
    setScrollLeft(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX;
    const walk = (x - startX) * 2;
    setScrollLeft(walk);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollLeft > 50) {
      prevSlide();
    } else if (scrollLeft < -50) {
      nextSlide();
    }
    setScrollLeft(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setScrollLeft(0);
  };

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    isDragging,
  };
};