import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Timeline from "@/components/timeline"
import WorldMap from "@/components/world-map"
import QuoteCarousel from "@/components/quote-carousel"
import DomainCard from "@/components/domain-card"
import FloatingParticles from "@/components/floating-particles"

export default function Home() {
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
            <Button size="lg" className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black text-sm sm:text-base" asChild>
              <Link href="/his-life">
                Explore His Life <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 bg-transparent text-sm sm:text-base"
              asChild
            >
              <Link href="/media-library?category=documentaries">
                Watch the Journey <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 bg-transparent text-sm sm:text-base"
              asChild
            >
              <Link href="/get-involved">
                Support the Mission <ChevronRight className="ml-2 h-4 w-4" />
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
            <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black text-sm sm:text-base" asChild>
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

          <div className="text-center max-w-xl sm:max-w-2xl mx-auto p-6 sm:p-8 border border-[#E6C67C]/30 rounded-lg bg-white/50 dark:bg-gray-800/50 shadow-sm">
            <p className="text-lg sm:text-xl font-serif italic">
              🔹 "He healed without hands. He spoke through silence. He lived as Noor."
            </p>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black text-sm sm:text-base" asChild>
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
            <Link href="/domains/healing">
              <DomainCard
                icon="leaf"
                title="Divine Healing & Health"
                description="Dr. Kumar's approach to healing transcended conventional medicine, focusing on the spiritual essence of wellbeing."
              />
            </Link>
            <Link href="/domains/environment">
              <DomainCard
                icon="globe"
                title="Environmental Sainthood"
                description="His deep connection with nature emphasized the sacred duty of environmental stewardship."
              />
            </Link>
            <Link href="/sufi-science">
              <DomainCard
                icon="brain"
                title="Sufi Science Center & Rational Mysticism"
                description="Bridging the gap between spiritual wisdom and scientific understanding through rational mysticism."
              />
            </Link>
            <Link href="/domains/education">
              <DomainCard
                icon="book"
                title="Education & Awakening"
                description="Promoting knowledge that awakens the soul and expands consciousness beyond conventional learning."
              />
            </Link>
            <Link href="/domains/peace">
              <DomainCard
                icon="dove"
                title="Peace, Silence & Presence"
                description="Teaching the power of silence and mindful presence as pathways to inner peace and spiritual growth."
              />
            </Link>
            <Link href="/domains/qalandari">
              <DomainCard
                icon="path"
                title="Qalandari Path – Beyond Sect, Beyond Self"
                description="The essence of the Qalandari path transcends religious boundaries, focusing on universal spiritual truths."
              />
            </Link>
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
                  <blockquote className="border-l-4 border-[#E6C67C] pl-4 italic text-sm sm:text-base">
                    "Dr. Kumar's approach to healing changed my understanding of medicine forever. He showed us that
                    true healing comes from within."
                    <footer className="text-xs sm:text-sm mt-2 font-medium">— Dr. Sarah Johnson, Neurologist</footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-[#E6C67C] pl-4 italic text-sm sm:text-base">
                    "In his silence, I found answers to questions I had been asking my entire life. His presence was the
                    teaching."
                    <footer className="text-xs sm:text-sm mt-2 font-medium">— Michael Chen, Spiritual Seeker</footer>
                  </blockquote>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="text-sm sm:text-base" asChild>
                    <Link href="/testimonials">Read More Testimonials</Link>
                  </Button>
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
                <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black text-sm sm:text-base" asChild>
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
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Continuing Dr. Kumar's healing work through workshops and retreats
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/water-protection" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Water Protection</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Preserving the sacred waters of Kashmir and beyond</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/youth-rehabilitation" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Youth Rehabilitation</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Guiding troubled youth through spiritual practices</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/craft-revival" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Craft Revival</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Preserving traditional Kashmiri arts and crafts</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black text-sm sm:text-base" asChild>
                <Link href="/projects">
                  View All Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Multimedia Library */}
      <section id="media" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">SufiPulse Media</h2>
          <p className="text-center text-base sm:text-lg mb-8 md:mb-12 max-w-3xl mx-auto">
            Explore the teachings and legacy of Dr. Kumar through various media formats.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <Link href="/media-library">
              <Button variant="outline" className="text-sm sm:text-base">All</Button>
            </Link>
            <Link href="/media-library?category=music">
              <Button variant="outline" className="text-sm sm:text-base">Music</Button>
            </Link>
            <Link href="/media-library?category=healing">
              <Button variant="outline" className="text-sm sm:text-base">Healing</Button>
            </Link>
            <Link href="/media-library?category=performance">
              <Button variant="outline" className="text-sm sm:text-base">Performances</Button>
            </Link>
            <Link href="/media-library?category=interviews">
              <Button variant="outline" className="text-sm sm:text-base">Interviews</Button>
            </Link>
            <Link href="/media-library?category=chants">
              <Button variant="outline" className="text-sm sm:text-base">Chants</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Video Item */}
            <Link href="/media-library/divine-resonance-live" className="block">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Live SufiPulse Performance"
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-3 sm:p-4 text-white">
                    <h3 className="font-medium text-sm sm:text-base">Divine Resonance Live</h3>
                    <p className="text-xs sm:text-sm opacity-80">Performance | 70 min</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Audio Item */}
            <Link href="/media-library/echoes-of-silence" className="block">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Echoes of Silence Album"
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-3 sm:p-4 text-white">
                    <h3 className="font-medium text-sm sm:text-base">Echoes of Silence</h3>
                    <p className="text-xs sm:text-sm opacity-80">Music Album | 53 min</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Article Item */}
            <Link href="/media-library/healing-chants-kashmir" className="block">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Healing Chants of Kashmir"
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-3 sm:p-4 text-white">
                    <h3 className="font-medium text-sm sm:text-base">Healing Chants of Kashmir</h3>
                    <p className="text-xs sm:text-sm opacity-80">Chants | 40 min</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Music Item */}
            <Link href="/media-library/rhythm-of-presence" className="block">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Rhythm of Presence Album"
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-3 sm:p-4 text-white">
                    <h3 className="font-medium text-sm sm:text-base">Rhythm of Presence</h3>
                    <p className="text-xs sm:text-sm opacity-80">Music | Meditation</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Interview Item */}
            <Link href="/media-library/interview-sufipulse-artist" className="block">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Interview with SufiPulse Artist"
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-3 sm:p-4 text-white">
                    <h3 className="font-medium text-sm sm:text-base">Interview with a SufiPulse Artist</h3>
                    <p className="text-xs sm:text-sm opacity-80">Interview | 25 min</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Documentary Item */}
            <Link href="/media-library/sufipulse-documentary" className="block">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="The Heartbeat of SufiPulse Documentary"
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-3 sm:p-4 text-white">
                    <h3 className="font-medium text-sm sm:text-base">The Heartbeat of SufiPulse</h3>
                    <p className="text-xs sm:text-sm opacity-80">Documentary | 30 min</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Button variant="outline" size="lg" className="text-sm sm:text-base" asChild>
              <Link href="/media-library">View All Media</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support the Mission */}
      <section id="involved" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Support the Mission
          </h2>
          <p className="text-center text-base sm:text-lg mb-8 md:mb-12 max-w-3xl mx-auto font-serif italic">
            💖 "Send your Zikr. Send your Breath. We don't want donations, we want Divine Intent."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card>
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center h-full">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#E6C67C]/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-[#E6C67C]"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-2">Share Your Story</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Submit stories or artwork inspired by Dr. Kumar and his teachings.
                </p>
                <Button variant="outline" className="mt-auto bg-transparent text-sm sm:text-base" asChild>
                  <Link href="/get-involved/share-story">Submit Your Story</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center h-full">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#E6C67C]/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-[#E6C67C]"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-2">Volunteer</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Join our efforts in healing, ecology, or music initiatives around the world.
                </p>
                <Button variant="outline" className="mt-auto bg-transparent text-sm sm:text-base" asChild>
                  <Link href="/get-involved/volunteer">Become a Volunteer</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center h-full">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#E6C67C]/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-[#E6C67C]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-2">Join Zikr Circles</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Connect with global zikr groups and participate in collective spiritual practice.
                </p>
                <Button variant="outline" className="mt-auto bg-transparent text-sm sm:text-base" asChild>
                  <Link href="/get-involved/zikr-circles">Find a Circle</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black text-sm sm:text-base" asChild>
              <Link href="/get-involved">
                More Ways to Get Involved <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
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