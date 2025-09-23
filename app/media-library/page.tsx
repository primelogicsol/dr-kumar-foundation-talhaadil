"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export default function MediaLibraryPage() {
  const [videos, setVideos] = useState([])
  const [exclusiveVideos, setExclusiveVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [exclusiveLoading, setExclusiveLoading] = useState(true)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.sufipulse.com/youtube/videos')
        const data = await response.json()
        setVideos(data.slice(0, 12)) // Limit to first 12 videos
      } catch (error) {
        console.error('Error fetching videos:', error)
      } finally {
        setLoading(false)
      }
    }

    const fetchExclusiveVideos = async () => {
      try {
        setExclusiveLoading(true)
        const response = await fetch('https://api.sufipulse.com/youtube/exclusive')
        const data = await response.json()
        setExclusiveVideos(data.slice(0, 6)) // Limit to first 6 exclusive videos
      } catch (error) {
        console.error('Error fetching exclusive videos:', error)
      } finally {
        setExclusiveLoading(false)
      }
    }

    fetchVideos()
    fetchExclusiveVideos()
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PageHeader
        title="SufiPulse Media"
        subtitle="Explore Spiritual Music, Audio Teachings, and Performances"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <section id="media" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">Featured Videos</h2>
          <p className="text-center text-base sm:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
            Explore the teachings and legacy of Dr. Kumar through various media formats.
          </p>
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading SufiPulse Media...
                </span>
              </div>
              <p className="text-green-600 dark:text-green-400 mt-2">Loading SufiPulse Media...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {videos.map((video) => (
                  <Link
                    key={video.id}
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="group rounded-lg overflow-hidden flex flex-col h-[280px] md:h-[350px]">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover transition-transform group-hover:scale-105 flex-shrink-0"
                      />
                      <div className="p-3 sm:p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col space-y-2 flex-grow">
                        <h3 className="font-medium text-sm sm:text-base line-clamp-2">{video.title}</h3>
                        <p className="text-xs sm:text-sm opacity-80">Performance | {video.duration} • {video.views} views</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <Link href="https://sufipulse.com/gallery">See More</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

     
    </div>
  )
}