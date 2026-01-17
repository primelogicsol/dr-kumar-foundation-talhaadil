"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

type Video = {
  id?: string
  title?: string
  thumbnail?: string
  duration?: string
  views?: string
}

export default function MediaLibraryPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let isMounted = true

    const fetchVideos = async () => {
      try {
        setLoading(true)
        setError(false)

        const response = await fetch("https://api.sufipulse.com/youtube/videos")

        if (!response.ok) {
          throw new Error("Request failed")
        }

        const data = await response.json()

        if (!Array.isArray(data)) {
          throw new Error("Invalid API response")
        }

        if (isMounted) {
          setVideos(data.slice(0, 12))
        }
      } catch (err) {
        console.log("Video fetch failed")
        if (isMounted) {
          setError(true)
          setVideos([])
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchVideos()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PageHeader
        title="SufiPulse Media"
        subtitle="Explore Spiritual Music, Audio Teachings, and Performances"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Featured Videos
          </h2>

          <p className="text-center text-base sm:text-lg mb-12 max-w-3xl mx-auto">
            Explore the teachings and legacy of Dr. Kumar through various media formats.
          </p>

          {loading && (
            <div className="text-center py-20">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-r-transparent" />
              <p className="text-green-600 mt-3">Loading SufiPulse Media...</p>
            </div>
          )}

          {!loading && error && (
            <div className="text-center py-20 text-red-600">
              Failed to fetch videos. Please try again later.
            </div>
          )}

          {!loading && !error && videos.length > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <Link
                    key={video.id || index}
                    href={
                      video.id
                        ? `https://www.youtube.com/watch?v=${video.id}`
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="rounded-lg overflow-hidden flex flex-col h-[320px] bg-gray-100 dark:bg-gray-900">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title || "Video"}
                        className="w-full aspect-video object-cover"
                      />

                      <div className="p-4 flex flex-col gap-2">
                        <h3 className="font-medium text-sm line-clamp-2">
                          {video.title || "Untitled Video"}
                        </h3>
                        <p className="text-xs opacity-80">
                          {video.duration || "--"} • {video.views || "--"} views
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://sufipulse.com/gallery">
                    See More
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
