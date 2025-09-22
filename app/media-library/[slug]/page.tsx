import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Clock, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MediaPlayer from "@/components/media-player"

// This would typically come from a database or CMS
const getMediaItem = (slug: string) => {
  const mediaItems = {
    "echoes-of-silence": {
      title: "Echoes of Silence",
      type: "music",
      duration: "53 min",
      date: "April 1, 2024",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["music", "album"],
      description:
        "A profound album of spiritual music inspired by Dr. Kumar's teachings on silence and presence. Each track is designed to guide the listener into a state of deep contemplation and inner peace.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for audio file
      transcript: "No transcript available for this musical album.",
      relatedMedia: ["divine-resonance-live", "healing-chants-kashmir"],
    },
    "divine-resonance-live": {
      title: "Divine Resonance Live",
      type: "performance",
      duration: "70 min",
      date: "October 20, 2023",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["performance", "video"],
      description:
        "A live recording of a SufiPulse concert from London, capturing the transformative energy of spiritual music. Witness the ensemble's powerful performance and the audience's deep engagement.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for video file
      transcript: "Live performance with minimal spoken word. Focus on musical experience.",
      relatedMedia: ["echoes-of-silence", "sufipulse-documentary"],
    },
    "healing-chants-kashmir": {
      title: "Healing Chants of Kashmir",
      type: "chants",
      duration: "40 min",
      date: "February 10, 2023",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["chants", "audio", "healing"],
      description: "Traditional Kashmiri chants and zikr, imbued with the healing vibrations taught by Dr. Kumar.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for audio file
      transcript: "Transcriptions of chants available upon request.",
      relatedMedia: ["echoes-of-silence", "the-vibrational-universe"],
    },
    "the-vibrational-universe": {
      title: "The Vibrational Universe",
      type: "lecture",
      duration: "60 min",
      date: "September 5, 2022",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["lecture", "audio", "teachings", "sufi-science-center"], // Updated category
      description:
        "An insightful audio lecture by a senior student of Dr. Kumar, delving into his profound insights on the vibrational nature of reality and its implications for healing and consciousness.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for audio file
      transcript: "Full transcript available for download.",
      relatedMedia: ["healing-chants-kashmir", "rhythm-of-presence"],
    },
    "sufipulse-documentary": {
      title: "The Heartbeat of SufiPulse",
      type: "documentary",
      duration: "30 min",
      date: "January 15, 2024",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["documentary", "behind-the-scenes"],
      description: "A short documentary exploring the creation and mission of the SufiPulse initiative.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for video file
      transcript: "Full transcript available.",
      relatedMedia: ["divine-resonance-live", "interview-sufipulse-artist"],
    },
    "rhythm-of-presence": {
      title: "Rhythm of Presence",
      type: "music",
      duration: "48 min",
      date: "July 1, 2023",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["music", "meditation"],
      description:
        "An album of instrumental music specifically designed for meditation and cultivating inner presence. The gentle melodies and rhythms facilitate a deeper connection to the present moment.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for audio file
      transcript: "No transcript available for this musical album.",
      relatedMedia: ["the-vibrational-universe", "echoes-of-silence"],
    },
    "interview-sufipulse-artist": {
      title: "Interview with a SufiPulse Artist",
      type: "interview",
      duration: "25 min",
      date: "March 8, 2024",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      categories: ["interview", "audio"],
      description:
        "An insightful interview with one of the lead musicians of the SufiPulse ensemble, discussing their creative process, spiritual journey, and the role of music in awakening consciousness.",
      content: "/placeholder.svg?height=720&width=1280", // Placeholder for audio file
      transcript: "Full transcript available.",
      relatedMedia: ["sufipulse-documentary", "echoes-of-silence"],
    },
  }

  return mediaItems[slug as keyof typeof mediaItems]
}

export default function MediaItemPage({ params }: { params: { slug: string } }) {
  const mediaItem = getMediaItem(params.slug)

  if (!mediaItem) {
    return (
      <div className="container py-16 text-center">
        <h1 className="font-serif text-3xl font-bold mb-4">Media Not Found</h1>
        <p className="mb-8">The requested media item could not be found.</p>
        <Button asChild>
          <Link href="/media-library">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to SufiPulse Media
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="relative h-[50vh] min-h-[300px]">
        <Image
          src={mediaItem.thumbnail || "/placeholder.svg"}
          alt={mediaItem.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{mediaItem.title}</h1>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>{mediaItem.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{mediaItem.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{mediaItem.date}</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {mediaItem.categories.map((category) => (
                <Link href={`/media-library?category=${category}`} key={category}>
                  <Badge variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-none">
                    {category.replace(/-/g, " ")}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {mediaItem.type === "documentary" || mediaItem.type === "performance" ? (
                <div className="mb-8">
                  <MediaPlayer type="video" src={mediaItem.content} poster={mediaItem.thumbnail} />
                </div>
              ) : mediaItem.type === "audio" ||
                mediaItem.type === "music" ||
                mediaItem.type === "chants" ||
                mediaItem.type === "lecture" ||
                mediaItem.type === "interview" ? (
                <div className="mb-8">
                  <MediaPlayer type="audio" src={mediaItem.content} />
                </div>
              ) : null}

              <div className="prose dark:prose-invert max-w-none">
                <h2>Description</h2>
                <p>{mediaItem.description}</p>

                {mediaItem.type === "article" && (
                  <div className="mt-8">
                    <h2>Content</h2>
                    <p>{mediaItem.content}</p>
                  </div>
                )}

                {mediaItem.transcript && (
                  <div className="mt-8">
                    <h2>Transcript</h2>
                    <p>{mediaItem.transcript}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-8">
                <h3 className="font-serif text-xl font-bold mb-4">Related Media</h3>
                <div className="space-y-4">
                  {mediaItem.relatedMedia?.map((slug) => {
                    const related = getMediaItem(slug)
                    if (!related) return null

                    return (
                      <Link href={`/media-library/${slug}`} key={slug} className="block group">
                        <div className="flex gap-3">
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                              src={related.thumbnail || "/placeholder.svg"}
                              alt={related.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-primary transition-colors">{related.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {related.type} • {related.duration}
                            </p>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-4">Share</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.5 9 4.5-1-1.1-1.7-2.3-2-3.5C20 5.5 22 4 22 4z" />
                    </svg>
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-12">
            <Button variant="outline" asChild>
              <Link href="/media-library">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to SufiPulse Media
              </Link>
            </Button>
            <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black" asChild>
              <Link href="/media-library">
                Browse More Media <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
