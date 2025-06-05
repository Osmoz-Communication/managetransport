"use client";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent Font Awesome from adding its CSS automatically since we are importing it manually.
// This is the key to fixing the Flash of Unstyled Content (FOUC).
config.autoAddCss = false;

/**
 * A client component that handles global Font Awesome configuration.
 * It should be placed in the root layout to ensure CSS is loaded early.
 * It renders nothing.
 */
export function FontAwesomeSetup() {
  return null;
} 