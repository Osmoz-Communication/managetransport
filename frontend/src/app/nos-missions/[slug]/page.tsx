import { notFound } from "next/navigation"
import { missions } from "../missionData"
import { AnimatedMissionDetails } from "@/app/components/AnimatedMissionDetails"

type Props = {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function MissionPage({ params }: Props) {
  const { slug } = await params
  const mission = missions.find((m) => m.slug === slug)

  if (!mission) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pb-16">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-10 mt-10 px-4">
        <AnimatedMissionDetails mission={mission} />
      </div>
    </div>
  )
}