"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import PageHeader from "@/components/page-header"

export default function MediaLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Sample media items focused on SufiPulse
  const mediaItems = [
    {
      id: "echoes-of-silence",
      title: "Echoes of Silence",
      type: "music",
      duration: "53 min",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["music", "album"],
      description: "A profound album of spiritual music inspired by Dr. Kumar's teachings on silence and presence.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for audio file
    },
    {
      id: "divine-resonance-live",
      title: "Divine Resonance Live",
      type: "performance",
      duration: "70 min",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["performance", "video"],
      description: "A live recording of a SufiPulse concert, capturing the transformative energy of spiritual music.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for video file
    },
    {
      id: "healing-chants-kashmir",
      title: "Healing Chants of Kashmir",
      type: "chants",
      duration: "40 min",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["chants", "audio", "healing"],
      description: "Traditional Kashmiri chants and zikr, imbued with the healing vibrations taught by Dr. Kumar.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for audio file
    },
    {
      id: "the-vibrational-universe",
      title: "The Vibrational Universe",
      type: "lecture",
      duration: "60 min",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["lecture", "audio", "teachings", "sufi-science-center"], // Updated category
      description:
        "An audio lecture by a senior student on Dr. Kumar's insights into the vibrational nature of reality.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for audio file
    },
    {
      id: "sufipulse-documentary",
      title: "The Heartbeat of SufiPulse",
      type: "documentary",
      duration: "30 min",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["documentary", "behind-the-scenes"],
      description: "A short documentary exploring the creation and mission of the SufiPulse initiative.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for video file
    },
    {
      id: "rhythm-of-presence",
      title: "Rhythm of Presence",
      type: "music",
      duration: "48 min",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["music", "meditation"],
      description: "Instrumental music designed for meditation and cultivating inner presence.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for audio file
    },
    {
      id: "interview-sufipulse-artist",
      title: "Interview with a SufiPulse Artist",
      type: "interview",
      duration: "25 min",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["interview", "audio"],
      description: "An insightful interview with one of the lead musicians of the SufiPulse ensemble.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for audio file
    },
  ]

  // Filter media items based on search query and category
  const filteredItems = mediaItems.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === null || item.categories.includes(selectedCategory)

    return matchesSearch && matchesCategory
  })

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PageHeader
        title="SufiPulse Media"
        subtitle="Explore Spiritual Music, Audio Teachings, and Performances"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search SufiPulse media..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => handleCategorySelect(null)}
              >
                All
              </Button>
              <Button
                variant={selectedCategory === "music" ? "default" : "outline"}
                onClick={() => handleCategorySelect("music")}
              >
                Music
              </Button>
              <Button
                variant={selectedCategory === "chants" ? "default" : "outline"}
                onClick={() => handleCategorySelect("chants")}
              >
                Chants
              </Button>
              <Button
                variant={selectedCategory === "lecture" ? "default" : "outline"}
                onClick={() => handleCategorySelect("lecture")}
              >
                Lectures
              </Button>
              <Button
                variant={selectedCategory === "performance" ? "default" : "outline"}
                onClick={() => handleCategorySelect("performance")}
              >
                Performances
              </Button>
              <Button
                variant={selectedCategory === "interview" ? "default" : "outline"}
                onClick={() => handleCategorySelect("interview")}
              >
                Interviews
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Media</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Link href={`/media-library/${item.id}`} key={item.id} className="block">
                    <div className="group relative overflow-hidden rounded-lg">
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        width={640}
                        height={360}
                        className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <div className="p-4 text-white w-full">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium">{item.title}</h3>
                            <Badge variant="outline" className="bg-black/50 text-white border-none">
                              {item.type}
                            </Badge>
                          </div>
                          <p className="text-sm opacity-80">{item.duration}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="video" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems
                  .filter((item) => ["documentary", "performance"].includes(item.type))
                  .map((item) => (
                    <Link href={`/media-library/${item.id}`} key={item.id} className="block">
                      <div className="group relative overflow-hidden rounded-lg">
                        <Image
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          width={640}
                          height={360}
                          className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                          <div className="p-4 text-white w-full">
                            <div className="flex justify-between items-center mb-1">
                              <h3 className="font-medium">{item.title}</h3>
                              <Badge variant="outline" className="bg-black/50 text-white border-none">
                                {item.type}
                              </Badge>
                            </div>
                            <p className="text-sm opacity-80">{item.duration}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="audio" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems
                  .filter((item) => ["audio", "music", "chants", "lecture", "interview"].includes(item.type))
                  .map((item) => (
                    <Link href={`/media-library/${item.id}`} key={item.id} className="block">
                      <div className="group relative overflow-hidden rounded-lg">
                        <Image
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          width={640}
                          height={360}
                          className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                          <div className="p-4 text-white w-full">
                            <div className="flex justify-between items-center mb-1">
                              <h3 className="font-medium">{item.title}</h3>
                              <Badge variant="outline" className="bg-black/50 text-white border-none">
                                {item.type}
                              </Badge>
                            </div>
                            <p className="text-sm opacity-80">{item.duration}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Subscribe to SufiPulse Updates</h2>
            <p className="text-lg mb-8">
              Be the first to know when new music, performances, and audio teachings are released.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Your email address" className="flex-1" />
              <Button className="bg-emerald-600 hover:bg-emerald-800 text-black">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
