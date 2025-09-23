"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const quotes = [
  {
    id: 1,
    text: "Silence is not the absence of sound, but the presence of the Divine.",
    attribution: "Dr. Kumar",
  },
  {
    id: 2,
    text: "The path of Fana is not about losing yourself, but finding your true essence by dissolving the false self.",
    attribution: "Dr. Kumar",
  },
  {
    id: 3,
    text: "When you heal the water, you heal yourself. When you heal yourself, you heal the world.",
    attribution: "Dr. Kumar",
  },
  {
    id: 4,
    text: "A Qalandar does not belong to any religion, yet embodies the essence of all religions.",
    attribution: "Dr. Kumar",
  },
  {
    id: 5,
    text: "The greatest medicine is the awareness that you are not separate from the source of all healing.",
    attribution: "Dr. Kumar",
  },
]

export default function QuoteCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 8000)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-12">
        <Button variant="ghost" size="icon" onClick={handlePrevious} className="rounded-full">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous quote</span>
        </Button>
      </div>

      <div className="text-center p-8 md:p-12">
        <div className="mb-6 text-emerald-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>

        <blockquote className="font-serif text-2xl md:text-3xl italic mb-6">{quotes[activeIndex].text}</blockquote>

        <cite className="text-muted-foreground not-italic">— {quotes[activeIndex].attribution}</cite>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-12">
        <Button variant="ghost" size="icon" onClick={handleNext} className="rounded-full">
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next quote</span>
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? "bg-emerald-600" : "bg-gray-300 dark:bg-gray-700"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
