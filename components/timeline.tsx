"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const timelineItems = [
  {
    id: 1,
    title: "Birth and Early Light",
    description:
      "Born in 1957 into a Kashmiri family of scholars and healers, Dr. Kumar grew up in an environment where learning and spirituality were part of daily life. From his earliest years, he displayed a rare sensitivity to nature, animals, and the unseen mysteries of existence. Elders noticed his contemplative nature and his tendency toward silence and reflection, unusual traits in a child. His compassion for others stood out, as he often cared for both people and creatures around him. The cultural richness of Kashmir provided a fertile ground for nurturing his inner depth. His family’s wisdom traditions gave him a foundation rooted in both knowledge and faith. These early qualities became the seeds of his journey as physician, mystic, and spiritual teacher.",
    alt: "Birth and Early Life of Dr. Kumar",
  },
  {
    id: 2,
    title: "From Medicine to Mysticism",
    description:
      "As a government physician, Dr. Kumar served tirelessly in remote Kashmiri villages, often reaching people who had little or no access to healthcare. His patients respected him deeply for his skill and his unwavering empathy. Yet, despite these successes, he felt a growing emptiness inside, a sense that medicine could only touch the surface of suffering. He began to question the nature of life, death, and healing itself. The limits of science pushed him toward a search for deeper truths beyond the body. His restlessness became a call to look within, a call he could not ignore. This turning point marked the slow but steady shift from medicine toward mysticism and inner discovery.",
    alt: "Dr. Kumar's transition from medicine to mysticism",
  },
  {
    id: 3,
    title: "14 Years in Silence",
    description:
      "Dr. Kumar eventually withdrew from society and entered the forests of Ganderbal, where he lived for 14 years in silence and solitude. With nothing but the barest essentials, he surrendered to contemplation, prayer, and meditation. During this period, he experienced the state of Fana, the annihilation of the self in the Divine. Villagers who caught rare glimpses of him described an aura of stillness and light, as though he belonged to another world. The natural world became both his companion and his teacher, shaping his inner transformation. His silence deepened into an unbroken state of awareness beyond ordinary thought. When he emerged from the forest, many felt they were seeing an entirely new being, no longer the physician they once knew.",
    alt: "Dr. Kumar's years of silence in Ganderbal",
  },
  {
    id: 4,
    title: "Return as a Qalandar",
    description:
      "When Dr. Kumar reemerged after years of solitude, he carried no trace of his former identity. He had become a Qalandar, one who lives in total surrender to the Divine. Possessions, conventions, and personal concerns no longer defined him; he walked freely, belonging to no one and to everyone. His state was described as Fana-i-Fillah, a life lived only through the presence of God. Those who met him often felt a silence more eloquent than words, as if the Divine itself spoke through his stillness. His presence inspired awe, comfort, and transformation in equal measure. To many, he embodied a living reflection of the sacred, a reminder that true freedom lies beyond the self.",
    alt: "Dr. Kumar's return as a Qalandar",
  },
  {
    id: 5,
    title: "Global Light",
    description:
      "The radiance of Dr. Kumar’s being soon extended beyond Kashmir, carried by seekers who had encountered him. His influence reached Europe, North America, and other parts of the world, where he was welcomed with reverence. Wherever he traveled, his message remained simple: seek stillness, discover the soul within, and live in harmony with the earth. He avoided rigid doctrines and spoke instead from direct experience, allowing each listener to feel their own inner truth. His teachings inspired communities dedicated to meditation, ecological awareness, and compassionate living. Many found in his presence a healing deeper than words, one that restored both spirit and heart. Through these journeys, his vision of unity and compassion blossomed into a global movement.",
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
          <Button className="bg-emerald-600" variant="outline" size="icon" onClick={handlePrevious}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button className="bg-emerald-600" variant="outline" size="icon" onClick={handleNext}>
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
            <div className="w-full bg-gray-200 dark:bg-emerald-600 h-1 rounded-full overflow-hidden">
              {timelineItems.map((_, index) => (
                <div
                  key={index}
                  className="bg-emerald-600"
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