"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const locations = [
  {
    id: 1,
    name: "Kashmir, India",
    description:
      "Birthplace and spiritual home of Dr. Kumar, where his journey began and his legacy is most deeply felt.",
    followers: "Thousands of followers across the region continue his teachings.",
    coordinates: { x: 68, y: 35 },
  },
  {
    id: 2,
    name: "Berkeley, USA",
    description:
      "Home of the Sufi Science Center, established to integrate Dr. Kumar's spiritual teachings with scientific research.",
    followers: "Growing community of practitioners and researchers.",
    coordinates: { x: 20, y: 38 },
  },
  {
    id: 3,
    name: "London, UK",
    description: "A major hub for Dr. Kumar's European followers, with regular zikr circles and healing workshops.",
    followers: "Active community organizing regular events and retreats.",
    coordinates: { x: 47, y: 30 },
  },
  {
    id: 4,
    name: "Istanbul, Turkey",
    description:
      "Important connection to the broader Sufi tradition, where Dr. Kumar's teachings found resonance with existing spiritual practices.",
    followers: "Integration with traditional Sufi orders and practices.",
    coordinates: { x: 54, y: 33 },
  },
  {
    id: 5,
    name: "Sydney, Australia",
    description: "Southern hemisphere center for Dr. Kumar's environmental teachings and water protection initiatives.",
    followers: "Focus on ecological spirituality and conservation efforts.",
    coordinates: { x: 85, y: 65 },
  },
]

export default function WorldMap() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null)

  return (
    <div className="relative">
      <div className="relative aspect-[2/1] overflow-hidden rounded-lg mb-6">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="World Map showing Dr. Kumar's global influence"
          fill
          className="object-cover"
        />

        {locations.map((location) => (
          <button
            key={location.id}
            className={`absolute w-4 h-4 rounded-full ${
              activeLocation === location.id ? "bg-[#E6C67C] scale-150" : "bg-[#E6C67C]/70"
            } transition-all hover:scale-150`}
            style={{
              left: `${location.coordinates.x}%`,
              top: `${location.coordinates.y}%`,
            }}
            onClick={() => setActiveLocation(location.id)}
            aria-label={`View information about ${location.name}`}
          />
        ))}
      </div>

      {activeLocation !== null && (
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-xl font-medium mb-2">{locations.find((loc) => loc.id === activeLocation)?.name}</h3>
            <p className="mb-2">{locations.find((loc) => loc.id === activeLocation)?.description}</p>
            <p className="text-sm text-muted-foreground">
              {locations.find((loc) => loc.id === activeLocation)?.followers}
            </p>
          </CardContent>
        </Card>
      )}

      <div className="text-center text-sm text-muted-foreground">
        Click on a location marker to learn more about Dr. Kumar's global impact.
      </div>
    </div>
  )
}
