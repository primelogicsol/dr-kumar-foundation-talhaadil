'use client';

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Timeline from "@/components/timeline"
import WorldMap from "@/components/world-map"
import QuoteCarousel from "@/components/quote-carousel"
import DomainCard from "@/components/domain-card"
import FloatingParticles from "@/components/floating-particles"
import { useState, useEffect } from 'react'

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.sufipulse.com/youtube/videos-limited')
      .then(res => res.json())
      .then(data => {
        setVideos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching videos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Banner */}
      <section
        className="relative flex h-[75vh] lg:h-[80vh] items-center justify-center overflow-hidden bg-cover bg-center"
      >
        <FloatingParticles />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block">✨ The Wandering Light of Kashmir...</span>
            <span className="block mt-1 sm:mt-2">The Hidden Pearl of Haqiqat.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Dr. Ghulam Mohammad Kumar – A Saint Beyond Time, A Healer Beyond Form.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-800 text-black text-sm sm:text-base" asChild>
              <Link href="/his-life">
                Explore His Life <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* His Life - The Saint's Journey */}
      <section id="life" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            His Life – The Saint's Journey
          </h2>
          <Timeline />
          <div className="text-center mt-6 sm:mt-8">
            <Button className="bg-emerald-600 hover:bg-emerald-800 text-black text-sm sm:text-base" asChild>
              <Link href="/his-life">
                Read Full Biography <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sainthood - Fana & Baqa */}
      <section id="teachings" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Sainthood – Fana & Baqa
          </h2>
          <p className="text-center text-base sm:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
            The sacred philosophy of Dr. Kumar explores the profound concepts of Fana (annihilation of the self) and the
            Qalandari path of spiritual enlightenment.
          </p>
          <div className="mb-12 md:mb-16">
            <QuoteCarousel />
          </div>
          <div className="text-center max-w-xl sm:max-w-2xl mx-auto p-6 sm:p-8 border border-emerald-600/30 rounded-lg bg-white/50 dark:bg-gray-800/50 shadow-sm">
            <p className="text-lg sm:text-xl font-serif italic">
              🔹 "He healed without hands. He spoke through silence. He lived as Noor."
            </p>
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button className="bg-emerald-600 hover:bg-emerald-800 text-black text-sm sm:text-base" asChild>
              <Link href="/teachings">
                Explore Teachings <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Divine Domains of Dr. Kumar */}
      <section id="domains" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Divine Domains of Dr. Kumar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="h-full">
              <DomainCard
                icon="leaf"
                title="Divine Healing & Health"
                description="Healing through spiritual essence and holistic wellbeing."
              />
            </div>
            <div className="h-full">
              <DomainCard
                icon="globe"
                title="Environmental Sainthood"
                description="Sacred duty of stewardship and connection with nature."
              />
            </div>
            <div className="h-full">
              <DomainCard
                icon="brain"
                title="Sufi Science & Mysticism"
                description="Bridging spiritual wisdom with rational scientific inquiry."
              />
            </div>
            <div className="h-full">
              <DomainCard
                icon="book"
                title="Education & Awakening"
                description="Knowledge that awakens soul and expands consciousness."
              />
            </div>
            <div className="h-full">
              <DomainCard
                icon="dove"
                title="Peace, Silence & Presence"
                description="Silence and mindfulness as pathways to inner peace."
              />
            </div>
            <div className="h-full">
              <DomainCard
                icon="path"
                title="Qalandari Path & Truth"
                description="Transcending religious boundaries for universal truths."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Kumar's Global Legacy */}
      <section id="legacy" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Dr. Kumar's Global Legacy
          </h2>
          <div className="mb-12 md:mb-16">
            <WorldMap />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 md:mb-16">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4">Testimonials</h3>
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-sm sm:text-base">
                    "Dr. Kumar's approach to healing changed my understanding of medicine forever. He showed us that
                    true healing comes from within."
                    <footer className="text-xs sm:text-sm mt-2 font-medium">— Dr. Sarah Johnson, Neurologist</footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-sm sm:text-base">
                    "In his silence, I found answers to questions I had been asking my entire life. His presence was the
                    teaching."
                    <footer className="text-xs sm:text-sm mt-2 font-medium">— Michael Chen, Spiritual Seeker</footer>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4">Sufi Science Center (USA)</h3>
                <p className="mb-4 text-sm sm:text-base">
                  The Sufi Science Center continues Dr. Kumar's legacy by integrating spiritual wisdom with scientific
                  research, focusing on consciousness studies, healing practices, and environmental sustainability.
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-800 text-black text-sm sm:text-base" asChild>
                  <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                    Learn More About the Center
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-center mb-6">Foundation Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/projects/healing-programs" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Healing Programs</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Healing through spiritual workshops and retreats</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/water-protection" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Water Protection</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Preserving sacred waters of Kashmir and beyond</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/youth-rehabilitation" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Youth Rehabilitation</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Guiding youth with spiritual practices and support</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/craft-revival" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Craft Revival</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Reviving traditional Kashmiri arts and craftsmanship</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <Button className="bg-emerald-600 hover:bg-emerald-800 text-black text-sm sm:text-base" asChild>
                <Link href="/projects">
                  View All Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="media" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            SufiPulse Media
          </h2>
          <p className="text-center text-base sm:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
            Explore the teachings and legacy of Dr. Kumar through various media formats.
          </p>
          {loading ? (
            <div className="text-center py-20">Loading SufiPulse Media...</div>
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
                    <div className="group rounded-lg overflow-hidden flex flex-col h-[280px] md:h-[350px] pb-0">
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

              {/* See More button */}
              <div className="mt-10 text-center">
                <Link
                  href="/media-library"
                  className="inline-block px-6 py-3 bg-emerald-600 text-black font-medium rounded-lg shadow-md hover:bg-emerald-700 transition"
                >
                  See More
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
      {/* Visitor Counter */}
      <div className="py-6 sm:py-8 bg-gray-50 dark:bg-gray-900 text-center">
        <p className="text-xs sm:text-sm text-muted-foreground px-4">
          You are the 14,000th heart to walk this path. Every seeker matters.
        </p>
      </div>
    </div>
  )
}