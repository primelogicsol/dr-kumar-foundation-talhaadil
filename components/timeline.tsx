"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const timelineItems = [
  {
    id: 1,
    title: "Birth and Early Light",
    description:
      "Born into a well-off family with a lineage of knowledge, Dr. Kumar showed signs of spiritual awareness from an early age.",
    alt: "Birth and Early Life of Dr. Kumar",
  },
  {
    id: 2,
    title: "From Medicine to Mysticism",
    description:
      "After serving in government medical service, Dr. Kumar experienced a profound spiritual shift that changed the course of his life.",
    alt: "Dr. Kumar's transition from medicine to mysticism",
  },
  {
    id: 3,
    title: "14 Years in Silence",
    description:
      "Dr. Kumar spent 14 years in the jungle of Ganderbal, living in complete silence and experiencing the Fana phase of spiritual dissolution.",
    alt: "Dr. Kumar's years of silence in Ganderbal",
  },
  {
    id: 4,
    title: "Return as a Qalandar",
    description:
      "He returned to society as a Qalandar, having achieved the state of Fana-i-Fillah, complete annihilation in the Divine.",
    alt: "Dr. Kumar's return as a Qalandar",
  },
  {
    id: 5,
    title: "Global Light",
    description:
      "Dr. Kumar's influence spread across continents as he shared his teachings on inner healing, environmental consciousness, and spiritual awakening.",
    alt: "Dr. Kumar's global influence",
  },
]

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? timelineItems.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === timelineItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-serif font-medium">{timelineItems[activeIndex].title}</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handlePrevious}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button variant="outline" size="icon" onClick={handleNext}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <video
            src="/hero-video.mp4"
            
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-lg mb-6">{timelineItems[activeIndex].description}</p>

          <div className="flex items-center">
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-1 rounded-full overflow-hidden">
              {timelineItems.map((_, index) => (
                <div
                  key={index}
                  className={`h-full ${index === activeIndex ? "bg-[#E6C67C]" : "bg-transparent"}`}
                  style={{
                    width: `${100 / timelineItems.length}%`,
                    display: "inline-block",
                  }}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Birth</span>
            <span>Global Legacy</span>
          </div>
        </div>
      </div>
    </div>
  )
}