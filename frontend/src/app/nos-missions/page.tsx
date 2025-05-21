"use client";

import { MissionsFullSection } from "./MissionsFullSection";
import { QuoteSection } from "../components/QuoteSection";

export default function NosMissions() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-10 mb-4 text-center">Nos missions</h1>
      <MissionsFullSection />
      <div className="w-full max-w-6xl mx-auto">
        <QuoteSection />
      </div>
    </div>
  );
} 