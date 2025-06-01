// src/app/nos-missions/[slug]/page.tsx
import { notFound } from "next/navigation";
import { missions } from "../missionData";
import { AnimatedMissionDetails } from "@/app/components/AnimatedMissionDetails";

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function MissionPage({ params }: Props) {
  const mission = missions.find((m) => m.slug === params.slug);
  if (!mission) return notFound();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pb-16">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-10 mt-10 px-4">
        <AnimatedMissionDetails mission={mission} />
      </div>
    </div>
  );
}